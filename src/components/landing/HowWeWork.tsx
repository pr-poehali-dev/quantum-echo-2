import { motion } from "framer-motion"
import { MessageCircle, Link, Banknote } from "lucide-react"
import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "01",
    title: "Пишешь мне в Telegram",
    description: "Напиши мне в Telegram @hanzi77, выбери направление — карты, Яндекс.Еда или инфографика. Расскажу всё подробно.",
    icon: <MessageCircle className="w-8 h-8" />,
    mockup: "telegram",
    gradient: "from-yellow-500/20 to-amber-600/10",
  },
  {
    number: "02",
    title: "Получаешь реферальную ссылку",
    description: "После общения я выдаю тебе персональную реферальную ссылку. Ты делишься ею с людьми любым удобным способом.",
    icon: <Link className="w-8 h-8" />,
    mockup: "link",
    gradient: "from-amber-500/20 to-orange-600/10",
  },
  {
    number: "03",
    title: "Получаешь выплату",
    description: "Как только лид выполняет условие — оформляет карту, регистрируется курьером или становится клиентом — ты получаешь деньги.",
    icon: <Banknote className="w-8 h-8" />,
    mockup: "money",
    gradient: "from-orange-500/20 to-red-600/10",
  },
]

export default function HowWeWork() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Как это работает</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Три простых шага до первой выплаты. Без вложений, без рисков.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${step.gradient} border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm hover:border-yellow-700/50 transition-all duration-300 group`}
            >
              {/* Mockup Area */}
              <div className="aspect-video bg-gray-900 rounded-2xl mb-6 overflow-hidden relative border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4 flex items-center justify-center">
                  {step.mockup === "telegram" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full max-w-[200px] space-y-2"
                    >
                      <div className="bg-gray-700 rounded-xl p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-black">H</div>
                          <div className="text-xs text-gray-300">@hanzi77</div>
                        </div>
                        <div className="bg-gray-600 rounded-lg p-2 text-xs text-gray-300">Привет! Хочу начать зарабатывать 👋</div>
                      </div>
                      <div className="flex justify-end">
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: "auto", opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          className="bg-yellow-400/20 border border-yellow-400/40 rounded-lg p-2 text-xs text-yellow-300"
                        >
                          Отвечу сразу! ✅
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {step.mockup === "link" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full max-w-[200px] space-y-3"
                    >
                      <div className="text-xs text-gray-400 text-center mb-2">Твоя реферальная ссылка</div>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="bg-gray-700 rounded-lg p-2 text-xs text-yellow-400 font-mono truncate"
                      >
                        ref.link/hanzi77/...
                      </motion.div>
                      <div className="flex space-x-2">
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                          className="flex-1 bg-yellow-400/20 border border-yellow-400/40 rounded text-center text-xs text-yellow-300 py-1"
                        >
                          Копировать
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1 }}
                          className="flex-1 bg-gray-600 rounded text-center text-xs text-gray-300 py-1"
                        >
                          Поделиться
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {step.mockup === "money" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full max-w-[200px] space-y-2"
                    >
                      {[
                        { label: "Карта", amount: "+400₽", color: "text-green-400" },
                        { label: "Яндекс.Еда", amount: "+5000₽", color: "text-green-400" },
                        { label: "Инфографика", amount: "+200₽", color: "text-green-400" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.2 }}
                          className="flex justify-between items-center bg-gray-700 rounded-lg px-3 py-2"
                        >
                          <span className="text-xs text-gray-300">{item.label}</span>
                          <motion.span
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                            className={`text-sm font-bold ${item.color}`}
                          >
                            {item.amount}
                          </motion.span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-gray-600">{step.number}</div>
                  <div className="text-yellow-400">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
