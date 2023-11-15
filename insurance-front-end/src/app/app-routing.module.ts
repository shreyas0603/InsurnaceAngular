import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { AgentComponentComponent } from './agent-component/agent-component.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultPageComponent
  },
  {
    path:'Agent',
    component:AgentComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
