export default class TemperatureFetchingService {
    kelvinConstant = 273.15

    fetchWeather(httpClient, city) {
        return httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f544a190f03d75348a502d81c72dc97b`);
    }

    convertKelvinToCelcius(kelvinValue) {
        return Math.round(kelvinValue - this.kelvinConstant);
    }
}