interface LogoProps {
  variant?: "dark" | "light" | "icon-only";
  className?: string;
  size?: "sm" | "md" | "lg";
}

// Icon-only SVG mark — reused in both HTML and SVG logo variants
function LogoMark({ size, variant }: { size: number; variant: "dark" | "light" | "icon-only" }) {
  const bg = variant === "dark" ? "#166534" : "rgba(255,255,255,0.18)";
  const ring = variant === "light" ? "rgba(255,255,255,0.3)" : "none";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="22" cy="22" r="22" fill={bg} />
      {variant === "light" && (
        <circle cx="22" cy="22" r="21" stroke={ring} strokeWidth="1.5" fill="none" />
      )}
      {/* Leaf */}
      <path
        d="M22 33 C22 33 11 26 11 17 C11 11 16 8 22 13 C28 8 33 11 33 17 C33 26 22 33 22 33Z"
        fill="white"
        fillOpacity="0.18"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Heartbeat pulse through leaf */}
      <path
        d="M13 22 L17 22 L19 16 L22 28 L25 18 L27 23 L31 23"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ variant = "dark", className = "", size = "md" }: LogoProps) {
  const iconSizes = { sm: 30, md: 40, lg: 52 };
  const iconSize = iconSizes[size];

  if (variant === "icon-only") {
    return <LogoMark size={iconSize} variant="icon-only" />;
  }

  const isLight = variant === "light";

  const wordmarkSizes = {
    sm: { name: "text-lg",    sub: "text-[9px]",  gap: "gap-2.5" },
    md: { name: "text-2xl",   sub: "text-[10px]", gap: "gap-3"   },
    lg: { name: "text-3xl",   sub: "text-xs",     gap: "gap-3.5" },
  };
  const t = wordmarkSizes[size];

  return (
    <div className={`inline-flex items-center ${t.gap} ${className}`}>
      <LogoMark size={iconSize} variant={variant} />
      <div className="flex flex-col leading-none">
        <span
          className={`${t.name} font-bold tracking-tight`}
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: isLight ? "#ffffff" : "#166534",
            lineHeight: 1.1,
          }}
        >
          Vieve
        </span>
        <span
          className={`${t.sub} font-semibold tracking-widest uppercase mt-0.5`}
          style={{
            color: isLight ? "#fbbf24" : "#d97706",
            letterSpacing: "0.18em",
            whiteSpace: "nowrap",
          }}
        >
          Health and Wellness
        </span>
      </div>
    </div>
  );
}
