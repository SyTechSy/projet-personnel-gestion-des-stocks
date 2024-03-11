import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRevenuBeneficeComponent } from './chart-revenu-benefice.component';

describe('ChartRevenuBeneficeComponent', () => {
  let component: ChartRevenuBeneficeComponent;
  let fixture: ComponentFixture<ChartRevenuBeneficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartRevenuBeneficeComponent]
    });
    fixture = TestBed.createComponent(ChartRevenuBeneficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
