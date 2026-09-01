import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalBlock } from './withdrawal-block';

describe('WithdrawalBlock', () => {
  let component: WithdrawalBlock;
  let fixture: ComponentFixture<WithdrawalBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawalBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(WithdrawalBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
