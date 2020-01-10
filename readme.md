# What have we learnt so far?

- npm init
- Pushing to github
- .editorconfig & .eslintrc.js
- Commitlint
- React entry point
- Babel

## Commitlint

- Install

`npm install --save-dev @commitlint/config-conventional @commitlint/cli husky`

- Configure husky by adding the below code to package.json

    "husky": {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    }

- Configure commitlint

  Create a file called `commitlint.config.js` with the following content:

    module.exports = { extends: [ '@commitlint/config-conventional' ] };


- Install React and React-dom

    npm i --save react react-dom

  Create a file called `src/client/index.js` with the following content:

      import React, { Component } from 'react';
      import { render } from 'react-dom';

      class App extends Component {
        render() {
          return <h1>Hello, World</h1>;
        }
      }

      render(<App />, document.getElementById('root'));

  Install Babel

  npm i --save-dev @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime @babel/preset-react babel-plugin-istanbul babel-eslint babel-loader

  Configure babel

  Create a file called `.babelrc` with the following content:

      {
      "presets": [
        "@babel/preset-react",
        [
          "@babel/preset-env",
          {
            "targets": {
              "chrome": "41",
              "ie": "10",
            }
          }
        ]
      ],
      "plugins": [
        "istanbul",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        // ["@babel/plugin-transform-runtime", {
        //   "regenerator": true
        // }]
      ]
    }