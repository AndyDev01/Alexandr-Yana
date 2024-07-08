export function Location() {
  return (
    <section className="bg-[url('/location.jpg')] h-screen overflow-hidden  bg-cover bg-center flex items-center justify-center text-center">
      <div className="bg-white/90 w-2/5 p-16 flex flex-col items-center">
        <p className="text-6xl pb-16">Локация</p>
        <div className="w-10 h-1 bg-black mb-10"></div>
        <p className="font-light text-xl mb-10">
          Наша свадьба пройдет в *Тут будет кликабельная ссылка по названию
          локации*
        </p>
        <p className="font-light mb-10 text-xl">
          она находится по адресу: *тут будет адресс*
        </p>
        <a href="">
          <button className="text-white px-8 py-3 text-xl bg-black">
            ПЕРЕЙТИ К КАРТЕ
          </button>
        </a>
      </div>
    </section>
  );
}
