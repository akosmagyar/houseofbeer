import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BrewingsComponent} from './brewings.component';

describe('BrewingsComponent', () => {
  let component: BrewingsComponent;
  let fixture: ComponentFixture<BrewingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
