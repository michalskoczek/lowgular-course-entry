import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) { }

  public employees$ = this._employeeService.getAllEmployee();

  public onDeleteEmployee(id: string, name: string): void {
    this._employeeService.deleteEmployee(id).subscribe(_ => alert(`Employee ${name} deleted successfully`));
  }
}
