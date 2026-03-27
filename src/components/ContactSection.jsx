import React, { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { contactSectionContent } from "../data/siteContent";
import { contactStyles } from "../styles/componentStyles";

export default function ContactSection() {
  const [formValues, setFormValues] = useState(() =>
    contactSectionContent.form.fields.reduce((values, field) => {
      values[field.name] = "";
      return values;
    }, {}),
  );
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  const iconMap = {
    email: EnvelopeIcon,
    phone: PhoneIcon,
    location: MapPinIcon,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
          from_name: formValues.name,
          from_email: formValues.email,
          message: formValues.message,
          reply_to: formValues.email,
          to_name: contactSectionContent.form.recipientName,
        },
        {
          publicKey,
        },
      );

      setFormValues(
        contactSectionContent.form.fields.reduce((values, field) => {
          values[field.name] = "";
          return values;
        }, {}),
      );
      setSubmitState({
        status: "idle",
        message: "",
      });

      if (typeof window !== "undefined") {
        window.alert(contactSectionContent.form.messages.successAlert);
      }
    } catch (error) {
      setSubmitState({
        status: "error",
        message: contactSectionContent.form.messages.error,
      });
    }
  };

  return (
    <section id="contact" className={contactStyles.section}>
      <div className={contactStyles.header}>
        <h2 className={contactStyles.title}>{contactSectionContent.title}</h2>
        <div className={contactStyles.socialRow}>
          {contactSectionContent.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`${contactStyles.socialButton} ${contactStyles.socialTones[link.tone]}`}
            >
              {link.label}
            </a>
          ))}
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
                  <h3 className={contactStyles.methodTitle}>{method.title}</h3>
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
          <form className={contactStyles.form} onSubmit={handleSubmit}>
            {contactSectionContent.form.fields.map((field) => (
              <div key={field.name}>
                <label className={contactStyles.fieldWrapper}>
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    rows={field.rows}
                    placeholder={field.placeholder}
                    value={formValues[field.name]}
                    onChange={handleChange}
                    disabled={submitState.status === "loading"}
                    className={contactStyles.textarea}
                  />
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formValues[field.name]}
                    onChange={handleChange}
                    disabled={submitState.status === "loading"}
                    className={contactStyles.input}
                  />
                )}
              </div>
            ))}
            {submitState.message ? (
              <p
                className={`${contactStyles.statusBase} ${
                  submitState.status === "error"
                    ? contactStyles.statusError
                    : contactStyles.statusLoading
                }`}
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
  );
}
