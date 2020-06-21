export class ForecastInfo {
    description: string;
    icon: string;
    highTemp: number;
    lowTemp: number;
    windDirection: string;
    date: string;

    constructor(data?: any) {
        const defaults = {
            ...data
        };

        this.description = defaults.weather.description;
        this.icon = defaults.weather.icon;
        this.highTemp = Number(defaults.high_temp);
        this.lowTemp = Number(defaults.low_temp);
        this.windDirection = defaults.wind_cdir;
        this.date = defaults.valid_date;
    }
}
