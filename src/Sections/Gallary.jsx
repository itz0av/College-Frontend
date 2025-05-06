import React from "react";

const GalleryPost = [
  {
    platform: "Instagram",
    img: "https://curator-assets.b-cdn.net/7c118c52-d774-4b6e-8e36-69e3fd88/368551292.jpg?width=480&quality=75",
    desc: "Thank you to our incredible students and mentors!",
    timeAgo: "2 days ago",
  },
  {
    platform: "Facebook",
    img: "https://curator-assets.b-cdn.net/7c118c52-d774-4b6e-8e36-69e3fd88/368504402.jpg?width=480&quality=75",
    desc: "Celebrating TAMIU’s largest Spring enrollment!",
    timeAgo: "3 days ago",
  },
  {
    platform: "Instagram",
    img: "https://curator-assets.b-cdn.net/7c118c52-d774-4b6e-8e36-69e3fd88/368551292.jpg?width=480&quality=75",
    desc: "Thank you to our incredible students and mentors!",
    timeAgo: "2 days ago",
  },
  {
    platform: "Facebook",
    img: "https://curator-assets.b-cdn.net/7c118c52-d774-4b6e-8e36-69e3fd88/368504402.jpg?width=480&quality=75",
    desc: "Celebrating TAMIU’s largest Spring enrollment!",
    timeAgo: "3 days ago",
  },
  {
    platform: "Instagram",
    img: "https://curator-assets.b-cdn.net/7c118c52-d774-4b6e-8e36-69e3fd88/368551292.jpg?width=480&quality=75",
    desc: "Thank you to our incredible students and mentors!",
    timeAgo: "2 days ago",
  },
  {
    platform: "Facebook",
    img: "https://curator-assets.b-cdn.net/7c118c52-d774-4b6e-8e36-69e3fd88/368504402.jpg?width=480&quality=75",
    desc: "Celebrating TAMIU’s largest Spring enrollment!",
    timeAgo: "3 days ago",
  },
  {
    platform: "Instagram",
    img: "https://curator-assets.b-cdn.net/7c118c52-d774-4b6e-8e36-69e3fd88/368551292.jpg?width=480&quality=75",
    desc: "Thank you to our incredible students and mentors!",
    timeAgo: "2 days ago",
  },
  {
    platform: "Facebook",
    img: "https://curator-assets.b-cdn.net/7c118c52-d774-4b6e-8e36-69e3fd88/368504402.jpg?width=480&quality=75",
    desc: "Celebrating TAMIU’s largest Spring enrollment!",
    timeAgo: "3 days ago",
  },
  // ... more posts
];

// Function to split array into chunks (one for each column)
function splitIntoColumns(data, columnCount) {
  const columns = Array.from({ length: columnCount }, () => []);
  data.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
}

const Gallary = () => {
  const columns = splitIntoColumns(GalleryPost, 4); // 4-column layout

  return (
    <div>
      <div className="flex items-center justify-center mb-12">
        <h2 className="font-extrabold text-4xl">Our Gallery</h2>
      </div>

      <div className="grid grid-cols-4 w-[1180px] gap-4 mb-12 mx-auto">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="gap-4 flex flex-col justify-center">
            {col.map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={event.img}
                  alt="event"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{event.platform}</p>
                  <p className="text-base font-medium mt-1">{event.desc}</p>
                  {/* <p className="text-xs text-gray-400 mt-2">{event.timeAgo}</p> */}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
