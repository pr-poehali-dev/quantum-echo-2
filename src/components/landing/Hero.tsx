import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import CountingStats from "./CountingStats"
import { cn } from "@/lib/utils"

export default function Hero() {
  const stats = [
    { value: 400, suffix: "₽", label: "За дебетовую карту" },
    { value: 5000, suffix: "₽", label: "За курьера Яндекс.Еды" },
    { value: 200, suffix: "₽", label: "За клиента инфографики" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/files/98f57df5-5c5b-4fc5-9061-214eb989751d.jpeg"
          alt="background"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-sm text-white font-medium backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                <span>Реальный заработок без вложений</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="block text-white mb-2">ЗАРАБАТЫВАЙ</span>
                <span className="block text-white mb-2">НА РЕФЕРАЛАХ</span>
                <span
                  className={cn(
                    "block mb-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent font-pacifico",
                  )}
                  style={{
                    textShadow: "0 0 40px rgba(251, 191, 36, 0.5)",
                  }}
                >
                  Просто
                </span>
                <span className="block text-gray-300">БЕЗ ВЛОЖЕНИЙ И РИСКОВ</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                Привлекай людей на дебетовые карты, вакансии курьера Яндекс.Еды и клиентов для инфографики —
                получай выплаты без опыта и вложений. Реферальная ссылка выдаётся после обращения в Telegram.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-6 items-center justify-center lg:justify-start lg:items-start"
            >
              <a href="https://t.me/hanzi77" target="_blank" rel="noopener noreferrer">
                <AnimatedButton variant="slim" className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold">
                  <span className="flex items-center">
                    Написать в Telegram
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 border border-yellow-400/40 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-lg">💳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Дебетовые карты</p>
                    <p className="text-xs text-gray-400">10–20 дней выплата</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 border border-yellow-400/40 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-lg">🚴</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Яндекс.Еда</p>
                    <p className="text-xs text-gray-400">5–10 дней выплата</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 border border-yellow-400/40 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-lg">🖼️</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Инфографика</p>
                    <p className="text-xs text-gray-400">Быстрая выплата</p>
                  </div>
                </div>
              </div>

              <CountingStats stats={stats} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
