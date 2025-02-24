import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  moduleMetadata,
  componentWrapperDecorator,
  StoryObj,
  Meta,
} from '@storybook/angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WizardsInputComponent } from './input-text.component';

const form = new FormGroup({
  text: new FormControl(null),
});

const meta: Meta<WizardsInputComponent> = {
  title: 'Input',
  component: WizardsInputComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        WizardsInputComponent,
        NzIconModule,
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
    disabled: {
      description: 'Disable input',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    errorIfEmail: {
      description: 'Enable error for mail',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    errorIfShort: {
      description: 'Minimum number of characters required in input',
      control: { type: 'number' },
      table: { type: { summary: 'number' } },
    },
    errorIfToLong: {
      description: 'Maximum number of characters required in input',
      control: { type: 'number' },
      table: { type: { summary: 'number' } },
    },
    fullWidth: {
      description: 'Set class full-width which set width 100% for input',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    label: {
      description: 'Main title',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    placeholder: {
      description: 'Placeholder of input',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    prefix: {
      description: 'Prefix string for the input',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    required: {
      description: 'Set input to required',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    suffix: {
      description: 'Suffix string for the input',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    type: {
      description: 'Type of an input',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
  },
  args: {
    disabled: false,
    errorIfEmail: true,
    errorIfShort: 2,
    errorIfToLong: 8,
    fullWidth: false,
    label: 'Label',
    placeholder: 'placeholder',
    prefix: 'prefix',
    required: false,
    suffix: 'suffix',
    type: 'text',
  },
  render: (args) => ({
    props: args,
    template: `
      <wiz-input-text
        [label]="label"
        controlName="text"
        [disabled]="disabled"
        [required]="required"
        [type]="type"
        [placeholder]="placeholder"
        [prefix]="prefix"
        [suffix]="suffix"
        [fullWidth]="fullWidth"
        [errorIfEmail]="errorIfEmail"
        [errorIfShort]="errorIfShort"
        [errorIfToLong]="errorIfToLong">
        <ng-template #suffix>
          <span nz-icon nzType="info-circle"></span>
        </ng-template>
      </wiz-input-text>
    `,
  }),
};

export default meta;

type Story = StoryObj<WizardsInputComponent>;

export const Primary: Story = {};
