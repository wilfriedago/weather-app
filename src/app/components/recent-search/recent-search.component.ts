import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss'],
})
export class RecentSearchComponent implements OnInit {
  @Output() searchRecentLocationEvent: EventEmitter<any> = new EventEmitter();
  @Input() recentSearchList!: string[];

  constructor() {}

  searchLocation(location: string) {
    this.searchRecentLocationEvent.emit(location);
  }

  ngOnInit(): void {}
}
