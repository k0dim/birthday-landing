export default function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-emerald-900 mb-8">
          Место проведения
        </h2>

        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow">
          <iframe
            className="w-full h-full"
            src="https://yandex.ru/map-widget/v1/"
          />
        </div>
      </div>
    </section>
  );
}
