import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { RectComponent } from '../rect/rect.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-render-plan',
  standalone: true,
  imports: [RectComponent, NgFor],
  templateUrl: './render-plan.component.html',
  styleUrl: './render-plan.component.css'
})
export class RenderPlanComponent implements AfterViewInit {
  // @Input() isRendering: boolean = false;
  @Input() timeRender: number = 0;
  @Input() rects: {id: number; bg: string}[] = [];
  @Input() countRenderRects: number = 0;

  @Output() setFinishRender: EventEmitter<number> = new EventEmitter<number>();

  ngAfterViewInit(): void {
    // this.emitSetFinishRender();
    this.setFinishRender.emit(performance.now());
  }

  private emitSetFinishRender(): void {
  }
}
