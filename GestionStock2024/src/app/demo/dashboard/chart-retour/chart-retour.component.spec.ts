import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRetourComponent } from './chart-retour.component';

describe('ChartRetourComponent', () => {
  let component: ChartRetourComponent;
  let fixture: ComponentFixture<ChartRetourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartRetourComponent]
    });
    fixture = TestBed.createComponent(ChartRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
