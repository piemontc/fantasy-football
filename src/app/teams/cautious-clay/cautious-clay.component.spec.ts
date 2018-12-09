import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CautiousClayComponent } from './cautious-clay.component';

describe('CautiousClayComponent', () => {
  let component: CautiousClayComponent;
  let fixture: ComponentFixture<CautiousClayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CautiousClayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CautiousClayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
