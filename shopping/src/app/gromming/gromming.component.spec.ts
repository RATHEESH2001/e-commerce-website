import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrommingComponent } from './gromming.component';

describe('GrommingComponent', () => {
  let component: GrommingComponent;
  let fixture: ComponentFixture<GrommingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrommingComponent]
    });
    fixture = TestBed.createComponent(GrommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
