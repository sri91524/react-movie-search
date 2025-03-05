import { useState } from "react";
import '../App.css'

function Form(props){
    
const [formData, setFormData] = useState({searchterm:""});

const handleChange = (e) =>{
    setFormData({...formData, 
        [e.target.name]:e.target.value});
}

const handleSubmit = (e) =>{
    e.preventDefault();
    props.moviesearch(formData.searchterm);
}

return (        
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" className="searchbox" name="searchterm" value={formData.searchterm} onChange ={handleChange}/>
            <input className="btnsearch" type="submit" value="Submit" />
        </form>
    </div>
)
    
};

export default Form;