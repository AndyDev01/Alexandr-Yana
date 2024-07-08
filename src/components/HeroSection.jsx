import { ArrowDownIcon } from "../icons/ArrowDownIcon";

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
        <span className=" text-white block text-[5rem]">12.10.2024</span>
        <ArrowDownIcon />
      </div>
    </section>
  );
}
