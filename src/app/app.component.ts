import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  ngOnInit(): void {
    this.group = this.fb.group({
      firstName: [],
      lastName: [],
      email: [],
      address: this.fb.group({
        addressOne: [],
        addressTwo: []
      })
    });
  }

  save(): void {
    this.group.markAllAsTouched();
    this.group.updateValueAndValidity();
  }
}
