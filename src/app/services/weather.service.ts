import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  /**
   * Méthode permettant de générer la chaîne de caractère de la date actuelle.
   */
  static getDateString = (date: Date = new Date()): string => {
    const today = {
      day: date.getDay(),
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };

    const days: string[] = [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ];

    const months: string[] = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];

    return `${Math.log10(today.hour) >= 1 ? today.hour : '0' + today.hour}:${
      Math.log10(today.minutes) >= 1 ? today.minutes : '0' + today.minutes
    } - ${days[today.day]}, ${today.date} ${months[today.month]} ${today.year}`;
  };

  /**
   * Méthode pour récupérer les informations météo d'une ville
   * à partir de l'API Open Weather Maps.
   */
  getWeather = (city: string): Observable<any> => {
    //! FIXME: This is the real code
    return this.http
      .get(`${env.weatherApiURL}&q=${city}&appid=${env.apiKey}`, {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(catchError(this.handleError));

    //! This is just for local testing
    // return this.http
    //   .get(`assets/response-weather.json`, {
    //     observe: 'body',
    //     responseType: 'json',
    //   })
    //   .pipe(catchError(this.handleError));
  };

  /**
   * Méthode pour récupérer les prévisions météo d'une position géographique
   * à partir de l'API Open Weather Maps.
   */
  getForecast = (location: { lon: number; lat: number }): Observable<any> => {
    //! FIXME: This is the real code
    // return this.http
    //   .get(
    //     `${env.onecallApiURL}&lon=${location.lon}&lat=${location.lat}&appid=${env.apiKey}`,
    //     {
    //       observe: 'body',
    //       responseType: 'json',
    //     }
    //   )
    //   .pipe(catchError(this.handleError));

    //! This is just for local testing
    return this.http
      .get(`assets/response-forecast.json`, {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(catchError(this.handleError));
  };

  /**
   * Http Error handler
   * @param error
   * @returns Observable
   */
  private handleError(error: HttpErrorResponse) {
    error.status === 0
      ? console.error('An error occurred:', error.error)
      : console.error(
          `Api returned code ${error.status}, body was: `,
          error.error
        );
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
