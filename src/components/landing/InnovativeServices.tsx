import { motion } from "framer-motion"
import { useState } from "react"
import { CreditCard, Bike, Image, Clock, DollarSign, CheckCircle } from "lucide-react"
import AnimatedButton from "./AnimatedButton"

const services = [
  {
    title: "Дебетовые карты",
    description:
      "Привлекай людей, которые оформят дебетовую карту по твоей реферальной ссылке. Простой продукт — высокая конверсия. Ссылка выдаётся персонально.",
    mockup: "card",
    reward: "400₽",
    payDays: "10–20 дней",
    badges: [
      { icon: <DollarSign className="w-4 h-4" />, text: "400₽ за карту" },
      { icon: <Clock className="w-4 h-4" />, text: "10–20 дней" },
      { icon: <CheckCircle className="w-4 h-4" />, text: "Легко продвигать" },
    ],
  },
  {
    title: "Курьеры Яндекс.Еды",
    description:
      "Самое выгодное направление — 5000₽ за каждого привлечённого курьера. Подходит всем: студентам, безработным, тем кто ищет подработку.",
    mockup: "yandex",
    reward: "5 000₽",
    payDays: "5–10 дней",
    badges: [
      { icon: <DollarSign className="w-4 h-4" />, text: "5000₽ за курьера" },
      { icon: <Clock className="w-4 h-4" />, text: "5–10 дней" },
      { icon: <CheckCircle className="w-4 h-4" />, text: "Высокий спрос" },
    ],
  },
  {
    title: "Клиенты для инфографики",
    description:
      "Помогай продавцам на маркетплейсах найти дизайнера инфографики. Привёл клиента — получил вознаграждение. Минимум усилий, постоянный поток.",
    mockup: "infographic",
    reward: "200₽",
    payDays: "Быстро",
    badges: [
      { icon: <DollarSign className="w-4 h-4" />, text: "200₽ за клиента" },
      { icon: <Clock className="w-4 h-4" />, text: "Быстрая выплата" },
      { icon: <CheckCircle className="w-4 h-4" />, text: "Много заказчиков" },
    ],
  },
]

export default function InnovativeServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Способы заработка</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Три направления — выбирай одно или работай по всем сразу.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Top row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-yellow-700/50 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-6 flex items-center justify-center">
                    {service.mockup === "card" && (
                      <motion.div className="space-y-3 w-full max-w-[220px]">
                        <div className="bg-gradient-to-r from-yellow-600 to-amber-500 rounded-xl p-4 shadow-lg">
                          <div className="text-white text-xs opacity-70 mb-3">ДЕБЕТОВАЯ КАРТА</div>
                          <div className="text-white font-mono text-sm">•••• •••• •••• 4242</div>
                          <div className="flex justify-between mt-3">
                            <div className="text-white text-xs opacity-70">Имя Фамилия</div>
                            <div className="text-white text-xs opacity-70">12/27</div>
                          </div>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="bg-green-500/20 border border-green-500/40 rounded-lg p-2 text-center text-green-400 text-xs font-medium"
                        >
                          ✓ Карта оформлена → +400₽ тебе
                        </motion.div>
                      </motion.div>
                    )}

                    {service.mockup === "yandex" && (
                      <motion.div className="space-y-3 w-full max-w-[220px]">
                        <div className="bg-yellow-400 rounded-xl p-4 shadow-lg flex items-center space-x-3">
                          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-yellow-400 font-bold text-lg">Я</div>
                          <div>
                            <div className="text-black font-bold text-sm">Яндекс.Еда</div>
                            <div className="text-black/70 text-xs">Стать курьером</div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          {["Регистрация", "Обучение", "Первый заказ"].map((step, i) => (
                            <motion.div
                              key={step}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.2 }}
                              className="flex items-center space-x-2 bg-gray-700/50 rounded p-2"
                            >
                              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                              <span className="text-xs text-gray-300">{step}</span>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="bg-green-500/20 border border-green-500/40 rounded-lg p-2 text-center text-green-400 text-xs font-medium"
                        >
                          ✓ Курьер зарегистрирован → +5000₽
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-3xl font-bold text-yellow-400">{service.reward}</div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.badges.map((badge, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 text-xs bg-gray-800/50 border border-gray-700/50 text-gray-300 px-3 py-1.5 rounded-full"
                      >
                        <span className="text-yellow-400">{badge.icon}</span>
                        {badge.text}
                      </div>
                    ))}
                  </div>

                  <a href="https://t.me/hanzi77" target="_blank" rel="noopener noreferrer">
                    <AnimatedButton className="w-full mt-2 bg-yellow-400 text-black hover:bg-yellow-300 font-bold">
                      Получить ссылку → @hanzi77
                    </AnimatedButton>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - Infographic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredIndex(2)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-yellow-700/50 transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {services[2].title}
                  </h3>
                  <div className="text-3xl font-bold text-yellow-400">{services[2].reward}</div>
                </div>
                <p className="text-gray-400 leading-relaxed">{services[2].description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {services[2].badges.map((badge, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 text-xs bg-gray-800/50 border border-gray-700/50 text-gray-300 px-3 py-1.5 rounded-full"
                    >
                      <span className="text-yellow-400">{badge.icon}</span>
                      {badge.text}
                    </div>
                  ))}
                </div>

                <a href="https://t.me/hanzi77" target="_blank" rel="noopener noreferrer">
                  <AnimatedButton className="mt-2 bg-yellow-400 text-black hover:bg-yellow-300 font-bold">
                    Получить ссылку → @hanzi77
                  </AnimatedButton>
                </a>
              </div>

              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-6 flex items-center justify-center">
                  <motion.div className="space-y-3 w-full max-w-[260px]">
                    <div className="grid grid-cols-3 gap-2">
                      {["📦 Товар", "🖼️ Дизайн", "📈 Продажи"].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="bg-gray-700 rounded-lg p-2 text-center text-xs text-gray-300"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-2">Инфографика для маркетплейса</div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="bg-yellow-400/20 h-12 rounded"></div>
                        <div className="bg-yellow-400/30 h-12 rounded"></div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="bg-green-500/20 border border-green-500/40 rounded-lg p-2 text-center text-green-400 text-xs font-medium"
                    >
                      ✓ Клиент пришёл → +200₽ тебе
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
