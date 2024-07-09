import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { Timer } from "./Timer";

export function HeroSection() {
  return (
    <section className="bg-[url('/hero.jpg')] h-screen overflow-hidden  bg-cover bg-center font-greatvibes">
      <div className="flex flex-col gap- justify-between items-center h-full pt-10 pb-20 ">
        <div>
          <span className="text-black text-[5rem] bg-white">
            #Ну наконец-то!
          </span>
        </div>
        <span className=" text-[16rem]">Александр и Яна</span>
        <span className=" text-white text-2xl block text-[5rem]">
          До свадьбы осталось
        </span>
        <Timer />
        <ArrowDownIcon />
      </div>
    </section>
  );
}
