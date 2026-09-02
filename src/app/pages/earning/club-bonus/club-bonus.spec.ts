import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubBonus } from './club-bonus';

describe('ClubBonus', () => {
  let component: ClubBonus;
  let fixture: ComponentFixture<ClubBonus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubBonus],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubBonus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
