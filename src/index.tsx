import { createRoot } from 'react-dom/client';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import App from 'src/App';

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require, @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
  const axe = require('@axe-core/react').default;

  const config = {
    rules: [
      {
        id: 'radiogroup',
        enabled: true,
      },
    ],
  };

  console.log(axe);
  axe(React, ReactDOM, 1000, config);
}

export interface RenderProps {
  Comp: FC;
}

export type TRender = (props: RenderProps) => void;

interface PropsWrapRoot {
  children: React.ReactNode;
}

export const WrapRoot: FC<PropsWrapRoot> = ({ children }) => {
  return <div id="wrap">{children}</div>;
};

export const render: TRender = ({ Comp }) => {
  const container = document.getElementById('root') || document.createElement('div');
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const root = createRoot(container!); // createRoot(container!) if you use TypeScript
  root.render(
    <WrapRoot>
      <React.StrictMode>
        <Comp />
      </React.StrictMode>
    </WrapRoot>
  );
};

render({ Comp: App });

if (module?.hot) {
  module.hot.accept();
}

export default {};
