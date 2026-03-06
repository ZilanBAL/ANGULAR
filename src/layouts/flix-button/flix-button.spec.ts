import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixButton } from './flix-button';

describe('Button', () => {
  let component: FlixButton;
  let fixture: ComponentFixture<FlixButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlixButton],
    }).compileComponents();

    fixture = TestBed.createComponent(FlixButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
