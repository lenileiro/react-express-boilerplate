import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';

import App from '../src/App';

const UrlRender = (url: any, data: Object) => {
  const markup = renderToString(
    <StaticRouter location={url} context={data}>
      <App />
    </StaticRouter>,
  );
  return markup;
};

export default UrlRender;
