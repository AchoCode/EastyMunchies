import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import { FaPlus, FaPercent } from "react-icons/fa6";
export const Counter = ({ targetCount, percent, countText }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  useEffect(() => {
    let interval;
    if (inView && count < targetCount) {
      let intervalSpeed = (4.7 / targetCount) * 1000;
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, intervalSpeed);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count, inView, targetCount]);
  return (
    <div ref={ref} className="counter">
      {percent ? (
        <div>
          {count}
          <FaPercent />
        </div>
      ) : (
        <div>
          {count} <FaPlus />
        </div>
      )}
      {countText}
    </div>
  );
};
