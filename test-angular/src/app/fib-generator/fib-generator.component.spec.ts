import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibGeneratorComponent } from './fib-generator.component';

describe('FibGeneratorComponent', () => {
  let component: FibGeneratorComponent;
  let fixture: ComponentFixture<FibGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FibGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FibGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
