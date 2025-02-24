import {
  moduleMetadata,
  componentWrapperDecorator,
  Meta,
  StoryObj,
} from '@storybook/angular';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardsDatepickerComponent } from './datepicker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';
import { NZ_DATE_LOCALE, NZ_I18N, pl_PL } from 'ng-zorro-antd/i18n';
import { pl as PL } from 'date-fns/locale';

registerLocaleData(localeZh);

const form = new FormGroup({
  text: new FormControl(null),
});

const meta: Meta<WizardsDatepickerComponent> = {
  title: 'Datepicker',
  component: WizardsDatepickerComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        WizardsDatepickerComponent,
        NzIconModule,
        BrowserAnimationsModule,
        NzDatePickerModule,
        CommonModule,
      ],
      providers: [
        { provide: NZ_DATE_LOCALE, useValue: 'pl-PL' },
        { provide: NZ_I18N, useValue: pl_PL },
        { provide: NZ_DATE_LOCALE, useValue: PL },
      ],
    }),
    componentWrapperDecorator(
      (story) => `
        <div [formGroup]="form">
          ${story}
        </div>
      `,
      { form },
    ),
  ],
  argTypes: {
    dateFormat: {
      description: 'Format of the date',
      control: { type: 'object' },
      table: { type: { summary: 'string' } },
    },
    disabled: {
      description: 'Disable input for date',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    fullWidth: {
      description: 'Set class full-width which set width 100% for date input',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    label: {
      description: 'Main title of input, also placeholder',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    nzDisabledDate: {
      description: 'Function that disable specific dates in datepicker',
    },
    required: {
      description: 'Set input to required',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
  },
  args: {
    dateFormat: 'dd.MM.yyy',
    disabled: false,
    fullWidth: true,
    label: 'Testowanie datepickera',
    nzDisabledDate: (current: Date): boolean => {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      return current.getTime() < currentDate.getTime();
    },
    required: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <wiz-datepicker
        [label]="label"
        controlName="text"
        [disabled]="disabled"
        [required]="required"
        [fullWidth]="fullWidth"
        [dateFormat]="dateFormat"
        [nzDisabledDate]="nzDisabledDate">
      </wiz-datepicker>
    `,
  }),
};

export default meta;

type Story = StoryObj<WizardsDatepickerComponent>;

export const Primary: Story = {};
