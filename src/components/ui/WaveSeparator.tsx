
type WaveSeparatorProps = {
  className?: string;
  fill?: string;
  position?: "top" | "bottom";
};

export default function WaveSeparator({
  className,
  fill = "#FFFCFA",
  position = "top",
}: WaveSeparatorProps) {
  const positionClass = position === "bottom" ? "rotate-180" : "";
  const classes = ["pointer-events-none", positionClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      className={classes}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 88C240 32 480 0 720 0C960 0 1200 32 1440 88V120H0Z"
        fill={fill}
      />
    </svg>
  );
}
