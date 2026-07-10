import {useState} from "react";

export default function ContactForm(){

const [formData,setFormData]=useState({
name:"",
email:"",
message:""
});

const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit=(e)=>{
e.preventDefault();

alert("Form submitted");
};

return(

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Name"
onChange={handleChange}
/>

<br/><br/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
/>

<br/><br/>

<textarea
name="message"
placeholder="Message"
onChange={handleChange}
/>

<br/><br/>

<button type="submit">
Send
</button>

</form>

)

}