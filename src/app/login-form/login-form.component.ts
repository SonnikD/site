import { Component, Output, EventEmitter } from '@angular/core'; // Импорт Component и декораторы Output и EventEmitter
import { trigger, state, style, transition, animate } from '@angular/animations'; // Импорт функций и декораторов, используются для создания анимаций
import { HttpClient } from '@angular/common/http'; // Импорт HttpClient, предоставляет возможность выполнения HTTP-запросов
import { NotificationService } from '../notification-service.service'; // Импорт NotificationService, предоставляет функциональность для отображения уведомлений
import { AuthService } from '../auth-service.service'; // Импорт AuthService, предоставляет функциональность для аутентификации и авторизации пользователей

interface ResponseData { // Объявление интерфейса
  time: number; // Свойство time с типом number
}


@Component({ // Декоратор, который указывает на определение компонента
  selector: 'app-login-form', // Cелектор компонента, который используется для его идентификации в шаблонах
  templateUrl: './login-form.component.html', // Путь к шаблону компонента, который определяет его внешний вид и разметку
  styleUrls: ['./login-form.component.css'], // Путь к файлу стилей компонента 
  //Анимация для плавных переходов и анимаций 
  animations: [ // Массив анимаций, применяемых к компоненту
    trigger('transitionMessages', [ // Объявление анимации с именем transitionMessages
      state('void', style({ opacity: 0, transform: 'translateY(-100%)' })), // Объявление состояния анимации с именем void, задаются стили
      transition(':enter', [ // Объявление перехода анимации с именем enter
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })), // Объявление анимации с использованием функции animate, задается продолжительность анимации и стили
      ]),
      transition(':leave', [ // Объявление перехода анимации с именем leave, его стили
        animate('300ms', style({ opacity: 0, transform: 'translateY(-100%)' })), // Объявление анимации с использованием функции animate
      ]),
    ]),
  ],
})
export class LoginFormComponent { // Экспорт класса LoginFormComponent
  email: string = ''; // Объявление строковой переменной email
  password: string = ''; // Объявление строковой переменной password

  @Output() switchToRegistration: EventEmitter<void> = new EventEmitter<void>(); // Объявления события switchToRegistration, создание экземпляра класса EventEmitter  для обработки событий без передачи данных  

  constructor( // Объявление конструктора компонента с внедрением зависимостей
    private http: HttpClient, // Добавлено внедрение зависимости HttpClient
    private notificationService: NotificationService, // Добавлено внедрение зависимости NotificationService
    private authService: AuthService // Добавлено внедрение зависимости AuthService
    ) {}

  login() { // Объявление метода login, который будет вызываться при отправке формы входа
    //отладка
    console.log('Отпралвена форма для входа в систему');
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    this.getData(); // Вызов метода, которые запрашивает данные на сервер
    const time = 10; // Пример времени получения данных
    this.notificationService.showDataReceivedMessage(time); // Вызов метода showDataReceivedMessage() из сервиса notificationService для отображения уведомления о получении данных
  }

  getData() { // Метод запроса данных на сервер
    const startTime = new Date().getTime(); // Запомнить время начала запроса
    const token = this.authService.getToken(); // Вызов метода getToken() из сервиса authService для получения токена
    if (token) { // Проверка, если токен существует
      this.http.post<ResponseData>('http://localhost:4200/check-token', { token }).subscribe( // Отправка POST-запроса на указанный URL с передачей объекта token в качестве данных запроса
        (response) => {
          const endTime = new Date().getTime(); // Запомнить время окончания запроса
          const elapsedTime = (endTime - startTime) / 1000; // Вычислить прошедшее время в секундах
          this.notificationService.showDataReceivedMessage(elapsedTime); // Передать прошедшее время в оповещение
        },
        (error) => { // Функция обратного вызова, которая выполняется при возникновении ошибки при запросе
          console.error(error); // Вывод ошибки в консоль для отладки
        }
      );
    } else {
      console.error('Токен отсутствует'); // вывод сообщения "Токен отсутствует" в консоль
    }
  }
  saveData() {
    // Сохранение данных на сервере
    const id = 356; // Пример значения ID
    this.notificationService.showDataSavedMessage(id);
  }

  updateData() {
    // Обновление данных на сервере
    this.notificationService.showDataUpdatedMessage();
  }

  deleteData() {
    // Удаление данных на сервере
    this.notificationService.showDataDeletedMessage();
  }
}