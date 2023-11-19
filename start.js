import shell from 'shelljs';

shell.exec(
  'npx concurrently -n "CLIENT,READER" -c "auto" "cd client && npm run start" "cd reader && npm run start"',
);
