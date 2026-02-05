export default function LuumiloLogo({
  size = 127,
  className = "",
}: {
  size?: number | string;
  className?: string;
}) {
  return (
    <img
      src="/landingpage/Luumilo-logo.svg"
      alt="Luumilo"
      width={size}
      height={typeof size === 'number' ? size * (45 / 127) : undefined}
      className={`select-none ${className}`}
      draggable={false}
      style={{ height: className.includes('h-') ? undefined : 'auto' }}
    />
  );
}
