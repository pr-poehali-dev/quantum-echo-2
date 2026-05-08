import {
  BackgroundPaths,
  AnimatedBackground,
  BackgroundStripes,
  Navbar,
  Hero,
  HowWeWork,
  InnovativeServices,
  ROICalculatorHome,
  Reviews,
  AnimatedFooter,
  MouseMoveEffect,
} from "@/components/landing"

export default function Index() {
  return (
    <div className="relative min-h-screen bg-black">
      <MouseMoveEffect />
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div id="how"><HowWeWork /></div>
        <InnovativeServices />
        <div id="calculator"><ROICalculatorHome /></div>
        <Reviews />
        <AnimatedFooter />
      </div>
    </div>
  )
}