import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustementDesStocksComponent } from './ajustement-des-stocks.component';

describe('AjustementDesStocksComponent', () => {
  let component: AjustementDesStocksComponent;
  let fixture: ComponentFixture<AjustementDesStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjustementDesStocksComponent]
    });
    fixture = TestBed.createComponent(AjustementDesStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
