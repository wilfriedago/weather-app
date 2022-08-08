import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private loading: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  loadingActivity(): void {
    this.loading = !this.loading;
    this.subject.next(this.loading);
  }

  onLoading(): Observable<any> {
    return this.subject.asObservable();
  }
}
