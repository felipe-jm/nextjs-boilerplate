import { withKnobs, text } from '@storybook/addon-knobs';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
};

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'Typescript, ReactJS, NextJS e Styled Components'
    )}
  />
);
