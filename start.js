import shell from 'shelljs'

const args = process.argv.slice(2);

if(args.includes('--web')){
  shell.exec('npx concurrently -n "CLIENT" -c "auto"  "cd client && npm run start"');
}
if(args.includes('--tauri')){
  shell.exec('npx concurrently -n "SERVER" -c "auto"  "cd server && npm run tauri:start"');
}
