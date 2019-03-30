import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import GitHubCard from '../src/components/UI/cards/GitHub';
import ReadDocs from '../src/components/UI/cards/readDocs';
import DummyCard from '../src/components/UI/cards/DummyCard';
import DiagnosisCard from '../src/components/UI/cards/DiagnosisCard';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('Button test', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Card', module)
.add('GitHubCard', () => <GitHubCard/>)
.add('readDocsCard', () => <ReadDocs/>)
.add('DummyCard', () => <DummyCard/>)
.add('DiagnosisCard', () => <DiagnosisCard/>)
