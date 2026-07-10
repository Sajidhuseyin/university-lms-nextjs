import Image from "next/image";

export default function Testimonials(){

const students=[

{
name:"Ali Khan",
course:"React Development",
image:"/std1.jpg",
review:"The LMS is amazing. I learned React from scratch and built real projects."
},

{
name:"Noor Fatima",
course:"Database Systems",
image:"/std3.jpg",
review:"Professional platform with a great learning experience."
},

{
name:"Hamza Ahmed",
course:"Artificial Intelligence",
image:"/std2.jpg",
review:"Excellent teachers and practical assignments."
}

];

return(

<div className="container">

<h1 style={{textAlign:"center",marginBottom:"40px"}}>
Student Testimonials
</h1>

<div className="grid">

{students.map((student,index)=>(

<div className="card" key={index}>

<Image
  src={student.image}
  width={90}
  height={90}
  alt={student.name}
  style={{
    borderRadius: "50%",
    objectFit: "cover"
  }}
/>

<h3>{student.name}</h3>

<p><b>{student.course}</b></p>

<p>"{student.review}"</p>

⭐⭐⭐⭐⭐

</div>

))}

</div>

</div>

)

}