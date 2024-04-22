import { Routes } from '@angular/router';
import { MicroComponentsComponent } from './micro-components/micro-components.component';
import { SvgRenderComponent } from './svg-render/svg-render.component';
import { FibGeneratorComponent } from './fib-generator/fib-generator.component';

export const routes: Routes = [
    { path: 'micro-components', component: MicroComponentsComponent },
    { path: 'svg-render', component: SvgRenderComponent },
    { path: 'fib-generator', component: FibGeneratorComponent },
  ];
