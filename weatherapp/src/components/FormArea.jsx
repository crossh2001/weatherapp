import { useState, useEffect } from "react";
import axios from 'axios';

function FormArea(){
    
    const [city, setCity] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3000/',  {city} );
            console.log("sending data: ", {city});
        } catch (error) {
            console.error(error);
        }
    };

    
    return(
        <>
            <h1>Enter the Name of a City</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="city" value={city} onChange={e => setCity(e.target.value)}/>

                <input type="submit" value="Enter"/>
            </form>
        </>
    );
}


export default FormArea