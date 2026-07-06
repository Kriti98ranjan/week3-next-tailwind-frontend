export default function Badge({ label, dot = false, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm text-white ${className}`}
    >
      {dot && <span className="w-2 h-2 rounded-full bg-white"></span>}
      {label}
    </span>
  );
}