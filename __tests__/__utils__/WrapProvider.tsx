import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}
const WrapProvider: FC<Props> = ({ children }) => <div id="someProviderGoesHere">{children}</div>;

export default WrapProvider;
