import type { FocusSession } from '../models/focus';
import { formatDuration } from '../models/focus';

type SessionListProps = {
  sessions: FocusSession[];
};

export function SessionList({ sessions }: SessionListProps) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h5 card-title mb-3">Completed Sessions</h2>

        {/* Student note: Conditional rendering shows one UI for empty data and another when data exists. */}
        {sessions.length === 0 ? (
          <p className="text-secondary mb-0">No sessions yet. Start your first one.</p>
        ) : (
          <ul className="list-group">
            {sessions.map((session) => (
              <li
                key={session.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <div className="fw-semibold">{session.taskName}</div>
                  <small className="text-secondary">
                    {new Date(session.startAt).toLocaleTimeString()} -{' '}
                    {new Date(session.endAt).toLocaleTimeString()}
                  </small>
                </div>
                <span className="badge text-bg-primary rounded-pill">
                  {formatDuration(session.durationSeconds)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
