export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(251,191,36,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(245,158,11,0.03) 0%, transparent 60%)",
        }}
      />
    </div>
  )
}
