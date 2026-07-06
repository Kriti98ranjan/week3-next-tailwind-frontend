export default function Card({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-lg p-4 flex flex-col justify-between min-h-27.5 w-full ${className}`}
    >
      <p className="font-semibold text-base mb-3">{title}</p>

      <div className="flex-1">{children}</div>
    </div>
  );
}