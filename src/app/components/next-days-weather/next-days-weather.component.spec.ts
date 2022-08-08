import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDaysWeatherComponent } from './next-days-weather.component';

describe('NextDaysWeatherComponent', () => {
  let component: NextDaysWeatherComponent;
  let fixture: ComponentFixture<NextDaysWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextDaysWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextDaysWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
