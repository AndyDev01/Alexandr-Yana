export function Details() {
  return (
    <section className="bg-gray-200/70 px-[360px] py-24">
      <p className="text-center text-5xl font-semibold mb-24">ДЕТАЛИ</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 shadow-md ">
          <p className="font-semibold mb-4 text-2xl">ПОДАРКИ</p>
          <p className="font-light">
            Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а
            пожелания в конвертах помогут осуществить наши мечты!
          </p>
        </div>
        <div className="bg-white p-6 shadow-md">
          <p className="font-semibold mb-4 text-2xl">ЦВЕТЫ</p>
          <p className="font-light">
            Сразу после свадьбы мы улетаем в свадебное путешествие, поэтому мы
            не успеем насладиться красотой подаренных цветов и будем рады, если
            вместо цветов вы решите подарить нам книгу, которая оказала на вас
            значительное влияние, с вашими пожеланиями и автографом.
          </p>
        </div>
        <div className="bg-white p-6 shadow-md">
          <p className="font-semibold mb-4 text-2xl">НЕБОЛЬШАЯ ПРОСЬБА</p>
          <p className="font-light">
            От всего сердца просим вас воздержаться от криков «Горько!» и
            сохранить атмосферу уютного семейного праздника.
          </p>
        </div>
      </div>
    </section>
  );
}
