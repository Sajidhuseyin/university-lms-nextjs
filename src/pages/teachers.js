import Image from "next/image";

export default function Teachers(){

const teachers=[

{
name:"Sajid Hussain",
subject:"Full Stack Development",
image:"/my-software-engineer.png"
},

{
name:"Dr. Sarah Ali",
subject:"Artificial Intelligence",
image:"/teacher_ai.png"
},

{
name:"Prof. Ahmed Khan",
subject:"Database Systems",
image:"/teacher_db.png"
}

];

return(

<div className="container">

<h1>Our Teachers</h1>

<div className="grid">

{teachers.map((teacher,index)=>(

<div className="card" key={index}>

<Image
src={teacher.image}
width={150}
height={150}
alt={teacher.name}
style={{
borderRadius:"50%",
objectFit:"cover"
}}
/>

<h3>{teacher.name}</h3>

<p>{teacher.subject}</p>

<button>
View Profile
</button>

</div>

))}

</div>

</div>

)

}