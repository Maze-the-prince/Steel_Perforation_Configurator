import React, { useEffect, useRef } from 'react';
import { Three3DScene } from '../three/Three3DScene.js';
import { isCompactWeb } from '../ar/detect.js';

const VIEW_DEBOUNCE_MS = isCompactWeb() ? 180 : 120;

export function Viewer({ config, scalePercent, onReady, onError, onArState, onArScale, onBusy }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const readyRef = useRef(false);
  const arStateRef = useRef(onArState);
  const arScaleRef = useRef(onArScale);
  const busyRef = useRef(onBusy);
  arStateRef.current = onArState;
  arScaleRef.current = onArScale;
  busyRef.current = onBusy;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    let scene;
    try {
      scene = new Three3DScene(canvas, {
        onArState: (mode) => arStateRef.current?.(mode),
        onArScale: (value) => arScaleRef.current?.(value),
        onBusy: (busy) => busyRef.current?.(busy)
      });
    } catch (err) {
      console.error(err); onError?.(err); return undefined;
    }
    sceneRef.current = scene;
    scene.load(config).then(() => {
      readyRef.current = true;
      scene.setScalePercent(scalePercent);
      onReady?.(scene);
    }).catch((err) => { console.error(err); onError?.(err); });
    return () => {
      readyRef.current = false;
      scene.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!readyRef.current) return undefined;
    busyRef.current?.(true);
    const timer = window.setTimeout(() => {
      sceneRef.current?.updateConfig(config);
    }, VIEW_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [
    config.width, config.height, config.thickness, config.material, config.finish,
    config.color, config.pattern, config.holeSize, config.slotLength, config.pitch, config.rowPitch, config.border, config.coneAngle,
    config.panelForm, config.flangeDepth, config.bendAngle, config.bendRadius, config.corner, config.cornerRadius
  ]);
  useEffect(() => { sceneRef.current?.setScalePercent(scalePercent); }, [scalePercent]);
  return <canvas id="viewerCanvas" ref={canvasRef} />;
}
