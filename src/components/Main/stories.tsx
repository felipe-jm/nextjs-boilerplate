import { withKnobs, text } from '@storybook/addon-knobs';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
};

export const Basic = () => (
  <Main
    title={text('Title', 'Next.js')}
    description={text(
      'Description',
      'Typescript, React.js, Next.js and Styled Components'
    )}
  />
);
