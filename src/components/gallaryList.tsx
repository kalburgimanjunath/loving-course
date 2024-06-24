import React from "react";
export default function GallaryList({ lessons, title }) {
  return (
    <div>
      <h3 className="text-blue-500">{title}</h3>
      {lessons &&
        lessons.map((item, index) => {
          return (
            <div className="font-bold text-2xlg" key={item.id}>
              {item.title}
            </div>
          );
        })}
    </div>
  );
}
