import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import {CreateEmployeeModel} from "../../model/create-employee.model";
import {map} from "rxjs";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  constructor(private _employeeService: EmployeeService) {
  }

  public onFormSubmitted(data: CreateEmployeeModel): void {
    this._employeeService.create(data).pipe(
      map((r: any) => r.data)
    ).subscribe(user => {
      alert(`User was successfully added to the database. Name: ${user.name}, age: ${user.age}, salary: ${user.salary}`)
    })
  }
}
