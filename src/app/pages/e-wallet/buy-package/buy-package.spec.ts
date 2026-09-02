import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPackage } from './buy-package';

describe('BuyPackage', () => {
  let component: BuyPackage;
  let fixture: ComponentFixture<BuyPackage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyPackage],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyPackage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
