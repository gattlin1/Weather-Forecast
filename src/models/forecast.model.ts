import { ForecastInfo } from './forecastInfo.model';

export class Forecast {
    cityName: string;
    stateName: string;
    hourlyWeather: Array<ForecastInfo>;

    constructor(data?: any) {
        const defaults = {
            cityName: '',
            stateName: '',
            hourlyWeather: [],
            ...data
        };

        this.cityName = defaults.cityName;
        this.stateName = defaults.stateName;
        this.hourlyWeather = defaults.hourlyWeather.map(
            (hourlyWeather: ForecastInfo) => new ForecastInfo(hourlyWeather));
    }
}
