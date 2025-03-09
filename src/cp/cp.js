import { spawn } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function spawnChildProcess(args) {
  const scriptPath = path.join(__dirname, "./files/script.js");
  const child = spawn("node", [scriptPath, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
}

spawnChildProcess(process.argv.slice(2));