const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// destructuring 
const {courseInstructor : instructor} = course
console.log(course.courseInstructor);
console.log(instructor);

// API 
// {
//     "name"="Hitesh",
//     "courseName"="Js in Hindi",
//     "price"="999"
// }
// JSON
