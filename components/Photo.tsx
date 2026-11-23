import { publicImage } from "@/lib/images";

// Shows public/images/<file> if it exists; otherwise a placeholder labelled with
// what photo belongs there and its recommended size (see README → Photos).
export default function Photo({
  file,
  alt,
  size,
  className = "",
  priority = false,
}: {
  file: string;
  alt: string;
  size?: string;
  className?: string;
  priority?: boolean;
}) {
  const src = publicImage(file);
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`photo ${className}`} loading={priority ? "eager" : "lazy"} />;
  }
  return (
    <div className={`photo ph ${className}`} role="img" aria-label={`Photo placeholder: ${alt}`}>
      <svg className="ph-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="m4 18 5-5 3.5 3.5L16 13l4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
      <em>
        [{alt}]<br />
        {file}
        {size ? ` · ${size}` : ""}
      </em>
    </div>
  );
}
