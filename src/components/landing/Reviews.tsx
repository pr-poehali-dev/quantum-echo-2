import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Артём К.",
    avatar: "А",
    direction: "Дебетовые карты",
    dirColor: "bg-blue-500/20 text-blue-400",
    text: "Написал, получил ссылку, за первую неделю привлёк 8 человек. 3200₽ без вложений — норм старт. Теперь параллельно веду ещё и по Яндексу.",
    earned: "3 200₽",
    time: "за неделю",
    stars: 5,
  },
  {
    name: "Диана М.",
    avatar: "Д",
    direction: "Яндекс.Еда",
    dirColor: "bg-yellow-500/20 text-yellow-400",
    text: "Скинула ссылку знакомым и в чаты — трое зарегистрировались курьерами. Выплата пришла через 7 дней. Легче чем думала!",
    earned: "15 000₽",
    time: "за месяц",
    stars: 5,
  },
  {
    name: "Игорь Т.",
    avatar: "И",
    direction: "Инфографика",
    dirColor: "bg-purple-500/20 text-purple-400",
    text: "Есть друзья которые торгуют на Вайлдберрис — просто посоветовал им, уже 12 клиентов привёл. Пассивно получается, почти ничего не делаю.",
    earned: "2 400₽",
    time: "пассивно",
    stars: 5,
  },
  {
    name: "Влад Р.",
    avatar: "В",
    direction: "Яндекс.Еда",
    dirColor: "bg-yellow-500/20 text-yellow-400",
    text: "Работаю студентом, времени мало. За 2 часа создал пост в соцсетях — за месяц привлёк 4 курьеров. 20к чистыми, ничего не вложил.",
    earned: "20 000₽",
    time: "за месяц",
    stars: 5,
  },
  {
    name: "Катя С.",
    avatar: "К",
    direction: "Дебетовые карты",
    dirColor: "bg-blue-500/20 text-blue-400",
    text: "Сначала не верила, думала развод. Написала — всё объяснили чётко. Первая выплата пришла через 14 дней. Теперь регулярно отправляю ссылку.",
    earned: "4 800₽",
    time: "первый месяц",
    stars: 5,
  },
  {
    name: "Максим Л.",
    avatar: "М",
    direction: "Яндекс.Еда + Карты",
    dirColor: "bg-green-500/20 text-green-400",
    text: "Работаю по двум направлениям сразу. Удобно что всё через одного человека — никакой путаницы. Уже стабильный доп. доход каждый месяц.",
    earned: "35 000₽",
    time: "за 2 месяца",
    stars: 5,
  },
]

export default function Reviews() {
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Отзывы</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Реальные люди, которые уже зарабатывают на рефералах
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-700/40 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black font-bold text-sm shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${review.dirColor}`}>
                      {review.direction}
                    </span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">"{review.text}"</p>

              {/* Earned */}
              <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
                <span className="text-gray-500 text-xs">Заработал</span>
                <div className="text-right">
                  <span className="text-yellow-400 font-bold text-lg">{review.earned}</span>
                  <span className="text-gray-500 text-xs ml-1">{review.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://t.me/hanzi77"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 rounded-xl text-lg transition-colors"
          >
            Хочу тоже зарабатывать → @hanzi77
          </a>
        </motion.div>
      </div>
    </section>
  )
}
