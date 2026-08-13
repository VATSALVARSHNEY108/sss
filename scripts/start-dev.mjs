import { spawn } from 'node:child_process';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const backendRoot = path.join(projectRoot, 'backend');
const backendServer = path.join(backendRoot, 'server.mjs');

function launch(command, args, cwd) {
  const child = spawn(command, args, {
    cwd,
    detached: true,
    stdio: 'ignore',
    shell: false,
  });
  child.unref();
  return child.pid;
}

function isPortOpen(port) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host: '127.0.0.1', port });
    socket.setTimeout(500);
    socket.on('connect', () => {
      socket.end();
      resolve(true);
    });
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.on('error', () => {
      resolve(false);
    });
  });
}

const backendRunning = await isPortOpen(8000);
const frontendRunning = await isPortOpen(3000);

const backendPid = backendRunning ? null : launch(process.execPath, [backendServer], backendRoot);
const frontendPid = frontendRunning
  ? null
  : launch('cmd.exe', ['/c', 'npm.cmd', 'run', 'dev'], projectRoot);

console.log(
  backendRunning
    ? 'Whobee backend already running on http://localhost:8000'
    : `Started Whobee backend on http://localhost:8000 (pid ${backendPid})`
);
console.log(
  frontendRunning
    ? 'Whobee frontend already running on http://localhost:3000'
    : `Started Whobee frontend on http://localhost:3000 (pid ${frontendPid})`
);
