## React-Redux-Startup

**`npm run start`** to run the server in development mode through webpack middleware
To access the server, navigate to `http://localhost:3001`

**`npm run build`** create a development build in `build` folder
`cd` to `build/` and the run command `node server` to run server in development mode
To access the server, navigate to `http://localhost:3000`

**`npm run build:production`** create a production build in `build` folder
`cd` to `build/` and the run command `node server` to run server in production mode
To access the server, navigate to `http://localhost:3000`

**`npm run lint:changed`** to run eslint against the last changes files

`precommmit` is configured to run `eslint` before any commits
Make sure you fix all lint errors before commiting your code
