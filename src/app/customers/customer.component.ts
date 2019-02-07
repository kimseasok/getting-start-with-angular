import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';

import { Customer } from './customer';

function ValiateRank(min: number, max: number): ValidatorFn {
  return (ctler: AbstractControl): { [key: string]: boolean } | null => {
    if (
      ctler.value !== null &&
      (isNaN(ctler.value) || ctler.value < 1 || ctler.value > 5)
    ) {
      return { range: true };
    }
    return null;
  };
}

function validateConfirmEmail(
  ctler: AbstractControl
): { [key: string]: boolean } | null {
  const emailControl = ctler.get('email');
  const confirmEmailControl = ctler.get('confirmEmail');

  if (emailControl.pristine || confirmEmailControl.pristine) {
    return null;
  }

  if (emailControl.value !== confirmEmailControl.value) {
    return { mismatch: true };
  }
  return null;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', Validators.required]
        },
        { validator: validateConfirmEmail }
      ),
      phone: '',
      notification: 'email',
      rating: ['', ValiateRank(1, 5)],
      sendCatalog: true
    });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  // populate data to the form form.
  // All field require for using setValue
  populateTestData(): void {
    this.customerForm.setValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      email: 'jack@torchwood.com',
      phone: '',
      notification: 'email',
      sendCatalog: true
    });
  }

  updateFirstName(): void {
    this.customerForm.patchValue({
      firstName: 'Kimsea'
    });
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }

    phoneControl.updateValueAndValidity();
  }
}
