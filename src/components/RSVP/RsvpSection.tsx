import Container from '../UI/Container';

export default function RsvpSection() {
  return (
    <section className="py-24 bg-emerald-900 text-white">
      <Container>
        <h2 className="text-4xl font-bold mb-6">Подтвердить участие</h2>

        <p className="opacity-90 mb-6">
          Пожалуйста, напиши мне, если планируешь быть 🙌
        </p>

        <a
          href="https://t.me/your_username"
          className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-xl font-semibold"
        >
          Написать в Telegram
        </a>
      </Container>
    </section>
  );
}
