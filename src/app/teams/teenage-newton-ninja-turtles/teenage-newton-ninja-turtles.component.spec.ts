import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenageNewtonNinjaTurtlesComponent } from './teenage-newton-ninja-turtles.component';

describe('TeenageNewtonNinjaTurtlesComponent', () => {
  let component: TeenageNewtonNinjaTurtlesComponent;
  let fixture: ComponentFixture<TeenageNewtonNinjaTurtlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeenageNewtonNinjaTurtlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenageNewtonNinjaTurtlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
