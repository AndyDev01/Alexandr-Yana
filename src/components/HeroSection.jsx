import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { Timer } from "./Timer";

export function HeroSection() {
  return (
    <section className="bg-[url('/hero.jpg')] h-screen overflow-hidden  bg-cover bg-center font-greatvibes">
      <div className="flex flex-col gap- justify-between items-center h-full pt-10 pb-20 ">
        <div>
          <span className=" text-[5rem] text-white text-shadow-custom-outline">
            #Ну наконец-то!
          </span>
        </div>
        <p className=" text-[16rem]  drop-shadow-lg text-shadow-custom-outline-white">
          Александр и Яна
        </p>
        <p className=" text-2xl block text-[5rem] text-white text-shadow-custom-outline">
          До свадьбы осталось
        </p>
        <Timer />
        <ArrowDownIcon />
      </div>
    </section>
  );
}
