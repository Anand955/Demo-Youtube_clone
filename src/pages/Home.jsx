import React from "react";

const Feed = ({ sidebar }) => {
  const cardData = [
    {
      id: 1,
      thumbnail: "/src/assets/thumbnail1.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 2,
      thumbnail: "/src/assets/thumbnail2.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 3,
      thumbnail: "/src/assets/thumbnail3.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 4,
      thumbnail: "/src/assets/thumbnail4.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 5,
      thumbnail: "/src/assets/thumbnail5.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 6,
      thumbnail: "/src/assets/thumbnail6.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 7,
      thumbnail: "/src/assets/thumbnail7.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 8,
      thumbnail: "/src/assets/thumbnail8.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 9,
      thumbnail: "/src/assets/thumbnail1.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 10,
      thumbnail: "/src/assets/thumbnail2.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 11,
      thumbnail: "/src/assets/thumbnail3.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 12,
      thumbnail: "/src/assets/thumbnail4.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 13,
      thumbnail: "/src/assets/thumbnail5.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 14,
      thumbnail: "/src/assets/thumbnail6.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 15,
      thumbnail: "/src/assets/thumbnail7.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
    {
      id: 16,
      thumbnail: "/src/assets/thumbnail8.png",
      title: "Best Channel to learn Coding that help you to be a web developer",
      channel: "Greatstack",
      views: "15k views",
      time: "2 Days ago",
    },
  ];

  return (
    // <div className={` ${sidebar ? "container" : "large_container"}`}>
      // <div className="content">
        <div className="feed">
          {cardData.map((card) => (
            <a key={card.id} className="card" href={`/video/20/${card.id}`}>
              <img src={card.thumbnail} alt={card.title} />
              <h2>{card.title}</h2>
              <h3>{card.channel}</h3>
              <p>
                {card.views} • {card.time}
              </p>
            </a>
          ))}
        </div>
      // </div>
    // </div>
  );
};

export default Feed;
