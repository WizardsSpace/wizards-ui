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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WizardsErrorMessageComponent } from './error-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const form = new FormGroup({
  text: new FormControl(null),
});

const meta: Meta<WizardsErrorMessageComponent> = {
  title: 'Message',
  component: WizardsErrorMessageComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        WizardsErrorMessageComponent,
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
      { form },
    ),
  ],
  argTypes: {
    message: {
      description: 'Message inside alert',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    type: {
      description: 'Type of a message',
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
      table: { type: { summary: 'string' } },
    },
  },
  args: {
    message: 'Alert message',
    type: 'error',
  },
  render: (args) => ({
    props: args,
    template: `
      <wiz-error-message
        [type]="type"
        [message]="message">
      </wiz-error-message>
    `,
  }),
};

export default meta;

export const Primary: StoryObj<WizardsErrorMessageComponent> = {};
