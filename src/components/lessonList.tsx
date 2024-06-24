export default function LessonList({lessons,title}){
    return <div><h3>{title}</h3>
    {lessons && lessons.map(item=>{
        return <div>{item.title}</div>
    })}</div>
}