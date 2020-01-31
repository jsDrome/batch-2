- Github
- Project initialization
- Editorconfig, Eslint
- Commit linting
- Babel
- Webpack
  - Dev
  - Prod
  - Webpack Dev Server
- Webpack plugins
  - Html Webpack Plugin
  - Webpack Bundle Analyzer
  - Webpack Visualizer
- React entry point
- Firebase Hosting
- Circle CI
- HMR, Debugging
- Unit Testing
- Automation
- Backend
- Firebase Functions
- GCP

In root,
npm i express

src/server/index.js

        const express = require('express');
        const app = new express();
        const port = 5000;
        app.use(express.static('_dist'));
        app.get('/hello', (req, res) => {
        res.send('hello');
        });
        app.listen(port, () => {
        console.log('Server started in port ' + port);
        });

npx firebase init (functions)

functions

functions/index.js

    const functions = require('firebase-functions');
    const express = require('express');

    const app = express();

    app.get('/hello', (req, res) => {
      res.send('hello');
    });

    const runtimeOpts = {
      timeoutSeconds: 300,
      memory: '2GB',
    };

    const myFirebaseApp = functions.runWith(runtimeOpts).https.onRequest(app);
    exports.myFirebaseApp = myFirebaseApp;


cd functions

npm i expresss

cd ..

npm run build:client:prod

npx firebase deploy



Change firebase.json the following line

    "function": "myFirebaseApp"