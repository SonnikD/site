// object.service.ts
import { Injectable } from '@angular/core'; // Импорт Injectable
import { HttpClient } from '@angular/common/http'; // Импорт HttpClient
import { Observable } from 'rxjs'; // Импорт Observable
import { MyObject } from './myobject'; // Импорт MyObject

@Injectable({
  providedIn: 'root' // Сервис может быть внедрен в другие компоненты или сервисы и будет создан единственный экземпляр
})
export class ObjectService {
  private apiUrl = 'http://localhost:4200/objects'; // Объявление приватной переменной apiUrl, содержащей URL-адрес для доступа к объектам
  constructor(private http: HttpClient) { } // Внедрение зависимости HttpClient позволяет сервису ObjectService выполнять HTTP-запросы

  getObjects(): Observable<MyObject[]> { // Метод getObjects, который выполняет GET-запрос по apiUrl и возвращает наблюдаемый объект типа Observable<MyObject[]>
    return this.http.get<MyObject[]>(this.apiUrl);
  }

  getObjectById(id: number): Observable<MyObject> { //  Метод getObjectById, который принимает идентификатор объекта в качестве параметра id и выполняет GET-запрос по URL
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<MyObject>(url);
  }

  createObject(object: MyObject): Observable<MyObject> { // Метод createObject, который принимает объект в качестве параметра object и выполняет POST-запрос по URL 
    return this.http.post<MyObject>(this.apiUrl, object);
  }

  updateObject(object: MyObject): Observable<MyObject> { // Метод updateObject, который принимает объект в качестве параметра object и выполняет PUT-запрос по URL
    const url = `${this.apiUrl}/${object.id}`;
    return this.http.put<MyObject>(url, object);
  }

  deleteObject(id: number): Observable<void> { // Метод deleteObject, который принимает идентификатор объекта в качестве параметра id и выполняет DELETE-запрос по URL
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
