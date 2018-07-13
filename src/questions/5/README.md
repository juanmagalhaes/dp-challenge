# Question 5 - Piano interface

# Requirements

- The interface for the piano needs to consist of at least 3 octaves
- The piano has a pitch modifier (higher pitch or lower pitch). The pitch can be
  modified by the user in a continuous fashion.
  I shall label Pitches with [Helmholtz pitch notation](https://en.wikipedia.org/wiki/Helmholtz_pitch_notation#Staff_representation)
- Multiple keys can be pressed at a time to create chords. The same note may be
  pressed within different octaves.
- The combined keys which the user is pressing along with any pitch modification
  should be sent to a central component which will combine all user input to create
  the actual tone the user hears.
- The piano has to be "powered on" before it will process any input.

# Stack

To construct this piano interface I would use the same stack present in this repository.

- React
- Recompose
- Styled Components
- Jest and Enzyme
- Tooling (webpack, eslint, stylelint, babel)

## React

React has some important features that would be of great help in the construction the piano interface.

### Componentization

React excels in componentization and we can easily think about some of the piano parts as
components, for example: keys, octaves, body and control panel.

### State management

To handle state management I would use react component state and the context API.

With this combination it is possible to create container components to be placed
in a high position in the component tree to hold the application state.

### Type checking

It is good to use some tool for type checking the component props and react already
provides this package out of the box. If the project was larger I would probably go
with flow or typescript.

## Recompose

Recompose has a nice API for HOC composition and a lot of helper HOCs to use react
in a more functional way.

It excels on creating reusable and composable container components.

## Styled Components

CSS in JS approach to handle component styles. It provides scoped names for classes
in order to avoid class name clashing and a nice API for creating small building
blocks of components with styles and logic to manage its styles.

## Jest and Enzyme

Test suite and a nice API to quickly test component markup and state. Provides snapshot
testing which is simple and very productive.

## Tooling

Set of tools to enable ES6 features, linting and several other things.

# How would I build it

First of all lets define some important constants for the application:

```JavaScript
// Musical notes B# === C and E# === F
export const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

export const OCTAVES = [
  'CONTRA', // lower
  'GREAT',
  'SMALL',
  'ONE_LINE',
  'TWO_LINE',
  'THRE_LINE' // higher
];

export const MAX_OCTAVES = 3;
export const STARTING_OCTAVE = 1;
```

They would be in some file like `src/constants.js` for example

I would start by creating the `ContextProvider` component. This component would hold the
state of the keys pressed, the octaves to which these keys belongs to, and the pitch info
because this info together is used to create the tone, and last but not least the power
state to know if the input should be processed at all.

This `ContextProvider` would basically hold app state and expose handler methods to update
application state through context API it would just render children so that it can be placed
in a higher place on the component tree.

To create this container of state and state change handlers, I would use recompose helpers
like this:

```JavaScript
import React, { createContext } from 'react';
import {
  compose,
  mapProps, // map the properties that I want to expose to the wrapped component
  withHandlers, // create handlres to be injected as props on the wrapped component
  withPropTypes, // add propTypes to the component
  withState, // create a wrapper to hold state, handlers to set state, and can create initial state
} from 'recompose';
import PropTypes from 'props-types';
import { OCTAVES, MAX_OCTAVES, STARTING_OCTAVE } from 'src/constants';

// Create react context components
const { Provider, Consumer } = createContext();

const propTypes = {
  children: PropTypes.node.isRequired,
}

/*
* compose will be used to enhance the final
* component with a combination of all HOCs through currying
*/
export const ContextProvider = compose(
  withPropTypes(propTypes),

  // Starts with no keys pressed
  withState('pressedKeys', 'setPressedKeys', []),

  // will start turned off
  withState('power', 'setPower', false),

  // keep track of max and min octave indexes
  withState('startingOctave', 'setStartingOctave', STARTING_OCTAVE),
  withState('endingOctave', 'setEndingOctave', MAX_OCTAVES + 1),

  // initial octaves are going to be `GREAT`, `SMALL` and `ONE_LINE`
  withState('octaves', 'setOctaves', ({
    startingOctave, endingOctave
  }) => OCTAVES.slice(startingOctave, endingOctave)),

  withHandlers({
    // switch power between ON and OFF (true or false)
    togglePower: ({ power, setPower }) => () => setPower(!power),

    // Create a new ocatave slice higher then the previous by 1, if is there any higher octave to reach
    increasePitch: ({
      power,
      endingOctave,
      setEndingOctave,
      startingOctave,
      setStartingOctave,
      setOctaves
    }) => () => {
      // it needs to be turned on in order to increase pich
      // if endingOctave reaches the OCTAVES.length it cannot get higher because there is no next ocatve
      if (power && endingOctave < OCTAVES.length) {
        const newStartingOctave = startingOctave + 1;
        const newEndingOctave = endingOctave + 1;
        setStartingOctave(newStartingOctave);
        setEndingOctave(newEndingOctave);
        setOctaves(OCTAVES.slice(newStartingOctave, newEndingOctave));
      }
    },

    // it needs to be turned on in order to decrease pich
    // equals to increasePitch but decrement by one instead of increasing. Until it reaches the lowest octave
    decreasePitch: props => () => ...,

    // A pressed key should aways be associated with the octave that it belongs to
    pressKey: ({ power, pressedKeys, setPressedKeys }) => (key, octave) => {
      if (power) {
        // will create a new set of pressed keys with its octaves adding the new pressed key
        setPressedKeys(pressedKeys.concat({ key, octave }));
      }
    },

    releaseKey: ({ power, pressedKeys, setPressedKeys }) => (key, octave) => {
      if (power) {
        const keepAllBut = (x) => (x.key !== key && x.octave !== octave);
        // will create a new set of pressed keys with its octaves without the released key
        setPressedKeys(pressedKeys.filter(keepAllBut));
      }
    },
  }),

  // Finally map just the props that should be exposed to the wrapped component
  mapProps(({
    children,
    decreasePitch,
    increasePitch,
    octaves,
    pressKey,
    releaseKey,
    togglePower,
  }) => ({
    children,
    // scope then all inside prop context
    context: {
      decreasePitch,
      increasePitch,
      octaves,
      pressKey,
      releaseKey,
      togglePower,
    }
  }))

// Wrapped component
)(({ children, context }) => (
  <Provider value={context}>
    {children}
  </Provider>
));

// Create a HOC to inject the context on other components
// Inject the prop with name context to decrease the chance of prop name clashing
export const withContext = Component => props => (
  <Consumer>
    {context => <Component context={context} {...props} />}
  <Consumer>
)
```
