import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeFormModel} from "../../model/employee-form.model";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  public onAdd(data: EmployeeFormModel): void {
    this._employeeService.addEmployee(data).subscribe(_ => alert(`Employee ${data.name} added succesfully`))
  }
}
