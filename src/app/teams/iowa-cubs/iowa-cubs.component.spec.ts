import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IowaCubsComponent } from './iowa-cubs.component';

describe('IowaCubsComponent', () => {
  let component: IowaCubsComponent;
  let fixture: ComponentFixture<IowaCubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IowaCubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IowaCubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
