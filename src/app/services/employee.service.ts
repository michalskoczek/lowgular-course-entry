import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
import {ApiResponse} from "./api.response";
import {EmployeeResponseModel} from "../model/employee-response.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponseModel[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<EmployeeResponseModel[]>): PersonModel[] => {
        return response.data.map((employeeResponse: EmployeeResponseModel) => {
          return {
            personalNumber: employeeResponse.id,
            name: employeeResponse.employee_name,
            mail: employeeResponse.employee_name + '@lowgular.io',
            img: employeeResponse.profile_image,
          }
        })
      })
    )
  }

  public create(data: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', data).pipe(map(_ => void 0))
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`).pipe(map(_ => void 0))
  }
}
