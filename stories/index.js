import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Dropdown from '../src/Dropdown';

storiesOf('Dropdown', module)
  .add('default', () => {
    const items = [
      { text: 'Apples', children: [
        { text: 'Fuji' },
        { text: 'Gala' },
        { separator: true },
        { text: 'Cameo', children: [
          { header: true, text: 'Sizes' },
          { text: 'Small' },
          { text: 'Medium' },
          { text: 'Large' }
        ] }
      ] },
      { text: 'Bananas', disabled: true },
      { text: 'Kiwi' }
    ];

    return <Dropdown items={items} />;
  });
