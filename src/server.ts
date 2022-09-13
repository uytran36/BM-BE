import http from 'http';
import app from './app';
import { ENV } from './configs';

const normalizePort = (val: string) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(ENV.PORT || '5000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
