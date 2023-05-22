import { Component } from '@angular/core'; // Импорт декоратора Component

@Component({
  selector: 'app-root', // Селектор компонента
  templateUrl: './app.component.html', // Путь к HTML-шаблону компонента
  styleUrls: ['./app.component.css'] //  Пути к CSS-файлам
})
export class AppComponent { //  Экспорт класса AppComponent, который определяет логику и поведение компонента
  showLogin = false; // Используется для управления отображением формы входа
  currentForm: 'login' | 'registration' = 'registration'; // Определяет текущую активную форму, изначально установлено значение registration

  showLoginForm() { // Метод вызывается, когда нужно отобразить форму входа
    this.showLogin = true;
  }
}
