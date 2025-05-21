import {loadData, saveData} from "./savedata.mjs";

export async function sum (request, response) {
  const state = await loadData();
  let body = '';
  request.on('data', part => {
    body += part.toString();
  });
  request.on('end', async () => {
    try {
      const data = JSON.parse(body);
      const {num1, num2} = data;
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        const output = {error: "Invalid input"};
        response.writeHead(400, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(output));
        state.sumCallCount++;
        state.history.push({
          endpoint: '/sum',
          input: data,
          output
        });
        await saveData(state);
        return;
      }
      const output = {sum: num1 + num2};
      state.sumCallCount++;
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(output));
      state.history.push({
        endpoint: '/sum',
        input: data,
        output
      });
      await saveData(state);
    } catch (error) {
      const output = {error: "Invalid JSON"};
      response.writeHead(400, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(output));
      state.sumCallCount++;
      state.history.push({
        endpoint: '/sum',
        input: body,
        output
      });
      await saveData(state);
    }
  });
}

export async function getDate (request, response) {
  const state = await loadData();
  const now = new Date().toISOString();
  const output = {currentTime: now};
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify(output));
  state.history.push({
    endpoint: '/get-date',
    input: {},
    output
  });
  await saveData(state);
}

export async function sumCount(request, response) {
  const state = await loadData();
  const output = { totalCalls: state.sumCallCount };
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(output));
  state.history.push({
    endpoint: '/sum-count',
    input: {},
    output
  });
  await saveData(state);
}

export async function getHistory(request, response) {
  const state = await loadData();
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ history: state.history }));
}