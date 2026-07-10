

import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";

export default function Home(){

return(

<>

<Hero/>
<WhyChoose />


<div className="container">

<h1>Featured Courses</h1>

<div className="grid">

<div className="card">
<h3>Web Development</h3>
<p>Learn React & Next.js</p>
</div>

<div className="card">
<h3>Artificial Intelligence</h3>
<p>Introduction to AI</p>
</div>

<div className="card">
<h3>Database Systems</h3>
<p>Learn SQL and MongoDB</p>
</div>

</div>

</div>

<FeatureSection/>
<Testimonials />
<Stats />


</>

)

}