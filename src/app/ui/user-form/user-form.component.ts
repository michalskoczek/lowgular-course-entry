import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    age: new FormControl(),
    salary: new FormControl() });

  public onSubmit(data: {email: string, age: number, salary: number}) {
    alert(`User was successfully added to the database. Email: ${data.email}, age: ${data.age}, salary: ${data.salary}`)
  }
}
