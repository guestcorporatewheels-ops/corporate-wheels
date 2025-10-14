import React from "react";

type Props = { children: React.ReactNode };

export default class ErrorBoundary extends React.Component<Props, { hasError: boolean; error?: Error }>{
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // Log to console or send to monitoring
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
          <div className="text-center p-6">
            <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-4">An unexpected error occurred. Please refresh the page or contact support.</p>
            <button
              className="px-4 py-2 rounded-md btn-gradient text-black"
              onClick={() => window.location.reload()}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
