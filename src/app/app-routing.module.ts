import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';
import { PaisesComponent } from './components/paises/paises.component';

const routes: Routes = [
  {path: 'virtual', component: VirtualComponent},
  {path: 'drag', component: DragComponent},
  {path: 'paises', component: PaisesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'virtual'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
