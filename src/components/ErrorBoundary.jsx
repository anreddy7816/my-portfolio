import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
          <p className="text-5xl mb-4" aria-hidden="true">
            😵
          </p>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Something went wrong
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            An unexpected error occurred. Please refresh the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold shadow-md2 hover:shadow-md4 transition-all duration-300"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
