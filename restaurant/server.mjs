import http from 'http'
import {parse} from 'url'
import {METHODS} from './constants/methods.mjs';
import {PORT} from './constants/server-setup.mjs';

const server = http.createServer((request, response) => {
    const parseURL = parse(request.url, true);
    const {pathname} = parseURL;
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});