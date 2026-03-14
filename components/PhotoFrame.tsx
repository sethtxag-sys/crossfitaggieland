const GRAIN_URI = "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"

/**
 * PhotoFrame — wraps gym action photos with a maroon color cast
 * and film-grain texture. Pure CSS, zero JS, zero perf cost.
 *
 * Replaces the parent `<div className="relative rounded-xl overflow-hidden ...">`.
 * Children go inside — Image, gradient overlays, caption text, etc.
 */
export default function PhotoFrame({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {children}
      {/* Maroon color cast — warm tint via multiply blend */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(80,0,0,0.06) 0%, rgba(80,0,0,0.10) 100%)',
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />
      {/* Film grain — SVG feTurbulence noise */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${GRAIN_URI}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          opacity: 0.028,
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />
    </div>
  )
}
