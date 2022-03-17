import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceI } from '../interface/service.interface';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  serviceURL = 'http://localhost:8080/service';

  constructor(private http: HttpClient) {}

  //post crea un service
  public create(service: Service): Observable<any> {
    return this.http.post<any>(this.serviceURL, service);
  }

  //obtener un service
  public findById(id: number): Observable<any> {
    return this.http.get<any>(this.serviceURL + '/' + id);
  }

  delete(id: number): Observable<any> {
    console.log('service del service', id);
    return this.http.delete<any>(this.serviceURL + '/' + id);
  }

  getAllByUserId(id: number): Observable<any> {
    return this.http.get<any>(this.serviceURL + '/user/' + id);
  }

  update(id: number, service: ServiceI): Observable<any> {
    return this.http.put<any>(this.serviceURL + '/' + id, service);
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.serviceURL + '/list');
  }
}
