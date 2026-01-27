type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function PhoneMock({ src, alt, className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto h-[420px] w-[220px] sm:h-[460px] sm:w-[240px]">
        <img
          src={src}
          alt={alt}
          className="block h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  );
}
