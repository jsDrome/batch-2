# What have we learnt so far?

- npm init
- Pushing to github
- .editorconfig & .eslintrc.js
- Commitlint



## Commitlint

- Install

`npm install --save-dev @commitlint/config-conventional @commitlint/cli husky`

- Configure husky

    "husky": {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    }

- Configure commitlint