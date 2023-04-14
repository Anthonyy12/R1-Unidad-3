import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ListadoEventosComponent } from './components/listado-eventos/listado-eventos.component';
import { EventosComponent } from './components/eventos/eventos.component';

const routes: Routes = [
  { path: '', component: ListadoEventosComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  {path:'eventos', component: EventosComponent},
  { path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
