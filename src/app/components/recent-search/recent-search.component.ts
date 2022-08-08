import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss'],
})
export class RecentSearchComponent implements OnInit, OnChanges {
  @Output() searchLocationRecentEvent: EventEmitter<any> = new EventEmitter();
  recentSearchList: string[] = [];

  constructor() {
    if (!localStorage.getItem('recent-search')) {
      localStorage.setItem('recent-search', [].toString());
    } else {
      this.recentSearchList = new Array(
        localStorage.getItem('recent-search') as string
      );
    }
  }

  updateRecentSearchList(newSearch: string) {
    this.recentSearchList.unshift(newSearch);

    if (this.recentSearchList.length >= 5) this.recentSearchList.pop();

    localStorage.setItem('recent-search', this.recentSearchList.toString());
  }

  searchLocation(location: string) {
    this.searchLocationRecentEvent.emit(location);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
