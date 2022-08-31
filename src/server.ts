import http from 'http';
import app from './app';

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

const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
