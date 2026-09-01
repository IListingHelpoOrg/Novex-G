import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroPin } from './zero-pin';

describe('ZeroPin', () => {
  let component: ZeroPin;
  let fixture: ComponentFixture<ZeroPin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroPin],
    }).compileComponents();

    fixture = TestBed.createComponent(ZeroPin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
