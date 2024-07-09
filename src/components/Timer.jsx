import { useState, useEffect } from "react";

const getPlural = (number, one, two, five) => {
  if (number % 100 >= 11 && number % 100 <= 14) {
    return five;
  }
  switch (number % 10) {
    case 1:
      return one;
    case 2:
    case 3:
    case 4:
      return two;
    default:
      return five;
  }
};

export function Timer() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2024-10-12T15:30:00");
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white text-shadow-custom-outline">
      <span className=" block text-[5rem]">
        {timeLeft.days !== undefined ||
        timeLeft.hours !== undefined ||
        timeLeft.minutes !== undefined ? (
          <div className="flex gap-8">
            <span>{` ${timeLeft.days} ${getPlural(
              timeLeft.days,
              "день",
              "дня",
              "дней"
            )}`}</span>
            <span>{`${timeLeft.hours} ${getPlural(
              timeLeft.hours,
              "час",
              "часа",
              "часов"
            )}`}</span>
            <span>{`${timeLeft.minutes} ${getPlural(
              timeLeft.minutes,
              "минута",
              "минуты",
              "минут"
            )}`}</span>
          </div>
        ) : (
          <span>Свадьба состоялась!</span>
        )}
      </span>
    </div>
  );
}

export default Timer;
