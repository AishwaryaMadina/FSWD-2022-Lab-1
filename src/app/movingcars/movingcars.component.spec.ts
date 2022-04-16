import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingcarsComponent } from './movingcars.component';

describe('MovingcarsComponent', () => {
  let component: MovingcarsComponent;
  let fixture: ComponentFixture<MovingcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
