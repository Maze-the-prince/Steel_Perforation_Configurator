import { useId } from 'react';

const METAL_LOOK = {
  carbon: {
    hi: '#c4bdb4', mid: '#7a746c', lo: '#3a3733',
    plate0: '#6f6a64', plate1: '#45423e',
    grain: '0', grainW: 5, grainOpacity: 0.4,
    void0: '#2f3438', void1: '#050608'
  },
  ss304: {
    hi: '#f4f7f9', mid: '#b7c0c6', lo: '#6d767e',
    plate0: '#b8c1c7', plate1: '#7a848c',
    grain: '-18', grainW: 3.2, grainOpacity: 0.32,
    void0: '#3f4850', void1: '#07090c'
  },
  alu: {
    hi: '#fbfcfd', mid: '#d0d5d9', lo: '#8a9096',
    plate0: '#cfd4d8', plate1: '#949aa0',
    grain: '-8', grainW: 2.4, grainOpacity: 0.24,
    void0: '#4a5158', void1: '#0b0d10'
  }
};

function hexPoints(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i;
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(' ');
}

function diamondPoints(cx, cy, r) {
  return `${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`;
}

function clusterOffsets() {
  return [
    [0, -2], [-1, -1], [0, -1], [1, -1], [-2, 0], [-1, 0], [0, 0], [1, 0], [2, 0], [-1, 1], [0, 1], [1, 1], [0, 2]
  ];
}

function PunchCircle({ cx, cy, r, ids }) {
  const lip = r + Math.max(1.4, r * 0.22);
  const hole = r * 0.72;
  return (
    <g>
      <circle cx={cx + r * 0.12} cy={cy + r * 0.18} r={lip} fill="rgba(0,0,0,.38)" />
      <circle cx={cx} cy={cy} r={lip} fill={`url(#${ids.rim})`} />
      <circle cx={cx} cy={cy} r={r * 0.9} fill="rgba(12,14,16,.45)" />
      <circle cx={cx} cy={cy} r={hole} fill={`url(#${ids.voidG})`} />
      <ellipse cx={cx - hole * 0.28} cy={cy - hole * 0.32} rx={hole * 0.48} ry={hole * 0.36} fill="rgba(0,0,0,.42)" />
      <path
        d={`M ${cx - r * 0.38} ${cy + r * 0.52} A ${r * 0.78} ${r * 0.78} 0 0 0 ${cx + r * 0.62} ${cy + r * 0.16}`}
        fill="none"
        stroke="rgba(255,255,255,.55)"
        strokeWidth={Math.max(0.55, r * 0.1)}
        strokeLinecap="round"
      />
    </g>
  );
}

function PunchSquare({ cx, cy, s, ids }) {
  const h = s / 2;
  const hole = s * 0.68;
  const hh = hole / 2;
  return (
    <g>
      <rect x={cx - h + 0.7} y={cy - h + 1} width={s} height={s} rx="1.2" fill="rgba(0,0,0,.36)" />
      <rect x={cx - h - 0.7} y={cy - h - 0.7} width={s + 1.4} height={s + 1.4} rx="1.4" fill={`url(#${ids.rim})`} />
      <rect x={cx - h + 0.35} y={cy - h + 0.35} width={s - 0.7} height={s - 0.7} rx="0.8" fill="rgba(12,14,16,.4)" />
      <rect x={cx - hh} y={cy - hh} width={hole} height={hole} rx="0.55" fill={`url(#${ids.voidG})`} />
      <rect x={cx - hh} y={cy - hh} width={hole * 0.4} height={hole * 0.36} fill="rgba(0,0,0,.35)" />
    </g>
  );
}

function PunchSlot({ cx, cy, w, h, ids }) {
  const r = Math.min(w, h) / 2;
  return (
    <g>
      <rect x={cx - w / 2 + 0.6} y={cy - h / 2 + 1} width={w} height={h} rx={r} fill="rgba(0,0,0,.36)" />
      <rect x={cx - w / 2 - 0.8} y={cy - h / 2 - 0.8} width={w + 1.6} height={h + 1.6} rx={r + 0.5} fill={`url(#${ids.rim})`} />
      <rect x={cx - w * 0.34} y={cy - h * 0.34} width={w * 0.68} height={h * 0.68} rx={r * 0.68} fill={`url(#${ids.voidG})`} />
      <rect x={cx - w * 0.28} y={cy - h * 0.32} width={w * 0.26} height={h * 0.26} rx={r * 0.28} fill="rgba(0,0,0,.32)" />
    </g>
  );
}

function PunchHex({ cx, cy, r, ids }) {
  return (
    <g>
      <polygon points={hexPoints(cx + 0.55, cy + 0.8, r + 1.15)} fill="rgba(0,0,0,.36)" />
      <polygon points={hexPoints(cx, cy, r + 1.25)} fill={`url(#${ids.rim})`} />
      <polygon points={hexPoints(cx, cy, r * 0.86)} fill="rgba(12,14,16,.4)" />
      <polygon points={hexPoints(cx, cy, r * 0.66)} fill={`url(#${ids.voidG})`} />
    </g>
  );
}

export function PatternPreview({ pattern, className = '', material = 'carbon', variant = 'card' }) {
  const uid = useId().replace(/:/g, '');
  const isThumb = variant === 'thumb';
  const W = isThumb ? 120 : 168;
  const H = isThumb ? 120 : 72;
  const look = METAL_LOOK[material] || METAL_LOOK.carbon;
  const ids = {
    plate: `plate-${uid}`,
    sheen: `sheen-${uid}`,
    brush: `brush-${uid}`,
    rim: `rim-${uid}`,
    voidG: `void-${uid}`,
    bump: `bump-${uid}`,
    cone: `cone-${uid}`,
    bridge: `bridge-${uid}`,
    clip: `clip-${uid}`
  };

  const pad = isThumb ? 4 : 6;
  function tiled({ xStep, yStep, stagger = false, render }) {
    const out = [];
    let row = 0;
    for (let y = pad + yStep * 0.35; y < H - 2; y += yStep, row++) {
      const offset = stagger && row % 2 ? xStep / 2 : 0;
      for (let x = pad + offset + xStep * 0.15; x < W - 2; x += xStep) {
        out.push(render(x, y, `${row}-${x.toFixed(1)}`));
      }
    }
    return out;
  }

  const scale = isThumb ? 1.28 : 1;
  let content = null;

  if (pattern === 'round60') {
    content = tiled({
      xStep: 26 * (isThumb ? 0.92 : 1),
      yStep: 22.5 * (isThumb ? 0.92 : 1),
      stagger: true,
      render: (x, y, k) => <g key={k}><PunchCircle cx={x} cy={y} r={6.6 * scale} ids={ids} /></g>
    });
  } else if (pattern === 'roundStraight') {
    content = tiled({
      xStep: 27, yStep: 23, stagger: false,
      render: (x, y, k) => <g key={k}><PunchCircle cx={x} cy={y} r={5.5 * scale} ids={ids} /></g>
    });
  } else if (pattern === 'square') {
    content = tiled({
      xStep: 28, yStep: 24,
      render: (x, y, k) => <g key={k}><PunchSquare cx={x} cy={y} s={12.2 * scale} ids={ids} /></g>
    });
  } else if (pattern === 'slot') {
    content = tiled({
      xStep: 28, yStep: 30, stagger: true,
      render: (x, y, k) => <g key={k}><PunchSlot cx={x} cy={y} w={9 * scale} h={22 * scale} ids={ids} /></g>
    });
  } else if (pattern === 'hex') {
    content = tiled({
      xStep: 28, yStep: 24.4, stagger: true,
      render: (x, y, k) => <g key={k}><PunchHex cx={x} cy={y} r={8 * scale} ids={ids} /></g>
    });
  } else if (pattern === 'bridgeSlot') {
    content = tiled({
      xStep: 46, yStep: 24, stagger: true,
      render: (x, y, k) => (
        <g key={k}>
          <PunchSlot cx={x} cy={y + 1.2} w={32} h={9.5} ids={ids} />
          <path d={`M ${x - 14.5} ${y + 4.6} L ${x - 8} ${y - 4.4} H ${x + 8} L ${x + 14.5} ${y + 4.6} Z`} fill="rgba(0,0,0,.28)" />
          <path d={`M ${x - 14} ${y + 3.8} L ${x - 7.6} ${y - 5} H ${x + 7.6} L ${x + 14} ${y + 3.8} Z`} fill={`url(#${ids.bridge})`} />
          <path d={`M ${x - 7.2} ${y - 4.6} H ${x + 7.2}`} stroke="rgba(255,255,255,.5)" strokeWidth="0.9" />
        </g>
      )
    });
  } else if (pattern === 'trieur') {
    content = tiled({
      xStep: 26, yStep: 22.6, stagger: true,
      render: (x, y, k) => (
        <g key={k}>
          <ellipse cx={x + 1.4} cy={y + 2.2} rx="7.4" ry="6.4" fill="rgba(0,0,0,.32)" />
          <circle cx={x} cy={y} r="6.8" fill={`url(#${ids.bump})`} />
          <ellipse cx={x - 1.8} cy={y - 2.2} rx="2.4" ry="1.7" fill="rgba(255,255,255,.38)" />
        </g>
      )
    });
  } else if (pattern === 'perfocon') {
    content = tiled({
      xStep: 22, yStep: 19.2, stagger: true,
      render: (x, y, k) => (
        <g key={k}>
          <circle cx={x + 0.6} cy={y + 0.9} r="7.4" fill="rgba(0,0,0,.28)" />
          <circle cx={x} cy={y} r="7.3" fill={`url(#${ids.rim})`} />
          <circle cx={x} cy={y} r="5.5" fill={`url(#${ids.cone})`} />
          <circle cx={x} cy={y} r="2.35" fill={`url(#${ids.voidG})`} />
          <ellipse cx={x - 0.7} cy={y - 0.9} rx="1.15" ry="0.85" fill="rgba(0,0,0,.35)" />
        </g>
      )
    });
  } else if (pattern === 'decorative') {
    const step = isThumb ? 42 : 70;
    content = [];
    let row = 0;
    for (let y = 22; y < H; y += 50, row++) {
      for (let x = 22 + (row % 2 ? 20 : 0); x < W - 8; x += step) {
        clusterOffsets().forEach(([ix, iy], i) => {
          content.push(
            <g key={`${row}-${x}-${i}`}>
              <PunchCircle cx={x + ix * 5.05} cy={y + iy * 5.05} r={2.15} ids={ids} />
            </g>
          );
        });
      }
    }
  } else if (pattern === 'embossed') {
    content = tiled({
      xStep: 32, yStep: 27.6, stagger: true,
      render: (x, y, k) => (
        <g key={k}>
          <polygon points={diamondPoints(x + 0.8, y + 1.1, 9.2)} fill="rgba(0,0,0,.3)" />
          <polygon points={diamondPoints(x, y, 8.8)} fill={`url(#${ids.bump})`} />
          <polygon points={diamondPoints(x - 0.6, y - 0.8, 3.4)} fill="rgba(255,255,255,.22)" />
          <PunchCircle cx={x} cy={y} r={2.1} ids={ids} />
        </g>
      )
    });
  } else {
    content = tiled({
      xStep: 26, yStep: 22, stagger: true,
      render: (x, y, k) => <g key={k}><PunchCircle cx={x} cy={y} r={5} ids={ids} /></g>
    });
  }

  return (
    <svg
      className={`pattern-preview-svg ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio={isThumb ? 'xMidYMid slice' : 'xMidYMid slice'}
      role="img"
      aria-label={`${pattern} preview`}
    >
      <defs>
        <clipPath id={ids.clip}>
          <rect width={W} height={H} rx="5" />
        </clipPath>
        <linearGradient id={ids.plate} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={look.lo} />
          <stop offset=".22" stopColor={look.plate0} />
          <stop offset=".48" stopColor={look.hi} />
          <stop offset=".72" stopColor={look.plate1} />
          <stop offset="1" stopColor={look.lo} />
        </linearGradient>
        <linearGradient id={ids.sheen} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(255,255,255,0)" />
          <stop offset=".38" stopColor="rgba(255,255,255,.34)" />
          <stop offset=".62" stopColor="rgba(255,255,255,0)" />
          <stop offset="1" stopColor="rgba(0,0,0,.12)" />
        </linearGradient>
        <pattern id={ids.brush} width={look.grainW} height="14" patternUnits="userSpaceOnUse" patternTransform={`rotate(${look.grain})`}>
          <rect width={look.grainW} height="14" fill="transparent" />
          <path d="M0 0 V14" stroke="rgba(255,255,255,.22)" strokeWidth="0.45" />
          <path d={`M${look.grainW / 2} 0 V14`} stroke="rgba(0,0,0,.16)" strokeWidth="0.4" />
        </pattern>
        <radialGradient id={ids.rim} cx="34%" cy="28%" r="72%">
          <stop offset="0" stopColor={look.hi} />
          <stop offset=".42" stopColor={look.mid} />
          <stop offset="1" stopColor={look.lo} />
        </radialGradient>
        <radialGradient id={ids.voidG} cx="64%" cy="70%" r="78%">
          <stop offset="0" stopColor={look.void0} />
          <stop offset=".55" stopColor={look.void1} />
          <stop offset="1" stopColor="#050608" />
        </radialGradient>
        <radialGradient id={ids.bump} cx="34%" cy="28%" r="74%">
          <stop offset="0" stopColor={look.hi} />
          <stop offset=".38" stopColor={look.mid} />
          <stop offset=".78" stopColor={look.lo} />
          <stop offset="1" stopColor="#2a2c2e" />
        </radialGradient>
        <radialGradient id={ids.cone} cx="36%" cy="30%" r="76%">
          <stop offset="0" stopColor={look.hi} />
          <stop offset=".32" stopColor={look.mid} />
          <stop offset=".7" stopColor={look.lo} />
          <stop offset="1" stopColor="#1c2024" />
        </radialGradient>
        <linearGradient id={ids.bridge} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={look.hi} />
          <stop offset=".28" stopColor={look.mid} />
          <stop offset=".7" stopColor={look.lo} />
          <stop offset="1" stopColor="#2a2e32" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${ids.clip})`}>
        <rect width={W} height={H} fill={`url(#${ids.plate})`} />
        <rect width={W} height={H} fill={`url(#${ids.brush})`} opacity={look.grainOpacity} />
        <rect width={W} height={H} fill={`url(#${ids.sheen})`} opacity="0.28" />
        {content}
      </g>
    </svg>
  );
}
