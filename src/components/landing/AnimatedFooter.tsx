import type React from "react"
import { motion } from "framer-motion"
import { Send, Clock, DollarSign } from "lucide-react"

export default function AnimatedFooter() {
  return (
    <footer id="contact" className="relative bg-black border-t border-gray-800/50">
      {/* CTA Section */}
      <div className="relative z-10 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Готов начать зарабатывать?</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Напиши мне в Telegram — отвечу, выдам реферальную ссылку и расскажу всё подробно.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <a
              href="https://t.me/hanzi77"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              <Send className="w-5 h-5" />
              Написать @hanzi77 в Telegram
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="group flex justify-center lg:justify-start">
              <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                EarnHub
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Реальный заработок без вложений и рисков. Дебетовые карты, курьеры Яндекс.Еды,
              клиенты для инфографики — выбирай своё направление.
            </p>

            {/* Quick stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-gray-400">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                <span>от 200₽ до 5000₽ за лида</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span>Выплата от 5 дней</span>
              </div>
            </div>
          </motion.div>

          {/* Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            {/* Directions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Направления</h4>
              <ul className="space-y-4">
                {[
                  { label: "Дебетовые карты", reward: "400₽" },
                  { label: "Курьеры Яндекс.Еды", reward: "5000₽" },
                  { label: "Клиенты инфографики", reward: "200₽" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center justify-center sm:justify-between gap-2">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-yellow-400 font-semibold">{item.reward}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <Send className="h-5 w-5 text-yellow-400" />
                  <a href="https://t.me/hanzi77" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                    @hanzi77 в Telegram
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a href="https://t.me/hanzi77" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    Написать сейчас
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              © 2024 EarnHub. Реферальный заработок без вложений.
            </p>
            <p className="text-gray-600 text-sm">Telegram: @hanzi77</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
