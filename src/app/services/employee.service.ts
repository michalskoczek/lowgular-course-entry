import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {PersonModel} from "../model/person.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  public getAll(): Observable<PersonModel[] | null> {
    return this._httpClient.get<PersonModel[] | null>('assets/data/people.json');
  }
}
