import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './Core/todo-list/todo-list.component';
import { ProductsComponent } from './Core/products/products.component';
import { UsersComponent } from './Core/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ProductsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
