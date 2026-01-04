import { motion } from 'framer-motion';
import Container from '../UI/Container';

export default function DescriptionSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-emerald-900 mb-8">
            Немного о событии
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Дорогие друзья, родные и близкие! Совсем скоро я отмечу 25 лет —
            небольшой, но значимый юбилей. Хочу провести этот день в тёплой,
            уютной атмосфере за городом: шашлык на мангале, баня, настольные
            игры и живое общение.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
