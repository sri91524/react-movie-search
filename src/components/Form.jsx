import { useState } from "react";

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
            <input type="text" name="searchterm" value={formData.searchterm} onChange ={handleChange}/>
            <input type="submit" value="submit" />
        </form>
    </div>
)
    
};

export default Form;