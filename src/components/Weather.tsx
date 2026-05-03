import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherFetch.ts";

const Weather = () => {
    const city = useAppSelector(state => state.city);
    const {data: weather, error, isLoading} = useGetWeatherByCityQuery(city, {
        skip: !city,
        refetchOnFocus: true,
        pollingInterval: 1000*60,
        skipPollingIfUnfocused: true
    });

    if (!city) {
        return <div className={'infoWeather'}>Enter your city</div>
    }

    if (isLoading) {
        return <div className={'infoWeather'}>Loading...</div>;
    }

    if (error) {
        return <div className={'errorWeather'}>Enter correct city</div>;
    }

    return (
        <div className={'infoWeather'}>
            {!!weather &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
                </>
            }
        </div>
    )
}

export default Weather;
