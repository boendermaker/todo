import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoMainComponent } from './views/todo-main/todo-main.component';

import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';
import { TodoListingComponent } from './components/todo-listing/todo-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoMainComponent,
    TodoListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
