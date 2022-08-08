import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSearchComponent } from './recent-search.component';

describe('RecentSearchComponent', () => {
  let component: RecentSearchComponent;
  let fixture: ComponentFixture<RecentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
