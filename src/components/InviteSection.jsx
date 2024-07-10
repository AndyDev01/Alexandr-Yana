export function InviteSection() {
  return (
    <section className="py-32">
      <div className="flex flex-wrap relative">
        <div className="px-32 mt-28 w-1/2">
          <p className="font-greatvibes text-6xl mb-5">Дорогие гости!</p>
          <p className="mb-5 font-light text-xl ">
            В нашей жизни предстоят счастливые перемены! Мы хотим, чтобы в этот
            день рядом с нами были самые близкие и дорогие для нас люди. Будем
            рады разделить с вами чудесный праздник в день нашей свадьбы.
          </p>
          <span className="font-greatvibes text-6xl">12.10.2024</span>
        </div>
        <div className=" w-1/2 flex justify-center items-center">
          <div className="w-[80%] flex items-center">
            <img src="/invite.jpg" alt="photo2" />
          </div>
        </div>
        <div className="px-32">
          <button
            className="text-white px-8 py-3 text-xl bg-black absolute bottom-0"
            onClick={() =>
              document
                .getElementById("guest-form")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            ЗАПОЛНИТЬ АНКЕТУ ГОСТЯ
          </button>
        </div>
      </div>
    </section>
  );
}
