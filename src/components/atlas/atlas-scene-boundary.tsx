"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onUnavailable?: () => void;
}

interface State {
  unavailable: boolean;
}

export function AtlasSceneFallback() {
  return (
    <div
      className="atlas-scene-fallback"
      role="img"
      aria-label="Two-dimensional atlas field: source substrate, Tier 0 law, recursive aperture, canonical field and Tier 1 readout"
    >
      <div aria-hidden="true">
        <div className="atlas-fallback-stars" />
        <div className="atlas-fallback-axis" />
        <div className="atlas-fallback-source"><span>Ω</span><small>Source substrate</small></div>
        <div className="atlas-fallback-stage atlas-fallback-t0"><i /><span>Tier 0</span></div>
        <div className="atlas-fallback-stage atlas-fallback-aperture"><i /><span>Recursive aperture</span></div>
        <div className="atlas-fallback-stage atlas-fallback-field"><i /><span>Canonical field</span></div>
        <div className="atlas-fallback-stage atlas-fallback-tier1"><i /><span>Tier 1 readout</span></div>
      </div>
    </div>
  );
}

export default class AtlasSceneBoundary extends Component<Props, State> {
  state: State = { unavailable: false };

  static getDerivedStateFromError(): State {
    return { unavailable: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    this.props.onUnavailable?.();
  }

  render() {
    if (!this.state.unavailable) return this.props.children;
    return <AtlasSceneFallback />;
  }
}
