import React from 'react';

const commonProps = {
  width: "120",
  height: "40",
  viewBox: "0 0 120 40",
  className: "text-muted-foreground",
  fill: "currentColor"
};

export const HondaLogo = () => (
  <svg {...commonProps}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">Honda</text>
  </svg>
);

export const YamahaLogo = () => (
  <svg {...commonProps}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">Yamaha</text>
  </svg>
);

export const SuzukiLogo = () => (
  <svg {...commonProps}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">Suzuki</text>
  </svg>
);

export const KawasakiLogo = () => (
  <svg {...commonProps}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">Kawasaki</text>
  </svg>
);

export const DafraLogo = () => (
  <svg {...commonProps}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">Dafra</text>
  </svg>
);

export const ShinerayLogo = () => (
  <svg {...commonProps}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="Arial,sans-serif">Shineray</text>
  </svg>
);

export const TraxxLogo = () => (
  <svg {...commonProps}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">Traxx</text>
  </svg>
);

export const HaojueLogo = () => (
  <svg {...commonProps}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">Haojue</text>
  </svg>
);
