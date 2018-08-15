const express = require('express');
const next = require('next');
const mobxReact = require('mobx-react');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });
  /* eslint-disable no-console */
  server.listen(port, err => {
    if (err) throw err;
    console.log(`Serving from http://localhost:${port}`);
  });
});
