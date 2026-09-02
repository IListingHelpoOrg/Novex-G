import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositFund } from './deposit-fund';

describe('DepositFund', () => {
  let component: DepositFund;
  let fixture: ComponentFixture<DepositFund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositFund],
    }).compileComponents();

    fixture = TestBed.createComponent(DepositFund);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
