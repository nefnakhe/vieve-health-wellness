interface LogoProps {
  variant?: "dark" | "light" | "icon-only";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", className = "", size = "md" }: LogoProps) {
  const heights = { sm: 32, md: 44, lg: 60 };
  const h = heights[size];
  const w = Math.round(h * 3.2);

  if (variant === "icon-only") {
    return (
      <svg
        width={h}
        height={h}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Vieve Health & Wellness logo mark"
      >
        {/* Circle bg */}
        <circle cx="22" cy="22" r="22" fill="#166534" />
        {/* Leaf + pulse mark */}
        <path
          d="M22 32 C22 32 12 26 12 18 C12 13 17 10 22 14 C27 10 32 13 32 18 C32 26 22 32 22 32Z"
          fill="white"
          fillOpacity="0.15"
          stroke="white"
          strokeWidth="1.5"
        />
        {/* Pulse / heartbeat line through the leaf */}
        <path
          d="M14 21 L17 21 L19 17 L21 25 L23 19 L25 23 L27 21 L30 21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  const textColor = variant === "dark" ? "#166534" : "#ffffff";
  const subColor = variant === "dark" ? "#d97706" : "#fbbf24";
  const iconBg = variant === "dark" ? "#166534" : "rgba(255,255,255,0.15)";
  const iconStroke = variant === "dark" ? "#ffffff" : "#ffffff";

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vieve Health & Wellness"
    >
      {/* Icon mark — left side */}
      <circle cx={h / 2} cy={h / 2} r={h / 2} fill={iconBg} />
      {/* Leaf shape */}
      <path
        d={`M${h / 2} ${h * 0.8} C${h / 2} ${h * 0.8} ${h * 0.22} ${h * 0.62} ${h * 0.22} ${h * 0.42} C${h * 0.22} ${h * 0.28} ${h * 0.36} ${h * 0.2} ${h / 2} ${h * 0.3} C${h * 0.64} ${h * 0.2} ${h * 0.78} ${h * 0.28} ${h * 0.78} ${h * 0.42} C${h * 0.78} ${h * 0.62} ${h / 2} ${h * 0.8} ${h / 2} ${h * 0.8}Z`}
        fill={iconStroke}
        fillOpacity={variant === "dark" ? "0.2" : "0.2"}
        stroke={iconStroke}
        strokeWidth="1.5"
      />
      {/* Pulse line */}
      <path
        d={`M${h * 0.28} ${h * 0.5} L${h * 0.37} ${h * 0.5} L${h * 0.43} ${h * 0.38} L${h * 0.5} ${h * 0.6} L${h * 0.57} ${h * 0.43} L${h * 0.63} ${h * 0.52} L${h * 0.72} ${h * 0.5}`}
        stroke={iconStroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* "Vieve" wordmark */}
      <text
        x={h + 10}
        y={h * 0.62}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={h * 0.52}
        fontWeight="700"
        fill={textColor}
        letterSpacing="-0.5"
      >
        Vieve
      </text>

      {/* "Health & Wellness" tagline */}
      <text
        x={h + 11}
        y={h * 0.92}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={h * 0.22}
        fontWeight="500"
        fill={subColor}
        letterSpacing="1.5"
      >
        HEALTH &amp; WELLNESS
      </text>
    </svg>
  );
}
