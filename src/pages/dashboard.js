export default function Dashboard(){

return(

<div className="container">

<h1>Student Dashboard</h1>

<div className="grid">

<div className="card">
<h2>5</h2>
<p>Enrolled Courses</p>
</div>

<div className="card">
<h2>3</h2>
<p>Assignments Pending</p>
</div>

<div className="card">
<h2>80%</h2>
<p>Course Progress</p>
</div>

</div>

<h2>Recent Activities</h2>

<div className="card">
<p>✔ Completed Web Development Quiz</p>
</div>

<div className="card">
<p>✔ Submitted Database Assignment</p>
</div>

<div className="card">
<p>✔ Started Artificial Intelligence Course</p>
</div>

</div>

)

}