import React from "react";
export default function LessonList({ lessons, title }) {
  const Pages = ({ pages }) => {
    return (
      <div className="p-2 border">
        {pages &&
          pages.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
      </div>
    );
  };
  return (
    <div>
      <h3 className="text-white font-bold bg-blue-500 p-2">{title}</h3>
      <ol className="list-decimal p-2 ml-4">
        {lessons &&
          lessons.map((item, index) => {
            return (
              <li className="text-2xlg capitalize font-bold" key={item.id}>
                <div className="font-bold rounded-t-lg p-2 uppercase">
                  {item.title}
                </div>
                <Pages pages={item.pages} />
              </li>
            );
          })}
      </ol>
    </div>
  );
}
