import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgRenderComponent } from './svg-render.component';

describe('SvgRenderComponent', () => {
  let component: SvgRenderComponent;
  let fixture: ComponentFixture<SvgRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
