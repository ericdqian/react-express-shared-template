const concurrently = require('concurrently');
const _ = require('lodash');

const splitEntrypoints = process.env.ENTRYPOINTS.split(',');

const SERVER_NAME = 'app-server';
const FRONTEND_NAME = 'app-frontend';

const SERVER_ENTRYPOINTS = {
  [SERVER_NAME]: { cwd: 'packages/server', command: 'npm:dev' },
};
const FRONTEND_ENTRYPOINTS = {
  [FRONTEND_NAME]: { cwd: 'packages/frontend', command: 'npm:dev' },
};

if (!process.env.NO_WATCH) {
  _.values(SERVER_ENTRYPOINTS).forEach(x => (x.command += ':watch'));
}

let entrypoints = { ...FRONTEND_ENTRYPOINTS, ...SERVER_ENTRYPOINTS };
if (process.env.ENTRYPOINTS) {
  entrypoints = _.pick(entrypoints, splitEntrypoints);
}

if (!process.env.NO_WATCH) {
  if (splitEntrypoints.includes(SERVER_NAME)) {
    entrypoints['build-watch-server-and-shared'] = {
      cwd: 'packages/server',
      command: 'npm:build-shared-and-server:watch',
    };
  } else if (splitEntrypoints.includes(FRONTEND_NAME)) {
    entrypoints['build-watch-shared'] = {
      cwd: 'packages/server',
      command: 'npm:build-shared:watch',
    };
  }
}

console.log('entrypoints', entrypoints)

concurrently(
  _.map(entrypoints, (v, name) => ({
    ...v,
    name,
    env: {
      ...process.env,
      NODE_OPTIONS: '',
    },
  })),
  { killOthers: ['failure', 'success'] },
).result.catch(err => console.error(err));
