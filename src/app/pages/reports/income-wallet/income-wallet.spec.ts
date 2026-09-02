import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeWallet } from './income-wallet';

describe('IncomeWallet', () => {
  let component: IncomeWallet;
  let fixture: ComponentFixture<IncomeWallet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeWallet],
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeWallet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
