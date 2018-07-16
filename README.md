# DP Challenge!

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![CircleCI](https://circleci.com/gh/juanmagalhaes/dp-challenge.svg?style=svg)](https://circleci.com/gh/juanmagalhaes/dp-challenge)

This project was bootstrap with create-react-app and then ejected.

## Folder structure

```
dp-challenge/
  public/
    # All web public content
  scripts/
    # any custom script
  config/
    # all general configuration including build, test, devserver and more
  src/
    components/
      # all of the project components
    questions/
      # folders named 1 to 7 with the questions code implementation entry point.
```

## Project commands

```
# Install dependencies
yarn or npm install

# Run development server
yarn or npm start

# Run tests
yarn or npm test

# Build
yarn build or npm run build
```

## How to check up on the questions

### Questions 1 to 4 - algorithms.

- Source code and test code for the questions are in `src/questions/[questionNumber]`.
- Run tests to ensure that the functions work as they should.

### Question 5 and 6 - Description

- [Question 5](https://github.com/juanmagalhaes/dp-challenge/tree/master/src/questions/5)
  Not all possible edge case are covered as there are many possible tricky cases with email
  though common cases are covered, there are some examles in question 5' test case.
- [Question 6](https://github.com/juanmagalhaes/dp-challenge/tree/master/src/questions/6)

### Questions 7 - SegmentControl component

- Run the dev server with `yarn start` to see the component being used in several different ways.
- `src/questions/7` folder contains `SegmentControl` component usage examples.
- `src/components/SegmentControl` folder contains all the implementation and test files.
