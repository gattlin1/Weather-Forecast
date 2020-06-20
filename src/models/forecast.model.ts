import { ForecastInfo } from './forecastInfo.model';

export class Forecast {
    city: string;
    state?: string;
    country: string;
    daily: Array<ForecastInfo>;

    constructor(data?: any) {
        const defaults = {
            daily: [],
            ...data
        };

        this.city = defaults.city_name;
        this.state = defaults.state_code;
        this.country = defaults.country_code;
        this.daily = defaults.daily;

        if (defaults.data) {
            defaults.data.forEach(dailyInfo => {
                this.daily.push(new ForecastInfo(dailyInfo));
            });
        }
    }
}
