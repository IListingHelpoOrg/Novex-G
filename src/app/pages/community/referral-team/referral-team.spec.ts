import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralTeam } from './referral-team';

describe('ReferralTeam', () => {
  let component: ReferralTeam;
  let fixture: ComponentFixture<ReferralTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralTeam],
    }).compileComponents();

    fixture = TestBed.createComponent(ReferralTeam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
