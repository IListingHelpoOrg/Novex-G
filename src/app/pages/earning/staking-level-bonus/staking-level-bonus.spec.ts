import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakingLevelBonus } from './staking-level-bonus';

describe('StakingLevelBonus', () => {
  let component: StakingLevelBonus;
  let fixture: ComponentFixture<StakingLevelBonus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakingLevelBonus],
    }).compileComponents();

    fixture = TestBed.createComponent(StakingLevelBonus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
