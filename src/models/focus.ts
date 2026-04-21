export type FocusSession = {
  id: string;
  taskName: string;
  durationSeconds: number;
  startAt: number;
  endAt: number;
};

// This helper keeps formatting logic in one place so components stay cleaner.
export function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
}
