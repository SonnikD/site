import { Component, Output, EventEmitter } from '@angular/core'; // Импорт Component, Output, EventEmitter
import { Router } from '@angular/router'; // Импорт Router, используется для навигации между различными компонентами и маршрутами

@Component({
  selector: 'app-registration-form', // Селектор компонента
  templateUrl: './registration-form.component.html', // Путь к шаблону компонента, который будет использоваться для отображения содержимого компонента
  styleUrls: ['./registration-form.component.css'] // Путь к файлу стилей компонента
})
export class RegistrationFormComponent { // Экспорт класса RegistrationFormComponent
  email: string = ''; // Объявление свойства email с типом string и инициализацией пустой строки
  password: string = ''; // Объявление свойства password с типом string и инициализацией пустой строки

  @Output() switchToLogin: EventEmitter<void> = new EventEmitter<void>(); //  Объявление свойства switchToLogin с типом EventEmitter<void> и инициализацией нового экземпляра EventEmitter
  constructor(private router: Router) {} // Конструктор принимает параметр router с типом Router и сохраняет его в приватное свойство router

  navigateToCreateObject() { // Метод, который вызывается при клике на кнопку "Создать объект" в шаблоне
    this.router.navigateByUrl('/create-object'); // router для перенаправления пользователя на маршрут "/create-object"
  }

  register() { // Вызывается при отправке формы регистрации, вывод в консоль данные
    console.log('Отправлена регистрационная форма');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
