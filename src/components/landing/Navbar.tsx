import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedButton from "./AnimatedButton"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <motion.nav
        className="relative bg-gray-900/60 backdrop-blur-md border rounded-2xl shadow-lg overflow-hidden"
        animate={{
          borderColor: [
            "rgba(251, 191, 36, 0.3)",
            "rgba(245, 158, 11, 0.3)",
            "rgba(234, 179, 8, 0.3)",
            "rgba(251, 191, 36, 0.3)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(251, 191, 36, 0.15)",
              "0 0 20px rgba(245, 158, 11, 0.15)",
              "0 0 20px rgba(251, 191, 36, 0.15)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  EarnHub
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                  Направления
                </a>
                <a href="#how" className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                  Как это работает
                </a>
                <a href="#calculator" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Калькулятор
                </a>
                <a href="#contact" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                  Контакты
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="https://t.me/hanzi77" target="_blank" rel="noopener noreferrer">
                <AnimatedButton size="sm" className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold">
                  Написать @hanzi77
                </AnimatedButton>
              </a>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5 text-gray-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-md rounded-b-2xl">
            <div className="px-6 py-4 space-y-3">
              <a href="#services" className="block text-gray-300 hover:text-yellow-400">Направления</a>
              <a href="#how" className="block text-gray-300 hover:text-amber-400">Как это работает</a>
              <a href="#calculator" className="block text-gray-300 hover:text-orange-400">Калькулятор</a>
              <a href="#contact" className="block text-gray-300 hover:text-yellow-400">Контакты</a>
              <div className="pt-3 border-t border-gray-700">
                <a href="https://t.me/hanzi77" target="_blank" rel="noopener noreferrer" className="block">
                  <AnimatedButton className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold">Написать @hanzi77</AnimatedButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  )
}
