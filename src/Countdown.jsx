import { useState, useRef, useEffect } from "react";
const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTime = () => {
    const countdownDate = new Date("December 26, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = newDate.getTime();
      const difference = countdownDate - now;
      const days = math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = math.floor(
        difference / (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
      );
      const minutes = math.floor(difference / (1000 * 60 * 60) / (1000 * 60));
      const seconds = math.floor(difference / (1000 * 60) / 1000);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);

    useEffect(() => {
      startTime();
      return () => {
        clearInterval(interval.current);
      };
    });
  };

  return (
    <div className="timer">
      <span>{timerDays}</span>:<span>{timerHours}</span>:
      <span>{timerMinutes}</span>:<span>{timerSeconds}</span>
    </div>
  );
};

export default Countdown;
