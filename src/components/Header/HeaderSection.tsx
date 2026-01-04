import { motion } from 'framer-motion';

export default function HeaderSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-6">Мне 25 🎉</h1>
        <p className="text-xl">Приглашаю отметить этот день вместе</p>
      </motion.div>
    </section>
  );
}
