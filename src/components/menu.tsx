import React,{useState,useEffect} from 'react';
import LessonList from './lessonList'
const COURSES = [
    {id:1,title:'course title',lessons:[
        {id:1,title:'lesson 1',description:'description'},
        {id:2,title:'lesson 2',description:'description'},
        {id:3,title:'lesson 3',description:'description'},
        {id:4,title:'lesson 4',description:'description'}
    ],author:'manjunath kalburgi',price:1000,discount:'20%'}
]
export default function Menu(){
    const {lesson,setLessons} = useState([])
    return <div>
        <LessonList lessons={COURSES[0].lessons} title={"LESSONS"}/>
        {/* <ResourceList/>
        <AssignmentList/>
        <GallaryList/>
        <NotesList/> */}
    </div>
}