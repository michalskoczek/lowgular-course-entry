import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {ApiResponse} from "./api.response";
import {EmployeeModel} from "../model/employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getAllEmployee(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeModel[]>>(`https://dummy.restapiexample.com/api/v1/employees`).pipe(
      map((response: ApiResponse<EmployeeModel[]>): EmployeeModel[] => {
        return response.data;
      })
    )
  }
}
