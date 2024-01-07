import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrfComponent } from './card-prf.component';

describe('CardPrfComponent', () => {
  let component: CardPrfComponent;
  let fixture: ComponentFixture<CardPrfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPrfComponent]
    });
    fixture = TestBed.createComponent(CardPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
