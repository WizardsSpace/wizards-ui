import {
  moduleMetadata,
  StoryObj,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { WizardsInputNumberComponent } from './input-number.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const form = new FormGroup({
  text: new FormControl(null),
});

const meta: Meta<WizardsInputNumberComponent> = {
  title: 'InputNumber',
  component: WizardsInputNumberComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        WizardsInputNumberComponent,
        NzIconModule,
        BrowserAnimationsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `
        <div [formGroup]="form">
          ${story}
        </div>
      `,
      { form: form },
    ),
  ],
  argTypes: {
    disabled: {
      description: 'Disable input',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    fullWidth: {
      description: 'Set class full-width which set width 100% for number input',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    label: {
      description: 'Main title',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    max: {
      description: 'Maximal number of input',
      control: { type: 'number' },
      table: { type: { summary: 'number' } },
    },
    min: {
      description: 'Minimal number of input',
      control: { type: 'number' },
      table: { type: { summary: 'number' } },
    },
    placeholder: {
      description: 'Placeholder of input',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    precision: {
      description: 'Precision of input value',
      control: { type: 'number' },
      table: { type: { summary: 'number' } },
    },
    required: {
      description: 'Set input to required',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    step: {
      description:
        'The number to which the current value is increased or decreased',
      control: { type: 'number' },
      table: { type: { summary: 'number' } },
    },
  },
  args: {
    disabled: false,
    fullWidth: true,
    label: 'testowanie labela',
    max: 100000000,
    min: 0,
    placeholder: 'placeholder',
    precision: 2,
    required: false,
    step: 1,
  },
  render: (args) => ({
    props: args,
    template: `
      <wiz-input-number
        [label]="label"
        controlName="text"
        [required]="required"
        [disabled]="disabled"
        [allowSearch]="allowSearch"
        [min]="min"
        [max]="max"
        [step]="step"
        [precision]="precision"
        [placeholder]="placeholder"
        [fullWidth]="fullWidth">
      </wiz-input-number>
    `,
  }),
};

export default meta;

type Story = StoryObj<WizardsInputNumberComponent>;

export const Primary: Story = {};
