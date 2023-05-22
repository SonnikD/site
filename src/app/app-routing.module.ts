import { NgModule } from '@angular/core'; // Импорт NgModule, используется для создания и настройки модулей
import { RouterModule, Routes } from '@angular/router'; // Импорт RouterModule, Routes, предоставляет функциональность маршрутизации
import { RegistrationFormComponent } from './registration-form/registration-form.component'; // Импорт RegistrationFormComponent
import { LoginFormComponent } from './login-form/login-form.component'; // Импорт LoginFormComponent
import { ObjectListPageComponent } from './object-list-page/object-list-page.component'; // Импорт ObjectListPageComponent
import { ObjectModalComponent } from './object-modal/object-modal.component'; // Импорт ObjectModalComponent

const routes: Routes = [ // Определение массива routes, который содержит объекты маршрутов
  { path: 'registration', component: RegistrationFormComponent }, // Определение маршрута для пути /registration
  { path: 'login', component: LoginFormComponent }, // Определение маршрута для пути /login
  { path: 'create-object', component: ObjectModalComponent }, // Определение маршрута для пути /create-object
  { path: 'objects', component: ObjectListPageComponent }, // Определение маршрута для пути /objects
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Метод устанавливает настройки маршрутизации для приложения
  exports: [RouterModule] // Позволяет другим модулям импортировать и использовать маршрутизацию, предоставляемую этим модулем
})
export class AppRoutingModule { }
