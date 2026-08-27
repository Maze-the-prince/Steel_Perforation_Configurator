/** Detail sample sizing for AR — real-world 1:1 meters (no artificial shrink). */
export function computeArDetailCrop(config) {
  const widthM = config.width / 1000;
  const heightM = config.height / 1000;
  const pitchMm = Math.max(config.pitch, config.rowPitch || config.pitch, 1);
  const pitchM = pitchMm / 1000;
  const minSpan = Math.max(pitchM * 6, 0.22);
  const maxSpan = 0.55;
  const detailW = Math.min(maxSpan, widthM, Math.max(minSpan, widthM * 0.32));
  const detailH = Math.min(maxSpan, heightM, Math.max(minSpan, heightM * 0.32));
  return { detailW, detailH, magnify: 1 };
}
