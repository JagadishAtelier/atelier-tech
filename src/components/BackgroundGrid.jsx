import React, { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/200?1",
  "https://picsum.photos/200?2",
  "https://picsum.photos/200?3",
  "https://picsum.photos/200?4",
  "https://picsum.photos/200?5",
];

const totalCells = 60;

const shapes = [
  "square",
  "circle",
  "rounded-top-right",
  "diamond",
  "triangle",
  "blob",
];

const bgColors = ["#ffffff", "#eceaff", "#f5f5f5", "#ffe9ff", "#dfe7ff"];

function BackgroundGrid() {
  const [visibleImages, setVisibleImages] = useState({});
  const [randomShapes, setRandomShapes] = useState([]);

  useEffect(() => {
    setRandomShapes(
      Array.from({ length: totalCells }, () =>
        shapes[Math.floor(Math.random() * shapes.length)]
      )
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) => {
        const next = { ...prev };
        const randomCell = Math.floor(Math.random() * totalCells);
        next[randomCell] = !next[randomCell];
        return next;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const getShapeStyles = (shape) => {
    switch (shape) {
      case "circle":
        return { borderRadius: "50%" };
      case "rounded-top-right":
        return { borderRadius: "0 30px 0 0" };
      case "diamond":
        return { transform: "rotate(45deg)", borderRadius: "5px" };
      case "triangle":
        return {
          width: "0",
          height: "0",
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: "55px solid white",
          background: "none",
        };
      case "blob":
        return { borderRadius: "40% 60% 55% 45%" };
      default:
        return {};
    }
  };

  return (
    <div className="relative w-full overflow-hidden">

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12
          gap-2 sm:gap-3
          px-4 sm:px-10 md:px-16 lg:px-20
          mt-10 lg:mt-15
        "
      >
        {[...Array(totalCells)].map((_, index) => {
          const shape = randomShapes[index];
          const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
          const isTriangle = shape === "triangle";

          return (
            <div
              key={index}
              className="
                lg:flex md:flex  items-center justify-center relative overflow-hidden hidden
                w-12 h-12
                sm:w-14 sm:h-14
                md:w-16 md:h-16
                lg:w-20 lg:h-20
                
              "
              style={{
                backgroundColor: isTriangle ? "transparent" : bgColor,
                ...getShapeStyles(shape),
              }}
            >
              {!isTriangle && visibleImages[index] && (
                <img
                  src={images[index % images.length]}
                  className="absolute w-full h-full object-cover opacity-90"
                  alt=""
                />
              )}
            </div>
          );
        })}
      </div>

      {/* OVERLAY CARD */}
      <div
        className="
          lg:absolute md:absolute relative
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          lg:top-1/4 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/4
          flex sm:justify-between justify-center items-center
        "
      >
        <div
          className="
            bg-[#181b25] shadow-xl
            px-8 py-20
            sm:px-12 sm:py-10
            lg:px-20 lg:py-7
            lg:rounded-full text-center
            md:rounded-full 
            lg:max-w-[95vw]
            md:w-[80vw]
            w-full
          "
        >
          <div className="flex justify-end items-start text-orange-300">
            <img
              src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_circular_down_left.svg"
              className="h-6"
            />
            <p className="ml-2">Explore</p>
          </div>

          <h2 className="
            text-3xl sm:text-4xl md:text-5xl
            lg:text-7xl
            font-bold my-2 !text-black
          ">
            Join with a free trial
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            who grow their business with Atelier
          </p>
        </div>
      </div>

    </div>
  );
}

export default BackgroundGrid;
