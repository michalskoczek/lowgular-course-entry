import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {CreateEmployeeModel} from "../model/create-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  public getAll(): Observable<PersonModel[] | null> {
    return this._httpClient.get<PersonModel[] | null>('assets/data/people.json');
  }

  public create(data: CreateEmployeeModel): Observable<CreateEmployeeModel> {
    return this._httpClient.post<CreateEmployeeModel>('https://dummy.restapiexample.com/api/v1/create', data)
  }
}
