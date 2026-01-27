export default function LuumiloLogo({
  size = 32,
  className = "h-15 w-20",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src="/assets/howitworks/logo.png"
      alt="Luumilo"
      width={size}
      height={size}
      className={`select-none ${className}`}
      draggable={false}
    />
  );
}
