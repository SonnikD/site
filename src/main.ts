import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Импорт platformBrowserDynamic

import { AppModule } from './app/app.module'; // Импорт AppModule


platformBrowserDynamic().bootstrapModule(AppModule) // Функция, которая создает экземпляр платформы для запуска приложения в браузере
  .catch(err => console.error(err)); // Вывод ошибок в консоль
