import { ImagenesComponent } from './imagenes/imagenes.component';
import { ReportErrorComponent } from './report-error/report-error.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes ,CanActivate} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:TextAreaComponent
  },
  {
    path: 'ReporteErrores',
    component: ReportErrorComponent
  }, 
  {
    path: 'Images-Generadas',
    component: ImagenesComponent
  },
  {
    path: '**',
    component: TextAreaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
