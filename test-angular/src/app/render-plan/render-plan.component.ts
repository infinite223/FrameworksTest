import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { RectComponent } from '../rect/rect.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-render-plan',
  standalone: true,
  imports: [RectComponent, NgFor, NgIf],
  templateUrl: './render-plan.component.html',
  styleUrl: './render-plan.component.css'
})
export class RenderPlanComponent implements AfterViewInit {
  @Input() isRendering: boolean = false;
  @Input() timeRender: number = 0;
  @Input() rects: {id: number; bg: string}[] = [];
  @Input() countRenderRects: number = 0;
  @Input() rectsSize!: number;
  @ViewChildren('rect') rectElements!: QueryList<ElementRef>; // oznaczenie jako niezainicjalizowane

  @Output() setFinishRender: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() {
    // Tutaj możesz zainicjalizować rects
  }

  ngAfterViewInit(): void {
    this.rectElements.changes.subscribe(() => {
      this.setFinishRender.emit(performance.now());
    });
  }
}
