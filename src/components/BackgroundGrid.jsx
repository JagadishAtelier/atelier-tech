import React, { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/200?1",
  "https://picsum.photos/200?2",
  "https://picsum.photos/200?3",
  "https://picsum.photos/200?4",
  "https://picsum.photos/200?5",
];

const totalCells = 60;

// RANDOM SHAPES
const shapes = [
  "square",
  "circle",
  "rounded-top-right",
  "diamond",
  "triangle",
  "blob"
];

const bgColors = ["#ffffff", "#eceaff", "#f5f5f5", "#ffe9ff", "#dfe7ff"];

function BackgroundGrid() {
  const [visibleImages, setVisibleImages] = useState({});
  const [randomShapes, setRandomShapes] = useState([]);

  useEffect(() => {
    const shapeArray = Array.from({ length: totalCells }, () => {
      return shapes[Math.floor(Math.random() * shapes.length)];
    });
    setRandomShapes(shapeArray);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) => {
        const newState = { ...prev };
        const randomCell = Math.floor(Math.random() * totalCells);
        newState[randomCell] = !newState[randomCell];
        return newState;
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
          borderLeft: "40px solid transparent",
          borderRight: "40px solid transparent",
          borderBottom: "70px solid white",
          background: "none",
        };
      case "blob":
        return { borderRadius: "40% 60% 55% 45%" };
      default:
        return {};
    }
  };

  return (
    <div className="relative w-full">

      {/* GRID BACKGROUND */}
      <div className="grid grid-cols-12 gap-3 px-20 mt-15">
        {[...Array(totalCells)].map((_, index) => {
          const shape = randomShapes[index];
          const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
          const isTriangle = shape === "triangle";

          return (
            <div
              key={index}
              className="w-20 h-20 flex items-center justify-center relative overflow-hidden"
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

      {/* CARD OVERLAY */}
      <div className="absolute top-1/4 left-1/5 flex justify-center items-center pointer-events-none">
        <div className="bg-[#181b25] shadow-xl px-20 py-7 rounded-full text-center pointer-events-auto">
            <div className="flex justify-end items-start text-orange-300">
                <img src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_circular_down_left.svg"/>
                <p>Explore</p>
            </div>
          <h2 className="text-7xl font-bold mb-2 !text-black">Join with a free trail</h2>
          <p className="text-gray-600">
            who grow their business with Atelier
          </p>
        </div>
      </div>

    </div>
  );
}

export default BackgroundGrid;
