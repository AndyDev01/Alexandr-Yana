export function Location() {
  return (
    <section className="bg-[url('/location.jpg')] h-screen overflow-hidden  bg-cover bg-center flex items-center justify-center text-center">
      <div className="bg-white/90 w-2/5 p-16 flex flex-col items-center">
        <p className="text-6xl  font-greatvibes">Локация</p>
        <div className="w-10 h-1 bg-black my-16"></div>
        <p className="font-light text-xl mb-10">
          Наша свадьба пройдет в Ресторане Egoist расположенный на территории
          курорта Новая Истра.
        </p>
        <a href="https://yandex.ru/maps/?ll=36.798722%2C55.901347&mode=search&sll=36.792419%2C55.901374&text=55.901374%2C36.792419&z=16.68">
          <button className="text-white px-8 py-3 text-xl bg-black">
            ПЕРЕЙТИ К КАРТЕ
          </button>
        </a>
      </div>
    </section>
  );
}
