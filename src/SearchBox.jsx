import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let[error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "d9ea25f0cb0c24384f0bdca718f3d79c"

    let getWeather = async()=>{
       try{
         let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        console.log(data);
        let result = {
            city:city,
            temp : data.main.temp,
            temMax: data.main.temp_max,
            temMin: data.main.temp_min,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather : data.weather[0].description
        }
        console.log(result);
        return result
       }
        catch(err){
         throw err
        }
    }


    let habdleChange=(e)=>{
        setCity(e.target.value);
    }
    let handleSubmit= async(e)=>{
       try{
         e.preventDefault();
        
        console.log(city);
        let newInfo = await getWeather();
        updateInfo(newInfo);
       }
       catch(err){
        setError(true);
       }
        }
    return(
        <>
        <div className='SearchBox'>
            <h2>Search for  Weather</h2>
            <form action="" onSubmit={handleSubmit}>

               <TextField id="city" label="City Name" variant="outlined"  required onChange={habdleChange} /><br /><br />
                <Button variant="contained" type='submit' endIcon={<SendIcon />}>
                    Submit
                </Button>
                {error && <p style={{color: "red"}}>Please enter a valid city name</p>}
            </form>
        </div>
        
        </>
    )
}