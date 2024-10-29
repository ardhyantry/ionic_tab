import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCouponPage } from './list-coupon.page';

describe('ListCouponPage', () => {
  let component: ListCouponPage;
  let fixture: ComponentFixture<ListCouponPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCouponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
