import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  group!: FormGroup;

  constructor(private fb: FormBuilder) { }

  get addressGroup(): FormGroup {
    return this.group.controls['address'] as FormGroup<any>;
  }

  get medicalGroup(): FormGroup {
    return this.group.controls['medical'] as FormGroup<any>;
  }

  ngOnInit(): void {
    this.group = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      address: this.fb.group({
        addressOne: [null, [Validators.required]],
        addressTwo: []
      }),
      medical: this.fb.group({
        insuranceProvider: [null, [Validators.required]],
        bloodType: [null, [Validators.required]],
      })
    });
  }

  save(): void {
    this.group.markAllAsTouched();
    this.group.updateValueAndValidity({ emitEvent: true });
  }

  reset(): void {
    this.group.reset();
  }
}
