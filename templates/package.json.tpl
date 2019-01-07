{
  "name": "{{name}}",
  "version": "1.0.0",
  "description": "{{description}}",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "test": "jest",
    "build": " tsc",
    "clean": "rimraf lib"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && npm test"
    }
  },
  "lint-staged": {
    "*.ts": [
      "tslint --fix",
      "prettier --write",
      "git add"
    ],
    "*.{js,json,md}": [
      "prettier --write",
      "git add"
    ]
  },
  "author": "{{author}} <{{authorEmail}}>",
  "license": "MIT",
  "devDependencies": {
    "@types/jest": "^23.3.12",
    "husky": "^1.3.1",
    "jest": "^23.6.0",
    "lint-staged": "^8.1.0",
    "prettier": "^1.15.3",
    "rimraf": "^2.6.3",
    "ts-jest": "^23.10.5",
    "tslint": "^5.12.0",
    "tslint-config-prettier": "^1.17.0",
    "typescript": "^3.2.2"
  }
}
