import { TelegramIcon } from "../icons/TelegramIcon";

export function Organizer() {
  return (
    <section className="bg-gray-200/70 py-24 flex items-center flex-col">
      <span className="text-6xl mb-12 font-greatvibes">
        Свадебный организатор
      </span>
      <div className="mb-4 text-center text-xl font-light max-w-[700px]">
        В случае возникновения вопрос в день торжества, обращайтесь к нашему
        свадебному организатору Евгении
      </div>
      <span className="mb-8 text-xl">+7 926 093 52 71</span>
      <a href="https://t.me/jenzyu">
        <TelegramIcon />
      </a>
    </section>
  );
}
