export function DressCode() {
  return (
    <section className="flex flex-col items-center justify-center  text-center">
      <div className="max-w-">
        <p className="py-16 text-3xl">ДРЕСС-КОД</p>
        <div>
          <p className="text-xl font-light pb-4">
            Мы очень старались сделать праздник красивым и будем рады, если в
            своих нарядах вы поддержите цветовую гамму нашей свадьбы:
          </p>
          <p className="text-2xl mb-4">Black&White</p>
          <div className="flex justify-center gap-5 pb-16">
            <div className="w-28 h-28 border bg-black border-black"></div>
            <div className="w-28 h-28 border border-black"></div>
          </div>
        </div>
      </div>
      <div className="pb-16">
        <p className="mb-5 text-2xl">Девушки</p>
        <p className="mb-16 text-xl font-light">
          Вечерние платья, костюмы, юбки, блузки. Приветствуются аксессуары в
          палитре торжества.
        </p>
        <p className="mb-5 text-2xl ">Мужчины</p>
        <p className=" text-xl font-light">
          Рубашка / футболка, брюки и пиджак. Лоферы, мокасины или белые
          кроссовки.
        </p>
      </div>
    </section>
  );
}
