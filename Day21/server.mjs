import http from 'http'
import {parse} from 'url'
import {PORT, METHODS, APIS} from './constants.mjs'
import {sum, sumCount, getDate, getHistory} from './apis.mjs'

const server = http.createServer((request, response) => {
  const parseURL = parse(request.url, true);
  const {pathname} = parseURL;
  if(request.method === METHODS.POST && pathname === APIS.sum) {
    sum(request, response);
  }else if(request.method === METHODS.GET && pathname === APIS.sumCount){
    sumCount(request, response)
  }else if(request.method === METHODS.GET && pathname === APIS.getDate) {
    getDate(request, response)
  }else if(request.method === METHODS.GET && pathname === APIS.history) {
    getHistory(request, response)
  }
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});