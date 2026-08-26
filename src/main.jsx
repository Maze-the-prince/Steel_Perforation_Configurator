import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import '../public/styles.css';

class ConfiguratorErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="steel-app">
          <p className="viewer-error">The configurator hit an error: {String(this.state.error.message || this.state.error)}</p>
        </main>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfiguratorErrorBoundary>
      <App />
    </ConfiguratorErrorBoundary>
  </React.StrictMode>
);
