import * as React from 'react';

const mock = (props: { children: React.ReactElement }): React.ReactElement => {
  return <>{props.children}</>;
};

export default mock;
