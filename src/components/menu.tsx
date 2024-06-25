import React, { useState, useEffect } from "react";
import {
  NotesList,
  LessonList,
  ResourceList,
  AssignmentList,
  GallaryList,
} from "./";
const COURSES = [
  {
    id: 1,
    title: "course title",
    lessons: [
      {
        id: 1,
        title: "lesson 1",
        description: "description",
        pages: [
          { id: 1, title: "page 1", description: "" },
          { id: 2, title: "page 2", description: "" },
          { id: 3, title: "page 3", description: "" },
        ],
      },
      { id: 2, title: "lesson 2", description: "description" },
      { id: 3, title: "lesson 3", description: "description" },
      { id: 4, title: "lesson 4", description: "description" },
    ],
    author: "manjunath kalburgi",
    price: 1000,
    discount: "20%",
  },
];
export default function Menu() {
  return (
    <div>
      <LessonList lessons={COURSES[0].lessons} title={"LESSONS"} />
      <ResourceList lessons={COURSES[0].lessons} title={"RESOURCES"} />
      <AssignmentList lessons={COURSES[0].lessons} title={"ASSIGNMENTS"} />
      <GallaryList lessons={COURSES[0].lessons} title={"GALLARY"} />
      <NotesList lessons={COURSES[0].lessons} title={"NOTES"} />
    </div>
  );
}
