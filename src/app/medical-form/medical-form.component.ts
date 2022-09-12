import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface BloodType {
  value: string;
  label: string;
}

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.scss']
})
export class MedicalFormComponent implements OnInit {
  @Input() medicalGroup!: FormGroup;

  bloodTypes: BloodType[] = [
    { value: 'a+', label: 'A+' },
    { value: 'a-', label: 'A-' },
    { value: 'b+', label: 'B+' },
    { value: 'b+', label: 'B-' },
    { value: 'o+', label: 'O+' },
    { value: 'o+', label: 'O-' },
    { value: 'ab+', label: 'AB+' },
    { value: 'ab-', label: 'AB-' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
