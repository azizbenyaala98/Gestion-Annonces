import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductPagePage } from './add-product-page.page';

describe('AddProductPagePage', () => {
  let component: AddProductPagePage;
  let fixture: ComponentFixture<AddProductPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddProductPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
