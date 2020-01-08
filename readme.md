# What have we learnt so far?

- npm init
- Pushing to github
- .editorconfig & .eslintrc.js
- Commitlint



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