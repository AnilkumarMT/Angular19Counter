import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getsetvalue } from './getsetvalue';

describe('Getsetvalue', () => {
  let component: Getsetvalue;
  let fixture: ComponentFixture<Getsetvalue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getsetvalue],
    }).compileComponents();

    fixture = TestBed.createComponent(Getsetvalue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
