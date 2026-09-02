import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardIncome } from './reward-income';

describe('RewardIncome', () => {
  let component: RewardIncome;
  let fixture: ComponentFixture<RewardIncome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardIncome],
    }).compileComponents();

    fixture = TestBed.createComponent(RewardIncome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
