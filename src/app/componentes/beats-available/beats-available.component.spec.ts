import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsAvailableComponent } from './beats-available.component';

describe('BeatsAvailableComponent', () => {
  let component: BeatsAvailableComponent;
  let fixture: ComponentFixture<BeatsAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatsAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
