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
import { WizardsCheckboxComponent } from './checkbox.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

const form = new FormGroup({
  text: new FormControl(null),
});

const meta: Meta<WizardsCheckboxComponent> = {
  title: 'Checkbox',
  component: WizardsCheckboxComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        WizardsCheckboxComponent,
        NzIconModule,
        BrowserAnimationsModule,
        NzCheckboxModule,
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
      description: 'Disable the checkbox',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' } },
    },
    label: {
      description: 'Main label next to checkbox',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    ngModel: {
      description: 'ngModel can be used instead of controlName',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
  },
  args: {
    disabled: false,
    label: 'Checkbox',
    ngModel: 'string',
  },
  render: (args) => ({
    props: args,
    template: `
      <wiz-checkbox
        [label]="label"
        controlName="text"
        [disabled]="disabled">
      </wiz-checkbox>
    `,
  }),
};

export default meta;

type Story = StoryObj<WizardsCheckboxComponent>;

export const Primary: Story = {
  args: {
    disabled: false,
    label: 'Testowanie checkboxa',
    ngModel: '',
  },
};
