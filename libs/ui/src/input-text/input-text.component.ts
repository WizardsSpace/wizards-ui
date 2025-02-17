import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AddHTMLAttributeDirective } from './attribute.directive';

@Component({
  standalone: true,
  imports: [
    AddHTMLAttributeDirective,
    CommonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})

export class WizardsInputComponent {
  @Input() controlName!: string;
  @Input() disabled = false;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() required = false;
  @Input() type = 'text';
  @Input() prefix?: string;
  @Input() suffix?: string;
  @Input() fullWidth? = true
  @Input() inputSize: 'large' | 'small' | 'default' = 'default'
  @Input() cy?: string;
  @Input() errorIfEmail = false;
  @Input() errorIfShort?: number;
  @Input() errorIfToLong?: number;

  constructor(public controlContainer: ControlContainer) { }
}
