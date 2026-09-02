import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletReport } from './wallet-report';

describe('WalletReport', () => {
  let component: WalletReport;
  let fixture: ComponentFixture<WalletReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletReport],
    }).compileComponents();

    fixture = TestBed.createComponent(WalletReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
