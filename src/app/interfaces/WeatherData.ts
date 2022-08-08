export interface WeatherData {
  current: {
    city: string;
    date: number;
    temp: number;
    icon: string;
    description: string;
  };
  details: {
    clouds: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    wind_deg: number;
  };
}
