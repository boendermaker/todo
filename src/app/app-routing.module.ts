import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoMainComponent } from './components/todo-main/todo-main.component';

const routes: Routes = [
    { path: '', component: TodoMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
