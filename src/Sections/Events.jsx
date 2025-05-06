import React from "react";
import ImageCard from "../Components/ImageCard";
const events = [
  {
    eventName: "Freshers and Farewell Party",
    date: "2024-04-20",
    day: "Saturday",
    month: "April",
    image: "https://www.tamiu.edu/newsinfo/calendar/images/aic.png",
  },
  {
    eventName: "Science Exhibition",
    date: "2024-12-07",
    day: "Saturday",
    month: "December",
    image: "https://www.tamiu.edu/newsinfo/calendar/images/aic.png",
  },
  {
    eventName: "Admissions Open Announcement",
    date: "2024-07-01",
    day: "Monday",
    month: "July",
    image: "https://www.tamiu.edu/newsinfo/calendar/images/aic.png",
  },
  {
    eventName: "Holika Dahan Celebration",
    date: "2025-03-13",
    day: "Thursday",
    month: "March",
    image: "https://www.tamiu.edu/newsinfo/calendar/images/aic.png",
  },
];

const Events = () => {
  return (
    <div>
      <div>
        <div className="text-4xl font-black flex justify-center items-center">
          <h2>Upcoming Events</h2>
        </div>
        <div className="flex flex-row gap-3 py-8 mb-6 w-[1280px]">
          {events.map((event, index) => (
            <ImageCard
              key={index}
              imgSrc={event.image}
              Heading={event.date}
              About={event.eventName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
{
  /* <div key={index} className="event-card">
              <img src={event.image} alt={event.eventName} />
              <h3>{event.eventName}</h3>
              <p>
                {event.day}, {event.date}
              </p>
            </div> */
}
export default Events;
