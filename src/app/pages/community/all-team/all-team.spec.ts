import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTeam } from './all-team';

describe('AllTeam', () => {
  let component: AllTeam;
  let fixture: ComponentFixture<AllTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTeam],
    }).compileComponents();

    fixture = TestBed.createComponent(AllTeam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
