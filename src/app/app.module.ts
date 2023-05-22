import { NgModule } from '@angular/core';// Импорт NgModule
import { BrowserModule } from '@angular/platform-browser'; // Импорт BrowserModule

import { HttpClientModule } from '@angular/common/http'; // Импорт HttpClientModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Импорт BrowserAnimationsModule
import { MatInputModule } from '@angular/material/input'; // Импорт MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Импорт MatButtonModule
import { AppRoutingModule } from './app-routing.module'; // Импорт AppRoutingModule
import { AppComponent } from './app.component'; // Импорт AppComponent
import { LoginFormComponent } from './login-form/login-form.component'; // Импорт LoginFormComponent
import { RegistrationFormComponent } from './registration-form/registration-form.component'; // Импорт RegistrationFormComponent
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Импорт FormsModule, ReactiveFormsModule
import { AuthService } from './auth-service.service'; // Импорт AuthService
import { NotificationService } from './notification-service.service'; // Импорт NotificationService
import { ObjectListPageComponent } from './object-list-page/object-list-page.component'; // Импорт ObjectListPageComponent
import { ObjectModalComponent } from './object-modal/object-modal.component'; // Импорт ObjectModalComponent
import { ObjectService } from './myobject.service'; // Импорт ObjectService
import { MatTableModule } from '@angular/material/table'; // Импорт MatTableModule



@NgModule({
  declarations: [ //  Список компонентов, сервисов, которые принадлежат этому модулю
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    ObjectListPageComponent,
    ObjectModalComponent
  ],
  imports: [ // Модули предоставляют функциональность, которая будет использоваться внутри модуля
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatTableModule ,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AuthService, NotificationService, ObjectService], // Список сервисов, которые будут доступны внутри модуля
  bootstrap: [AppComponent] // Определяет корневой компонент, который будет использоваться при запуске приложения
})
export class AppModule { } // Экспорт класса AppModule, который представляет данный модуль
