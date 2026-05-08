import { motion } from "framer-motion"
import { useState } from "react"
import { TrendingUp, CreditCard, Bike, Image, BarChart3 } from "lucide-react"

const directions = [
  {
    id: "card",
    name: "Дебетовые карты",
    icon: <CreditCard className="w-6 h-6" />,
    pricePerUnit: 400,
    unit: "карта",
    unitPlural: "карт",
    payDays: "10–20 дней",
    description: "Человек оформляет дебетовую карту по твоей ссылке",
  },
  {
    id: "yandex",
    name: "Яндекс.Еда",
    icon: <Bike className="w-6 h-6" />,
    pricePerUnit: 5000,
    unit: "курьер",
    unitPlural: "курьеров",
    payDays: "5–10 дней",
    description: "Человек регистрируется как курьер Яндекс.Еды",
  },
  {
    id: "infographic",
    name: "Инфографика",
    icon: <Image className="w-6 h-6" />,
    pricePerUnit: 200,
    unit: "клиент",
    unitPlural: "клиентов",
    payDays: "Быстро",
    description: "Привлекаешь клиента для заказа инфографики",
  },
]

const formatRub = (num: number) => {
  return num.toLocaleString("ru-RU")
}

export default function ROICalculatorHome() {
  const [selectedCount, setSelectedCount] = useState(5)
  const [selectedDirection, setSelectedDirection] = useState("card")

  const dir = directions.find((d) => d.id === selectedDirection)!
  const earnings = selectedCount * dir.pricePerUnit

  const maxCount = selectedDirection === "yandex" ? 20 : 50

  return (
    <section className="py-24 bg-black relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Посчитай свой доход</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Выбери направление и количество привлечённых людей — увидишь свой заработок
          </p>
        </motion.div>

        <div className="bg-gray-900/40 border border-gray-700/30 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(251,191,36,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(245,158,11,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(234,179,8,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(251,191,36,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(251,191,36,0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Controls */}
            <div className="space-y-8">
              {/* Direction Selection */}
              <div>
                <label className="block text-lg font-medium text-white mb-4">Выбери направление</label>
                <div className="grid grid-cols-1 gap-3">
                  {directions.map((d) => (
                    <motion.button
                      key={d.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedDirection(d.id)
                        setSelectedCount(d.id === "yandex" ? 3 : 5)
                      }}
                      className={`p-4 rounded-xl border transition-all duration-200 text-left ${
                        selectedDirection === d.id
                          ? "bg-yellow-500/20 border-yellow-500/50 text-white"
                          : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${
                              selectedDirection === d.id ? "bg-yellow-500/30" : "bg-gray-700/50"
                            }`}
                          >
                            {d.icon}
                          </div>
                          <div>
                            <div className="font-medium">{d.name}</div>
                            <div className="text-xs opacity-70">{d.description}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold text-lg ${selectedDirection === d.id ? "text-yellow-400" : "text-gray-400"}`}>
                            {formatRub(d.pricePerUnit)}₽
                          </div>
                          <div className="text-xs text-gray-500">за 1 {d.unit}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Count Slider */}
              <div>
                <label className="block text-lg font-medium text-white mb-4">
                  Количество {dir.unitPlural}: <span className="text-yellow-400">{selectedCount}</span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max={maxCount}
                    step="1"
                    value={selectedCount}
                    onChange={(e) => setSelectedCount(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${((selectedCount - 1) / (maxCount - 1)) * 100}%, #374151 ${((selectedCount - 1) / (maxCount - 1)) * 100}%, #374151 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>1 {dir.unit}</span>
                    <span>{maxCount} {dir.unitPlural}</span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <span className="text-3xl font-bold text-white">{selectedCount}</span>
                  <span className="text-gray-400 ml-2">{dir.unitPlural}</span>
                </div>
              </div>

              {/* Pay timing */}
              <div className="bg-gray-800/30 border border-yellow-700/30 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium text-white">Срок выплаты: {dir.payDays}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Реферальная ссылка выдаётся лично после обращения в Telegram @hanzi77.
                  Выплаты производятся после подтверждения выполненного условия.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8 flex flex-col items-center justify-center">
              {/* Earnings Circle */}
              <div className="relative w-56 h-56 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-gray-700"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#goldGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 251.2" }}
                    animate={{
                      strokeDasharray: `${Math.min((selectedCount / maxCount) * 251.2, 251.2)} 251.2`,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#fde68a" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-xs text-gray-400 mb-1">Твой доход</div>
                  <motion.div
                    key={earnings}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-3xl font-bold text-yellow-400"
                  >
                    {formatRub(earnings)}₽
                  </motion.div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-4 w-full">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{formatRub(earnings)}₽</div>
                  <div className="text-sm text-gray-400">За {selectedCount} {dir.unitPlural}</div>
                </div>
                <div className="bg-gray-800/50 border border-yellow-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">{formatRub(earnings * 4)}₽</div>
                  <div className="text-sm text-gray-400">В месяц (×4 партии)</div>
                </div>
              </div>

              <motion.a
                href="https://t.me/hanzi77"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-6 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Начать зарабатывать → @hanzi77
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
