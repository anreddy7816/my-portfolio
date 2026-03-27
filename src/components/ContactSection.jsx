import React, { useEffect, useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { contactSectionContent } from "../data/siteContent";
import { contactStyles } from "../styles/componentStyles";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function createEmptyFormValues() {
  return contactSectionContent.form.fields.reduce((values, field) => {
    values[field.name] = "";
    return values;
  }, {});
}

function validateForm(values) {
  const errors = {};
  const { validation } = contactSectionContent.form.messages;

  if (!values.name) {
    errors.name = validation.nameRequired;
  } else if (values.name.length < 2) {
    errors.name = validation.nameTooShort;
  }

  if (!values.email) {
    errors.email = validation.emailRequired;
  } else if (!emailPattern.test(values.email)) {
    errors.email = validation.emailInvalid;
  }

  if (!values.message) {
    errors.message = validation.messageRequired;
  } else if (values.message.length < 10) {
    errors.message = validation.messageTooShort;
  }

  return errors;
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.596 2 12.266c0 4.535 2.865 8.382 6.839 9.74.5.095.682-.223.682-.495 0-.245-.009-.894-.014-1.754-2.782.617-3.369-1.39-3.369-1.39-.455-1.18-1.11-1.494-1.11-1.494-.908-.637.069-.624.069-.624 1.004.072 1.532 1.056 1.532 1.056.892 1.566 2.341 1.114 2.91.852.091-.664.35-1.114.636-1.37-2.221-.26-4.556-1.14-4.556-5.073 0-1.12.39-2.037 1.029-2.754-.103-.261-.446-1.313.098-2.737 0 0 .84-.277 2.75 1.052A9.32 9.32 0 0 1 12 6.836c.85.004 1.706.118 2.505.347 1.909-1.329 2.748-1.052 2.748-1.052.546 1.424.202 2.476.1 2.737.641.717 1.027 1.634 1.027 2.754 0 3.943-2.339 4.81-4.566 5.065.359.32.679.95.679 1.915 0 1.382-.012 2.497-.012 2.836 0 .275.18.595.688.494C19.138 20.644 22 16.8 22 12.266 22 6.596 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.526 15.5v-5.268c0-2.59-1.382-3.794-3.226-3.794-1.486 0-2.153.816-2.525 1.39v-1.193H9.97c.04.79 0 8.865 0 8.865h2.753V13.55c0-.265.02-.53.097-.72.21-.53.689-1.079 1.49-1.079 1.051 0 1.471.814 1.471 2.007V18.5h2.693ZM7.066 8.505c.96 0 1.558-.637 1.558-1.433-.018-.814-.598-1.432-1.54-1.432-.94 0-1.557.618-1.557 1.432 0 .796.598 1.433 1.52 1.433h.019ZM8.42 18.5V9.635H5.666V18.5H8.42Z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formValues, setFormValues] = useState(createEmptyFormValues);
  const [fieldErrors, setFieldErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToastMessage("");
    }, 4500);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const iconMap = {
    email: EnvelopeIcon,
    phone: PhoneIcon,
    location: MapPinIcon,
  };
  const socialIconMap = {
    GitHub: GitHubIcon,
    LinkedIn: LinkedInIcon,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFieldErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      return {
        ...currentErrors,
        [name]: "",
      };
    });

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedValues = Object.fromEntries(
      Object.entries(formValues).map(([key, value]) => [key, value.trim()]),
    );
    const nextFieldErrors = validateForm(trimmedValues);

    setFormValues(trimmedValues);

    if (Object.values(nextFieldErrors).some(Boolean)) {
      setFieldErrors(nextFieldErrors);
      setSubmitState({
        status: "idle",
        message: "",
      });
      return;
    }

    setFieldErrors({});

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState({
        status: "error",
        message: contactSectionContent.form.messages.configError,
      });
      return;
    }

    setSubmitState({
      status: "loading",
      message: contactSectionContent.form.messages.sending,
    });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: trimmedValues.name,
          from_email: trimmedValues.email,
          message: trimmedValues.message,
          reply_to: trimmedValues.email,
          to_name: contactSectionContent.form.recipientName,
        },
        {
          publicKey,
        },
      );

      setFormValues(createEmptyFormValues());
      setSubmitState({
        status: "idle",
        message: "",
      });
      setToastMessage(contactSectionContent.form.messages.successAlert);
    } catch (error) {
      setSubmitState({
        status: "error",
        message: contactSectionContent.form.messages.error,
      });
    }
  };

  return (
    <>
      <section id="contact" className={contactStyles.section}>
        <div className={contactStyles.header}>
          <h2 className={contactStyles.title}>{contactSectionContent.title}</h2>
          <div className={contactStyles.socialRow}>
            {contactSectionContent.socialLinks.map((link) => {
              const SocialIcon = socialIconMap[link.label];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${contactStyles.socialButton} ${contactStyles.socialTones[link.tone]}`}
                  aria-label={link.label}
                  title={link.label}
                >
                  <SocialIcon className={contactStyles.socialIcon} />
                </a>
              );
            })}
          </div>
          <p className={contactStyles.subtitle}>
            {contactSectionContent.subtitle}
          </p>
        </div>
        <div className={contactStyles.grid}>
          <div className={contactStyles.methods}>
            {contactSectionContent.methods.map((method) => {
              const Icon = iconMap[method.icon];

              return (
                <div key={method.title} className={contactStyles.methodRow}>
                  <Icon className={contactStyles.methodIcon} />
                  <div>
                    <h3 className={contactStyles.methodTitle}>
                      {method.title}
                    </h3>
                    <p className={contactStyles.methodDescription}>
                      {method.description}
                    </p>
                    <a href={method.href} className={contactStyles.methodLink}>
                      {method.value}
                    </a>
                  </div>
                </div>
              );
            })}
            <div className={contactStyles.locationRow}>
              <MapPinIcon className={contactStyles.locationIcon} />
              <span>{contactSectionContent.location.value}</span>
            </div>
          </div>
          <div className={contactStyles.formCard}>
            <h3 className={contactStyles.formTitle}>
              {contactSectionContent.form.title}
            </h3>
            <form
              className={contactStyles.form}
              onSubmit={handleSubmit}
              noValidate
            >
              {contactSectionContent.form.fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className={contactStyles.fieldWrapper}
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={field.rows}
                      placeholder={field.placeholder}
                      value={formValues[field.name]}
                      onChange={handleChange}
                      disabled={submitState.status === "loading"}
                      aria-invalid={Boolean(fieldErrors[field.name])}
                      aria-describedby={
                        fieldErrors[field.name]
                          ? `${field.name}-error`
                          : undefined
                      }
                      required
                      className={`${contactStyles.textarea} ${
                        fieldErrors[field.name] ? contactStyles.inputError : ""
                      }`}
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formValues[field.name]}
                      onChange={handleChange}
                      disabled={submitState.status === "loading"}
                      aria-invalid={Boolean(fieldErrors[field.name])}
                      aria-describedby={
                        fieldErrors[field.name]
                          ? `${field.name}-error`
                          : undefined
                      }
                      required
                      className={`${contactStyles.input} ${
                        fieldErrors[field.name] ? contactStyles.inputError : ""
                      }`}
                    />
                  )}
                  {fieldErrors[field.name] ? (
                    <p
                      id={`${field.name}-error`}
                      className={contactStyles.fieldErrorText}
                    >
                      {fieldErrors[field.name]}
                    </p>
                  ) : null}
                </div>
              ))}
              {submitState.message ? (
                <p
                  className={`${contactStyles.statusBase} ${
                    submitState.status === "error"
                      ? contactStyles.statusError
                      : contactStyles.statusLoading
                  }`}
                  role="status"
                  aria-live={
                    submitState.status === "error" ? "assertive" : "polite"
                  }
                >
                  {submitState.message}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={submitState.status === "loading"}
                className={`${contactStyles.submit} ${
                  submitState.status === "loading"
                    ? contactStyles.submitDisabled
                    : ""
                }`}
              >
                {submitState.status === "loading"
                  ? contactSectionContent.form.submittingLabel
                  : contactSectionContent.form.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </section>
      {toastMessage ? (
        <div className={contactStyles.toastViewport} aria-live="polite">
          <div className={contactStyles.toastCard} role="status">
            <span className={contactStyles.toastIcon} aria-hidden="true">
              ✓
            </span>
            <p className={contactStyles.toastMessage}>{toastMessage}</p>
            <button
              type="button"
              onClick={() => setToastMessage("")}
              className={contactStyles.toastClose}
              aria-label="Dismiss success message"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
