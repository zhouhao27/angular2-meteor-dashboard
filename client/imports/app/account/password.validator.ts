import { FormGroup } from '@angular/forms';

export class PasswordValidator {
  static passwordMatch(group: FormGroup) {
    let password = group.controls['password'].value;
    let repeat = group.controls['repeat'].value;

    // If either of these fields is empty, the validation
    // will be bypassed. We expect the required validator to be
    // applied first.
    if (password === '' && repeat === '') {
      return null;
    }

    if (password != repeat) {
      return { passwordsShouldMatch: true };
    }

    return null;
  }
}
