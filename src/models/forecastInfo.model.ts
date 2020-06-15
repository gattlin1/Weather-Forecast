export class ForecastInfo {
    description: string;
    icon: string;
    highTemp: number;
    lowTemp: number;
    windDirection: string;

    constructor(data?: any) {
        const defaults = {
            description: '',
            icon: '',
            highTemp: 0,
            lowTemp: 0,
            windDirection: '',
            ...data
        };

        this.description = defaults.description;
        this.icon = defaults.icon;
        this.highTemp = defaults.highTemp;
        this.lowTemp = defaults.lowTemp;
        this.windDirection = defaults.windDirection;
    }
}
