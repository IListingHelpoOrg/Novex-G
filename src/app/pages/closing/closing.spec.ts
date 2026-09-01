import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Closing } from './closing';

describe('Closing', () => {
  let component: Closing;
  let fixture: ComponentFixture<Closing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Closing],
    }).compileComponents();

    fixture = TestBed.createComponent(Closing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
