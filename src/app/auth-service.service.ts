import { Injectable } from '@angular/core'; // Импорт Injectable
import { HttpClient } from '@angular/common/http'; // Импорт HttpClient

@Injectable({
  providedIn: 'root' // AuthService может быть внедрен в другие компоненты или сервисы и будет создан единственный экземпляр
})
export class AuthService { //
  private jwtToken: string = ""; // Свойство будет содержать JWT-токен пользователя
  private tokenCheckUrl: string = 'http://localhost:4200/check-token'; // Адрес эндпоинта для проверки токена

  constructor(private http: HttpClient) {} 

  login(email: string, password: string) { // Метод выполняет процесс аутентификации пользователя
    this.http.post<any>('http://localhost:4200/login', { email, password }).subscribe(response => { // Выполнение POST-запроса по URL-адресу с передачей объекта, содержащего email и password
      const token = response.token; // Извлечение токена из объекта ответа сервера
      console.log('Received token:', token); // Добавлен вывод токена в консоль
      this.saveToken(token); // Вызов метода saveToken для сохранения полученного токена
    });
  }

  register(email: string, password: string) { // Метод выполняет процесс регистрации пользователя
    this.http.post<any>('http://localhost:4200/register', { email, password }).subscribe(response => { // Выполнение POST-запроса по URL-адресу с передачей объекта, содержащего email и password
      const token = response.token; // Извлечение токена из объекта ответа сервера
      console.log('Received token:', token); // Добавлен вывод токена в консоль
      this.saveToken(token); // Вызов метода saveToken для сохранения полученного токена
    });
  }

  logout() { // logout вызывает метод clearToken для удаления сохраненного токена
    this.clearToken();
  }

  saveToken(token: string) { // Метод принимает token в качестве аргумента и сохраняет его в свойство jwtToken
    this.jwtToken = token;
  }

  clearToken() { // Метод очищает значение свойства jwtToken, устанавливая его в пустую строку
    this.jwtToken = "";
  }

  getToken(): string { // Метод возвращает текущее значение свойства jwtToken
    return this.jwtToken;
  }
  async checkAuthorization(): Promise<boolean> { // Выполняет проверку авторизации пользователя
    const token = this.getToken(); // Получение текущего значения токена

    if (token) { // Проверка, существует ли токен
      try { // Обработка ошибки при выполнении запроса
        const response = await this.http.post<any>(this.tokenCheckUrl, { token }).toPromise(); //  Выполнение POST-запроса по URL-адресу с передачей объекта, содержащего токен
        if (response.valid) { // Проверка свойства valid в объекте response
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error(error); // Вывод ошибки в консоль в случае возникновения ошибки при выполнении запроса
        return false;
      }
    } else {
      return false;
    }
  }
}
