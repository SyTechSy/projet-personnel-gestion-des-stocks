import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTableAccueilComponent } from './chart-table-accueil.component';

describe('ChartTableAccueilComponent', () => {
  let component: ChartTableAccueilComponent;
  let fixture: ComponentFixture<ChartTableAccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartTableAccueilComponent]
    });
    fixture = TestBed.createComponent(ChartTableAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
