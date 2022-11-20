import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {EmployeeModel} from "../model/employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  public getAll(): Observable<EmployeeModel[] | null> {
    return this._httpClient.get<EmployeeModel[] | null>('assets/data/employees.json');
  }
}
