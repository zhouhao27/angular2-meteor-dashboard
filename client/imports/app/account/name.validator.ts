import { FormControl } from '@angular/forms';

export class UsernameValidators {

  // async validator
  // TODO: to server
  static shouldBeUnique(control : FormControl) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
          if (control.value === 'zhouhao') {
            resolve({
              shouldBeUnique: true  // error
            })
          } else {
            resolve(null)
          }
        }, 2000);
    })
  }

  static noSpace(control: FormControl) {
    if ( control.value.indexOf(' ') >= 0) {
      return {
        noSpaceAllowed : true
      }
    }
    return null;  //valid
  }
}
