import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../model/info';
import { Requestmodel } from '../model/requestmodel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  openData!: Requestmodel;
  closeData!: Requestmodel;
  resolveData!: Requestmodel;
  background!: string;
  requestDatas!: Requestmodel;
  constructor(private http: HttpClient) { }

  // http call for open request users
  public getUserOpenrequests(page: number, adminDepartment: string): Observable<Requestmodel> {
    return this.http.get<Requestmodel>(`http://localhost:8080/api/requests/${page}/10/${adminDepartment}/${"Requested"}`)
  }

  // http call for request resolved users
  public getUserResolveRequests(page: number, adminDepartment: string): Observable<Requestmodel> {
    return this.http.get<Requestmodel>(`http://localhost:8080/api/requests/${page}/10/${adminDepartment}/${"Resolved"}`)

  }

  // http  call for closed request users

  public getUserCloseRequests(page: number, adminDepartment: string): Observable<Requestmodel> {
    return this.http.get<Requestmodel>(`http://localhost:8080/api/requests/${page}/10/${adminDepartment}/${"Closed"}`)

  }

  // http call to resolve the requests
  public resolveUserRequest(id: string, data: Requestmodel): Observable<Requestmodel> {
    return this.http.put<Requestmodel>(`http://localhost:8080/api/resolve/${id}`, data)
  }


  // http call to reassign the requests
  public reassignUserRequest(id: string, data: Requestmodel): Observable<Requestmodel> {
    return this.http.put<Requestmodel>(`http://localhost:8080/api/reassign/${id}`, data)
  }

  //http call to save the reassigned data

  public saveReassignedData(data: Info): Observable<Info> {
    return this.http.post<Info>(`http://localhost:8080/api/inforequest`, data)
  }
  // http call to get the reassigned data

  public getReassignedData(id: string): Observable<Info[]> {
    return this.http.get<Info[]>(`http://localhost:8080/api/reassigned/${id}`)
  }

  // to send data to user request resolve component
  requestedData(data: Requestmodel) {
    this.openData = data;
  }

  // to send data to user request closed component
  closedData(data: Requestmodel) {
    this.closeData = data;
  }

  // to send data to user request resolved component
  resolvedData(data: Requestmodel) {
    this.resolveData = data;
  }


}
