import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-fib-generator',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, HeaderComponent],
  templateUrl: './fib-generator.component.html',
  styleUrl: './fib-generator.component.css'
})
export class FibGeneratorComponent {
  fibonacciSequence: (number | string)[] = [];
  loadingTime: number | null = null;
  startTime: number = 0;
  isCalculating: boolean = false;
  count: number = 10; 

  constructor() { }

  generateFibonacciSequence() {
    this.startTime = performance.now();
    this.isCalculating = true;

    let fib1 = 0, fib2 = 1;
    this.fibonacciSequence = [fib1, fib2];

    for (let i = 2; i < this.count; i++) {
      const nextFib = fib1 + fib2;
      this.fibonacciSequence.push(nextFib.toString());
      fib1 = fib2;
      fib2 = nextFib;
    }

    const endTime = performance.now();
    const loadTime = endTime - this.startTime;
    this.loadingTime = loadTime;
    this.isCalculating = false;
  }

  handleReset() {
    this.fibonacciSequence = [];
    this.loadingTime = null;
  }
}
