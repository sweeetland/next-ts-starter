import Link from 'next/link';
import * as React from 'react';

import { User } from '../../types';

type Props = {
  data: User;
};

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
