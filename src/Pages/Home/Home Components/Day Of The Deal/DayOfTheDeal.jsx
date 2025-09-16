import React, { useEffect, useState } from "react";
import DayOfTheDealCards from "./Day Of The Deal Components/DayOfTheDealCards";

const DayOfTheDeal = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 10,
    minutes: 24,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        <div className="my-16 md:my-20">
          <div className="flex flex-col gap-6">
            <div className="flex xl:flex-row justify-between items-center gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-700">
                  Day of the <span className="text-[#1198ad]">Deal</span>
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Find Brands!
                </p>
              </div>
              <div className="text-md font-medium text-[#1198ad] bg-gray-100 px-3 py-1 rounded-md w-fit">
                <div className="flex gap-2">
                  <div>
                    <span className="countdown font-mono">
                      <span
                        style={{ "--value": timeLeft.days }}
                        aria-live="polite"
                        aria-label={`${timeLeft.days} days remaining`}
                      >
                        '{timeLeft.days}
                      </span>
                    </span>
                    days
                  </div>
                  <span>:</span>
                  <div>
                    <span className="countdown font-mono">
                      <span
                        style={{ "--value": timeLeft.hours }}
                        aria-live="polite"
                        aria-label={`${timeLeft.hours} hours remaining`}
                      >
                        '{timeLeft.hours}
                      </span>
                    </span>
                    hours
                  </div>
                  <span>:</span>

                  <div>
                    <span className="countdown font-mono">
                      <span
                        style={{ "--value": timeLeft.minutes }}
                        aria-live="polite"
                        aria-label={`${timeLeft.minutes} minutes remaining`}
                      >
                        {timeLeft.minutes}
                      </span>
                    </span>
                    min
                  </div>
                  <span>:</span>
                  <div>
                    <span className="countdown font-mono">
                      <span
                        style={{ "--value": timeLeft.seconds }}
                        aria-live="polite"
                        aria-label={`${timeLeft.seconds} seconds remaining`}
                      >
                        '{timeLeft.seconds}
                      </span>
                    </span>
                    sec
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 overflow-hidden">
                {category.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`text-md font-medium ${selectedCategory === cat.name
                      ? "text-white bg-[#1198ad]"
                      : "text-gray-800 bg-gray-100"
                      } px-3 py-1 rounded-md w-fit cursor-pointer`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            <DayOfTheDealCards selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DayOfTheDeal;
