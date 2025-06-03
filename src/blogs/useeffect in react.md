---
title: "useEffect in React"

date: "2025-05-31"

author: "Pritam Das"

tags: ["coding", "react", "hooks", "clean-code", "best-practices"]
---

## useEffect

`useEffect` is a powerful React hook that lets you run **side effects** in your components—like fetching API data, setting up timers, or handling local storage. It executes **after** the component renders, and optionally runs again when specified values change.

You can pass a **dependency array** as the second argument. This array tells React when to re-run the effect—only if the listed dependencies change. If you pass an **empty array**, the effect runs just once (on mount), making it perfect for one-time setups.

A **cleanup function** can also be returned inside `useEffect` to clear intervals, cancel subscriptions, or prevent memory leaks—especially important when working with timers or listeners.

## Syntax

    useEffect(()=>{}  return (cleanup...)}

## Timer App

Here we will create a simple timer app to showcase , `useEffect`

    import { useEffect, useState } from "react";
    import "./TimerApp.css";

    export default function TimerApp() {
      const [timer, setTimer] = useState(10);
      //timer variable which displays the time

      const [isRunning, setIsRunning] = useState(false);
      //we set isRunning true or false when we want to start of stop the timer

      useEffect(() => {
        if (!isRunning) return;

        const intervalId = setInterval(() => {
          setTimer((prev) => {
            if (prev === 1) {
              setIsRunning(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        return () => clearInterval(intervalId);
      }, [isRunning]);

      return (
        <div className="timer-container">
          <h1 className="timer-value">{timer}s</h1>
          <div className="button-group">
            <button onClick={() => setIsRunning(true)} className="timer-button start">
              ▶ Start
            </button>
            <button onClick={() => setIsRunning(false)} className="timer-button pause">
              ⏸ Pause
            </button>
            <button
              onClick={() => {
                setTimer(10);
                setIsRunning(false);
              }}
              className="timer-button reset"
            >
              🔁 Reset
            </button>
          </div>
        </div>
      );
    }

view the output of this code live in [codesandbox](https://7ntpgs.csb.app/)
