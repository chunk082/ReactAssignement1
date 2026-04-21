type FocusControlsProps = {
  taskInput: string;
  isRunning: boolean;
  onTaskChange: (value: string) => void;
  onStart: () => void;
  onStop: () => void;
};

export function FocusControls({
  taskInput,
  isRunning,
  onTaskChange,
  onStart,
  onStop,
}: FocusControlsProps) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h2 className="h5 card-title mb-3">Start Focus Session</h2>

        <label htmlFor="taskInput" className="form-label">
          Task Name
        </label>
        <input
          id="taskInput"
          type="text"
          className="form-control mb-3"
          placeholder="Example: Study React hooks"
          value={taskInput}
          onChange={(event) => onTaskChange(event.target.value)}
          disabled={isRunning}
        />

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={onStart}
            disabled={isRunning || taskInput.trim().length === 0}
          >
            Start
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={onStop}
            disabled={!isRunning}
          >
            Stop
          </button>
        </div>

        <p className="text-secondary mt-3 mb-0 small">
          {isRunning
            ? 'Session is running. Press Stop to save it.'
            : 'Enter a task and press Start.'}
        </p>
      </div>
    </div>
  );
}
