import { useState, useEffect } from "react";

export function Timer() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2024-10-12T15:30:00");
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Дней: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Часов: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Минут: Math.floor((difference / 1000 / 60) % 60),
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
    <div>
      <span className="text-white block text-[5rem]">
        {timeLeft.Дней !== undefined ||
        timeLeft.Часов !== undefined ||
        timeLeft.Минут !== undefined ? (
          <div className="flex gap-8">
            <span>Дней:{timeLeft.Дней} </span>
            <span>Часов: {timeLeft.Часов} </span>
            <span>Минут: {timeLeft.Минут}</span>
          </div>
        ) : (
          <span>Свадьба состоялась!</span>
        )}
      </span>
    </div>
  );
}
