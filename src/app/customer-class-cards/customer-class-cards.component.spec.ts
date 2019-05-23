import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClassCardsComponent } from './customer-class-cards.component';

describe('CustomerClassCardsComponent', () => {
  let component: CustomerClassCardsComponent;
  let fixture: ComponentFixture<CustomerClassCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerClassCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerClassCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
