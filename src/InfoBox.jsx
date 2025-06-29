import Card from '@mui/material/Card';
import './InfoBox.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const INIT_URL = "https://plus.unsplash.com/premium_photo-1697808073408-49554887cecd?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
const RAIN_URL="https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
export default function InfoBox({ info }) {
    return (
        <>
            <div className='InfoBox'>
                <h1>Weather Info - {info.weather}</h1>
                <div className="card-content">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={info.humidity > 70 ? RAIN_URL : info.temp < 20 ? COLD_URL : HOT_URL}
                            title="Weather Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <p>Temperature: {info.temp}°C</p>
                                <p>Humidity: {info.humidity}%</p>
                                <p>Feels Like: {info.feelsLike}°C</p>
                                <p>Min Temp: {info.temMin}°C</p>
                                <p>Max Temp: {info.temMax}°C</p>
                                <p>The weather can be described as {info.weather} and feels Like {info.feelsLike}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
