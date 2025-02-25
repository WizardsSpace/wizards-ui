import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
} from '@angular/core';
import {
  ControlContainer,
  FormGroupName,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

interface SelectOptions {
  label: string | number | null;
  value: string | number | boolean | null;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-nested-select-input',
  templateUrl: './nested-select-input.component.html',
  styleUrls: ['./nested-select-input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }],
})
export class WizardsNestedSelectComponent {
  @Input() allowClear = false;
  @Input() allowSearch = false;
  @Input() controlName!: string;
  @Input() disabled = false;
  @Input() fullWidth = true;
  @Input() label!: string;
  @Input() mode: 'multiple' | 'tags' | 'default' = 'default';
  @Input() options: SelectOptions[] = [];
  @Input() placeholder!: string;
  @Input() required = false;
  @Input() showArrow = true;
  @Output() changed = new EventEmitter();

  constructor(@Optional() public controlContainer: ControlContainer) {}

  onChangeEmitter(event: any): void {
    this.changed.emit(event);
  }
}
