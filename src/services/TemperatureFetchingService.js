export default class TemperatureFetchingService {
    kelvinConstant = 273.15
    api_key = 'f544a190f03d75348a502d81c72dc97b'

    fetchWeather(httpClient, city) {
        return httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.api_key}`);
    }

    convertKelvinToCelcius(kelvinValue) {
        return Math.round(kelvinValue - this.kelvinConstant);
    }
}