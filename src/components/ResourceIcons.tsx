// Custom SVG icons for the Free Resources section
// Each icon is purpose-built to represent the guide it accompanies

export function AfricanFoodIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bowl base */}
      <ellipse cx="24" cy="34" rx="16" ry="5" fill="currentColor" opacity="0.15" />
      <path
        d="M10 26 Q10 36 24 36 Q38 36 38 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Steam lines */}
      <path d="M18 22 Q17 19 18 16 Q19 13 18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M24 21 Q23 18 24 15 Q25 12 24 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M30 22 Q29 19 30 16 Q31 13 30 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Grain / food texture inside bowl */}
      <circle cx="18" cy="29" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="24" cy="28" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="30" cy="29" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="21" cy="32" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="27" cy="32" r="1.5" fill="currentColor" opacity="0.4" />
      {/* Blood sugar drop */}
      <path d="M40 10 Q40 7 43 7 Q46 7 46 10 Q46 13 43 15 Q40 13 40 10Z" fill="currentColor" opacity="0.8" />
      <path d="M43 9 L43 12 M41.5 10.5 L44.5 10.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function PortionHandIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Palm */}
      <path
        d="M12 30 L12 18 Q12 15 15 15 Q18 15 18 18 L18 14 Q18 11 21 11 Q24 11 24 14 L24 13 Q24 10 27 10 Q30 10 30 13 L30 14 Q30 11 33 11 Q36 11 36 14 L36 32 Q36 38 30 40 L18 40 Q12 40 12 34 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Finger lines */}
      <line x1="18" y1="18" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="24" y1="18" x2="24" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="30" y1="18" x2="30" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Measurement bracket */}
      <path d="M4 20 L4 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M4 20 L7 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M4 40 L7 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <text x="2" y="31" fontSize="5" fill="currentColor" opacity="0.7" fontFamily="sans-serif" textAnchor="middle">1×</text>
    </svg>
  );
}

export function NigerianFoodsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Leaf/plant */}
      <path
        d="M24 40 L24 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Left leaf */}
      <path
        d="M24 28 Q16 24 12 16 Q18 12 24 20"
        fill="currentColor"
        fillOpacity="0.7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Right leaf */}
      <path
        d="M24 24 Q32 20 36 12 Q30 8 24 16"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Nigeria map outline (simplified) */}
      <path
        d="M18 40 Q16 38 17 36 Q19 34 24 35 Q29 34 31 36 Q32 38 30 40 Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Checkmark */}
      <circle cx="37" cy="12" r="6" fill="currentColor" opacity="0.9" />
      <path d="M34 12 L36 14 L40 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GroceryBagIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bag body */}
      <path
        d="M10 20 L13 40 Q13 42 16 42 L32 42 Q35 42 35 40 L38 20 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Handles */}
      <path d="M18 20 L18 14 Q18 8 24 8 Q30 8 30 14 L30 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Fresh produce inside */}
      {/* Carrot */}
      <path d="M19 30 L21 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M19 30 Q17 27 21 26 Q23 27 21 30" fill="currentColor" opacity="0.6" />
      {/* Greens */}
      <path d="M27 28 Q25 25 29 24 Q31 26 28 28" fill="currentColor" opacity="0.8" />
      <path d="M28 28 Q30 25 33 26 Q33 29 30 29" fill="currentColor" opacity="0.6" />
      <line x1="28" y1="28" x2="28" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function SmoothieIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Glass */}
      <path
        d="M14 10 L17 42 Q17 44 20 44 L28 44 Q31 44 31 42 L34 10 Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Liquid fill */}
      <path
        d="M16 22 Q19 20 24 21 Q29 20 32 22 L31 42 Q31 44 28 44 L20 44 Q17 44 17 42 Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      {/* Straw */}
      <line x1="29" y1="8" x2="26" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      {/* Fruit pieces */}
      <circle cx="20" cy="30" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="25" cy="34" r="2" fill="currentColor" opacity="0.4" />
      {/* Leaf garnish */}
      <path d="M29 8 Q27 5 31 5 Q33 7 30 9 Z" fill="currentColor" opacity="0.7" />
      {/* Weight arrow */}
      <path d="M38 16 L38 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M35 25 L38 29 L41 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
}

export function FoodSwapIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left plate (less healthy) */}
      <ellipse cx="13" cy="32" rx="9" ry="3.5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.8" />
      <rect x="8" y="22" width="10" height="10" rx="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      {/* X mark on left */}
      <path d="M9 24 L16 30 M16 24 L9 30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      {/* Swap arrows */}
      <path d="M23 22 Q24 18 27 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M25 26 Q24 30 27 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M27 20 L23 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M27 28 L25 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Right plate (healthier) */}
      <ellipse cx="38" cy="32" rx="8" ry="3.5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.8" />
      {/* Veggies on right plate */}
      <circle cx="36" cy="26" r="3.5" fill="currentColor" opacity="0.5" />
      <circle cx="41" cy="25" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="38" cy="24" r="2" fill="currentColor" opacity="0.6" />
      {/* Check mark on right */}
      <circle cx="45" cy="16" r="5" fill="currentColor" opacity="0.9" />
      <path d="M42 16 L44 18 L48 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CarbsChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Chart axes */}
      <line x1="8" y1="8" x2="8" y2="38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="8" y1="38" x2="42" y2="38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* Blood sugar curve */}
      <path
        d="M8 34 Q14 34 16 26 Q18 16 22 14 Q26 12 28 24 Q30 32 36 32 Q39 32 42 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      {/* Shaded area under curve */}
      <path
        d="M8 34 Q14 34 16 26 Q18 16 22 14 Q26 12 28 24 Q30 32 36 32 Q39 32 42 30 L42 38 L8 38 Z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Grid dots */}
      <circle cx="16" cy="26" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="22" cy="14" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="28" cy="24" r="2.5" fill="currentColor" opacity="0.7" />
      {/* Y-axis label lines */}
      <line x1="6" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="6" y1="30" x2="8" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export function BalancedPlateIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Plate outline */}
      <circle cx="24" cy="26" r="17" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2.2" />
      {/* Dividing lines */}
      <line x1="24" y1="9" x2="24" y2="43" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
      <line x1="7" y1="26" x2="41" y2="26" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
      {/* Quarter fills */}
      {/* Top-left: Vegetables (darker) */}
      <path d="M24 26 L7 26 Q7 9 24 9 Z" fill="currentColor" fillOpacity="0.45" />
      {/* Top-right: Protein (medium) */}
      <path d="M24 26 L24 9 Q41 9 41 26 Z" fill="currentColor" fillOpacity="0.25" />
      {/* Bottom: Starch (light) */}
      <path d="M24 26 L41 26 Q41 43 24 43 Q7 43 7 26 Z" fill="currentColor" fillOpacity="0.12" />
      {/* Labels */}
      <circle cx="15" cy="17" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="33" cy="17" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="24" cy="35" r="2" fill="currentColor" opacity="0.4" />
      {/* Fork */}
      <path d="M4 8 L4 14 M4 11 L6 11 M6 8 L6 14 M5 14 L5 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
