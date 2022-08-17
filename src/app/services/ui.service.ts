import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private loading: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  loadingActivity = (): void => {
    this.loading = !this.loading;
    this.subject.next(this.loading);
  };
  startLoading = () => this.loadingActivity();
  stopLoading = () => this.loadingActivity();

  onLoading(): Observable<any> {
    return this.subject.asObservable();
  }

  loadStorage = (key: string): void | string[] => {
    return !localStorage.getItem(key)
      ? localStorage.setItem(key, [].toString())
      : (localStorage.getItem(key) as string).split(',');
  };

  saveStorage = (key: string, value: string): void => {
    return localStorage.setItem(key, value);
  };

  cleanArray = (array: string[]): string[] => {
    array = array.filter((entry) => entry.trim() != ''); // Removing empty string
    array = [...new Set(array)]; // Keep unique values
    if (array.length >= 5) array.pop(); // Keep array size to 4
    return array;
  };
}
