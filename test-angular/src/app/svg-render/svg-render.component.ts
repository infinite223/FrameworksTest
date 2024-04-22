import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-svg-render',
  standalone: true,
  imports: [HeaderComponent, NgIf],
  templateUrl: './svg-render.component.html',
  styleUrl: './svg-render.component.css'
})
export class SvgRenderComponent {
  loadingTime: number | null = null;
  startTime: number = 0;
  isRender: boolean = false;

  constructor() { }

  handleLoad() {
    console.log("end");
    const endTime = performance.now();
    const loadTime = endTime - this.startTime;
    this.loadingTime = loadTime;
  }

  startLoadingTimer() {
    this.startTime = performance.now();
    this.isRender = true;
  }

  handleReset() {
    this.startTime = 0;
    this.isRender = false;
    this.loadingTime = null;

    setTimeout(() => {
      this.startLoadingTimer();
    }, 0);
  }
}
