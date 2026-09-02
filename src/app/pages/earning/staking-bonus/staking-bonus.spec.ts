import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakingBonus } from './staking-bonus';

describe('StakingBonus', () => {
  let component: StakingBonus;
  let fixture: ComponentFixture<StakingBonus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakingBonus],
    }).compileComponents();

    fixture = TestBed.createComponent(StakingBonus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
