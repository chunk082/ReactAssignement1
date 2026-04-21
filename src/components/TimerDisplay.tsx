import { formatDuration } from '../models/focus';

type TimerDisplayProps = {
  elapsedSeconds: number;
  isRunning: boolean;
  totalFocusedSeconds: number;
};

export function TimerDisplay({
  elapsedSeconds,
  isRunning,
  totalFocusedSeconds,
}: TimerDisplayProps) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h2 className="h5 card-title mb-3">Live Timer</h2>

        <div className="display-5 fw-semibold text-primary">{elapsedSeconds}s</div>

        <p className="text-secondary mb-2">
          Status: {isRunning ? 'Running' : 'Not running'}
        </p>

        <hr />

        <p className="mb-0">
          <span className="fw-semibold">Total focused time:</span>{' '}
          {formatDuration(totalFocusedSeconds)}
        </p>
      </div>
    </div>
  );
}
