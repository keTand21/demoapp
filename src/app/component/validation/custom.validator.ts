import { AbstractControl } from '@angular/forms';
import { FormControl, Validators, ValidatorFn, FormGroup } from '@angular/forms';

export class CustomValidator extends Validators {


    static email(control: FormControl) {
        // tslint:disable-next-line:max-line-length
        const regex = /^(([^<>\-()\~|`\#\=\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,4}))$/;
        if (control.value && !regex.test(control.value)) {
            return { pattern: true };
        }return null;
    }
    

    }
 








