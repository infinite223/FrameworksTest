import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPlanComponent } from './render-plan.component';

describe('RenderPlanComponent', () => {
  let component: RenderPlanComponent;
  let fixture: ComponentFixture<RenderPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenderPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
