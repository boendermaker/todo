import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './services/header.interceptor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoMainComponent } from './views/todo-main/todo-main.component';

import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';
import { TodoListingComponent } from './components/todo-listing/todo-listing.component';
import { WinCreateComponent } from './components/win-create/win-create.component';
import { WinEditComponent } from './components/win-edit/win-edit.component';
import { WinViewComponent } from './components/win-view/win-view.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoMainComponent,
    TodoListingComponent,
    WinCreateComponent,
    WinEditComponent,
    WinViewComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
      ApiService, 
      StoreService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AddHeaderInterceptor,
        multi: true,
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
