import { motion } from 'framer-motion';
import Container from '../UI/Container';

const items = [
  'Заезд и знакомство',
  'Шашлык и общение',
  'Баня',
  'Настольные игры',
  'Свободное время'
];

export default function EventDetails() {
  return (
    <section className="py-24 bg-emerald-50">
      <Container>
        <h2 className="text-5xl font-bold text-emerald-900 mb-10">
          Программа дня
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
