import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroComponentsComponent } from './micro-components.component';

describe('MicroComponentsComponent', () => {
  let component: MicroComponentsComponent;
  let fixture: ComponentFixture<MicroComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
