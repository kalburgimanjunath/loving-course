import React from "react";
export default function LessonList({ lessons, title }) {
  const Pages = ({ pages }) => {
    return (
      <div>
        {pages &&
          pages.map((item) => {
            return <div>{item.title}</div>;
          })}
      </div>
    );
  };
  return (
    <div>
      <h3 className="text-blue-500">{title}</h3>
      {lessons &&
        lessons.map((item, index) => {
          return (
            <div className="font-bold text-2xlg" key={item.id}>
              {item.title}
              <Pages pages={item.pages} />
            </div>
          );
        })}
    </div>
  );
}
