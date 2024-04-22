import { Component, NgZone, OnInit } from '@angular/core';
import { RenderPlanComponent } from '../render-plan/render-plan.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { BehaviorSubject, Observable, Observer, Subject, map, of, takeUntil, timer } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-micro-components',
  standalone: true,
  imports: [RenderPlanComponent, FormsModule, NgIf, CommonModule, HeaderComponent],
  templateUrl: './micro-components.component.html',
  styleUrl: './micro-components.component.css'
})
export class MicroComponentsComponent {
  rectsCount: number = 100;
  rectsSize: number = 5;
  isRendering: boolean = false;
  // isRendering$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  timeRender: number = 0;
  finishRender: boolean = false;
  rects: any[] = [];
  startTime: number = 0;
  endTime: number = 0;
  reset: boolean = false;

  private readonly destroy$: Subject<void> = new Subject<void>();

  startRenderRects(): void {
    this.rects = []
    this.isRendering = false;
    this.endTime = 0
    this.startTime = 0;

    setTimeout(() => {
      let _rects = [];
      for (let i = 0; i < this.rectsCount; i++) {
        const backgroundColor = this.generateRandomColor();
        _rects.push({id: i, backgroundColor});
      }
      this.rects = _rects;
      this.isRendering = true;
  
      // this.isRendering$.next(true);
      this.startTime = performance.now();
    }, 0)
  }

  resetTest(): void {
    this.isRendering = false;
    this.finishRender = false;
    this.endTime = 0
    this.startTime = 0;
    this.rects = []
    this.reset = !this.reset;
  }

  setFinishRender($event: number): void {
    setTimeout(() => {
      this.endTime = performance.now()
      console.log(performance.now())
  }, 0);
  }
  generateRandomColor(): string {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
