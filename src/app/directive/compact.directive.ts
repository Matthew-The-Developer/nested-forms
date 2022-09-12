import { AfterViewInit, Directive, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Directive({
  selector: '[compact]',
})
export class CompactDirective implements OnInit, AfterViewInit, OnChanges {
  private element!: ElementRef;
  private input!: FormControlName;

  constructor(
    private matformfield: MatFormField,
  ) { }

  ngOnInit(): void {
    this.element = this.matformfield._elementRef;

    this.element.nativeElement.classList.add('compactable');
    this.element.nativeElement.classList.add('compact');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewInit(): void {
    this.input = (this.matformfield._control.ngControl as FormControlName);

    console.log(this.matformfield._control);
    
    this.element.nativeElement.querySelector('input, mat-select').addEventListener('blur', this.updateCompact);
    
    this.matformfield._control.stateChanges.subscribe(this.updateCompact);
    this.input.control.valueChanges.subscribe(this.updateCompact);
  }
 
  private updateCompact = () => {
    if (this.input.touched && this.input.errors != null) {
      this.element.nativeElement.classList.remove('compact');
    } else {
      this.element.nativeElement.classList.add('compact');
    }
  }
}
