# Clock Application
This is a  Clock application built with React. The app allows you to set session and break times, start/stop the timer, and reset the clock. It also plays an alarm sound when the session or break time ends.

## Project Netlify Link:
https://fcc-project.netlify.app/clock/

## Features
- Set Break and Session Lengths: Adjust the length of your break and session times.
- Start/Stop Timer: Start and stop the timer at any point.
- Reset Timer: Reset the timer to default values.
- Alarm Sound: Plays an alarm sound when the session or break time ends.

## Installation
To run this application locally, follow these steps:

## Clone the repository:

git clone <repository-url>
cd <repository-directory>


## Install dependencies:

npm install


## Run the application:

npm start

## Usage
#### Components
- App: The main component that holds the state and logic for the Pomodoro Clock.
- TimeSetter: A component to set the break and session times.
- Display: A component to display the current time, start/stop button, and reset button.
State Management
- breakTime: State to manage the break time.
- sessionTime: State to manage the session time.
- displayState: State to manage the current time, the type of timer (session or break), and whether the timer is running.

## Key Functions
- buttonPress: Handles different button presses (e.g., clear, negative, percent, operators).
- startStop: Toggles the timer on and off.
- reset: Resets the timer and state to default values.
- changeBreakTime: Updates the break time.
- changeSessionTime: Updates the session time.
- DecrementDisplay: Decrements the timer by one second.


## Example Markdown
Here is an example of the markdown used in the application:

import { useEffect, useState } from 'react';
import TimeSetter from './TimeSetter';
import './App.css';
import Display from './Display';
import AlarmSound from './assets/AlarmSound.mp3';
import { DisplayState } from './helper';

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 *60;
const interval = 60;

enum TimeType {
  Session="Session",
  Break="Break"
}

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState<DisplayState>({
    time: sessionTime,
    timeType: TimeType.Session,
    timerRunning: false,
  });

  useEffect(() => {
    let timerID: number;
    if (!displayState.timerRunning) return;

    if (displayState.timerRunning) {
      timerID = window.setInterval(DecrementDisplay, 1000);
    }

    return () => {
      window.clearInterval(timerID)
    }
  }, [displayState.timerRunning]);

  useEffect(() => {
    if (displayState.time === 0) {
      let audio = document.getElementById("beep") as HTMLAudioElement;
      audio.currentTime = 2;
      audio.play().catch((err) => console.log(err));
      setDisplayState((prev) => ({
        ...prev,
        timeType: prev.timeType === TimeType.Session ? TimeType.Break : TimeType.Session,
        time: prev.timeType === TimeType.Session ? breakTime : sessionTime,
      }));
    }
  }, [displayState, breakTime, sessionTime]) 

  const reset = () => {
    setBreakTime(defaultBreakTime);
    setSessionTime(defaultSessionTime);
    setDisplayState({
      time: defaultSessionTime,
      timeType: "Session",
      timerRunning: false
    });
    const audio = document.getElementById("beep") as HTMLAudioElement;
    audio.pause();
    audio.currentTime = 0;
  }

  const startStop = () => {
    setDisplayState((prev) => ({
      ...prev,
      timerRunning: !prev.timerRunning,
    }));
  }

  const changeBreakTime = (time: number) => {
    if(displayState.timerRunning) return;
    setBreakTime(time);
  }

  const DecrementDisplay = () => {
    setDisplayState((prev) => ({
      ...prev,
      time: prev.time -1,
    }))
  }

  const changeSessionTime = (time: number) => {
    if(displayState.timerRunning) return;
    setSessionTime(time);
    setDisplayState({
      time: time,
      timeType: TimeType.Session,
      timerRunning: false,
    });
  };

  return (
    <div className="clock">
      <div className="setters">
        <div className="break">
          <h4 id='break-label'>Break Length</h4>
          <TimeSetter 
            time = {breakTime}
            setTime = {changeBreakTime}
            min = {min}
            max = {max}
            interval = {interval}
            type = "break"
          />
        </div>

        <div className="session">
          <h4 id="session-label">Session length</h4>
          <TimeSetter 
            time = {sessionTime}
            setTime = {changeSessionTime}
            min = {min}
            max = {max}
            interval = {interval}
            type = "session"
          />
        </div>
      </div>

      <Display 
        displayState={displayState}
        reset={reset}
        startStop={startStop}
      />

      <audio id="beep" src={AlarmSound} />
    </div>
  )
}

export default App;








<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
