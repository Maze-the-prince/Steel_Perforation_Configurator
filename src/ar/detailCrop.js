import * as THREE from 'three';

/** Center crop size and AR magnification for Quick Look detail swatches. */
export function computeArDetailCrop(config) {
  const widthM = config.width / 1000;
  const heightM = config.height / 1000;
  const pitchMm = Math.max(config.pitch, config.rowPitch || config.pitch, 1);
  const pitchM = pitchMm / 1000;
  const minSpan = Math.max(pitchM * 8, 0.16);
  const maxSpan = 0.28;
  const detailW = Math.min(maxSpan, widthM, Math.max(minSpan, widthM * 0.22));
  const detailH = Math.min(maxSpan, heightM, Math.max(minSpan, heightM * 0.22));
  const centerY = heightM / 2;
  const targetSize = 0.36;
  const magnify = targetSize / Math.max(detailW, detailH);
  return { detailW, detailH, centerY, magnify, targetSize };
}

export function arDetailClipPlanes({ detailW, detailH, centerY }) {
  const hw = detailW / 2;
  const y0 = centerY - detailH / 2;
  const y1 = centerY + detailH / 2;
  return [
    new THREE.Plane(new THREE.Vector3(1, 0, 0), hw),
    new THREE.Plane(new THREE.Vector3(-1, 0, 0), hw),
    new THREE.Plane(new THREE.Vector3(0, 1, 0), -y0),
    new THREE.Plane(new THREE.Vector3(0, -1, 0), y1)
  ];
}
