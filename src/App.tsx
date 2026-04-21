import { useEffect, useMemo, useRef, useState } from 'react';
import { FocusControls } from './components/FocusControls';
import { SessionList } from './components/SessionList';
import { TimerDisplay } from './components/TimerDisplay';
import type { FocusSession } from './models/focus';
import './App.css';

function App() {
  //useState stores values that should trigger a re-render when they change.
  const [taskInput, setTaskInput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [sessions, setSessions] = useState<FocusSession[]>([]);

  // useRef keeps a mutable value without causing re-renders.
  const startTimeRef = useRef<number | null>(null);

  // useEffect is used here for the timer side effect.
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = window.setInterval(() => {
      setElapsedSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    // cleanup function prevents duplicate intervals / memory leaks.
    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    if (taskInput.trim().length === 0 || isRunning) {
      return;
    }

    setElapsedSeconds(0);
    startTimeRef.current = Date.now();
    setIsRunning(true);
  };

  const handleStop = () => {
    if (!isRunning || startTimeRef.current === null) {
      return;
    }

    const endedAt = Date.now();
    const durationSeconds = Math.max(
      0,
      Math.floor((endedAt - startTimeRef.current) / 1000),
    );

    const newSession: FocusSession = {
      id: crypto.randomUUID(),
      taskName: taskInput.trim(),
      durationSeconds,
      startAt: startTimeRef.current,
      endAt: endedAt,
    };

    setSessions((previousSessions) => [newSession, ...previousSessions]);
    setIsRunning(false);
    setElapsedSeconds(0);
    setTaskInput('');
    startTimeRef.current = null;
  };

  // useMemo avoids recalculating total time on every render.
  const totalFocusedSeconds = useMemo(() => {
    return sessions.reduce((sum, session) => sum + session.durationSeconds, 0);
  }, [sessions]);

  return (
    <main className="app-bg min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="text-center mb-4">
              <h1 className="display-5 fw-bold mb-2">Focus Tracker App</h1>
              <p className="text-secondary mb-0">
                Track your focus sessions and review what you finished today.
              </p>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-12 col-md-6">
                <FocusControls
                  taskInput={taskInput}
                  isRunning={isRunning}
                  onTaskChange={setTaskInput}
                  onStart={handleStart}
                  onStop={handleStop}
                />
              </div>

              <div className="col-12 col-md-6">
                <TimerDisplay
                  elapsedSeconds={elapsedSeconds}
                  isRunning={isRunning}
                  totalFocusedSeconds={totalFocusedSeconds}
                />
              </div>
            </div>

            <SessionList sessions={sessions} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
