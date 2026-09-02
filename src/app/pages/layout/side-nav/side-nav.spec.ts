import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNav } from './side-nav';

describe('SideNav', () => {
  let component: SideNav;
  let fixture: ComponentFixture<SideNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNav],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keep Account collapsed and toggle dropdown state', () => {
    const account = component.clientNavItems.find((item) => item.title === 'Account');
    const eWallet = component.clientNavItems.find((item) => item.title === 'E-Wallet');

    expect(component.isDropdownOpen(account!)).toBe(false);
    expect(component.isDropdownOpen(eWallet!)).toBe(false);

    component.toggleDropdown(eWallet!);
    expect(component.isDropdownOpen(eWallet!)).toBe(true);
    expect(component.isDropdownOpen(account!)).toBe(false);

    component.toggleDropdown(eWallet!);
    expect(component.isDropdownOpen(eWallet!)).toBe(false);
  });
});
