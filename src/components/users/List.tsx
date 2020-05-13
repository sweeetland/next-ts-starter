import * as React from 'react';

import { User } from '../../types';
import ListItem from './ListItem';

type Props = {
  items: User[];
};

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
