import { useRouter } from "next/router";

export default function CourseDetails() {

const router=useRouter();

const {id}=router.query;

return(

<div className="container">

<div className="card">

<h1>Course Details</h1>

<h2>Course #{id}</h2>

<p>

This course provides students with practical
knowledge and hands-on learning experience.

</p>

<h3>Course Includes:</h3>

<ul>

<li>Video Lectures</li>

<li>Assignments</li>

<li>Quizzes</li>

<li>Projects</li>

<li>Certificate</li>

</ul>

<button>

Enroll Now

</button>

</div>

</div>

)

}