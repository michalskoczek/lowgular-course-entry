import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EmployeeModel} from '../model/employee.model';
import {ApiResponse} from './api.response';
import {EmployeeFormModel} from '../model/employee-form.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  public getAllEmployee(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeModel[]>>(`https://dummy.restapiexample.com/api/v1/employees`).pipe(
      map((response: ApiResponse<EmployeeModel[]>): EmployeeModel[] => {
        return response.data;
      })
    )
  }

  public deleteEmployee(id: string): Observable<void> {
    return this._httpClient.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`).pipe(map(_ => void 0));
  }

  public addEmployee(data: EmployeeFormModel): Observable<void> {
    return this._httpClient.post<EmployeeFormModel>(`https://dummy.restapiexample.com/api/v1/create`, data).pipe(map(_ => void 0))
  }

  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<ApiResponse<EmployeeModel>>(`https://dummy.restapiexample.com/api/v1/employee/${id}`).pipe(
      map((response: ApiResponse<EmployeeModel>): EmployeeModel => ({
        id: response.data.id,
        employee_name: response.data.employee_name,
        profile_image: response.data.profile_image,
        employee_salary: '',
        employee_age: ''
      }))
    );
  }
}
