# Focus Tracker App (React + TypeScript)

This project is a **Focus Tracker App** built with **React**, **TypeScript**, **Vite**, and **Bootstrap**.

## What This App Does

- Start a focus session by entering a task name and clicking **Start**
- Show a live timer counting up in seconds
- Stop a session by clicking **Stop**
- Save completed sessions with task name and duration
- Display a list of completed sessions

## React + TypeScript Concepts Used

- `useState` for app state (task input, timer, sessions)
- `useEffect` for timer side effect with cleanup
- `useRef` to store start time without re-rendering
- `useMemo` to calculate total focused time efficiently
- Component-based structure with typed props
- TypeScript interfaces/types for session data

## Project Structure

```text
src/
  components/
    FocusControls.tsx
    TimerDisplay.tsx
    SessionList.tsx
  models/
    focus.ts
  App.tsx
  main.tsx
```

## Getting Started

1. Open terminal and go to the project folder:

```bash
cd to/project/directory
```

2. Install dependencies (first time only):

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` → run development server
- `npm run build` → build production version
- `npm run preview` → preview production build locally
- `npm run lint` → run ESLint checks

## Assignment Checklist

- [x] New React + TypeScript project created
- [x] Focus session start/stop flow implemented
- [x] Live timer implemented
- [x] Completed sessions list implemented
- [x] Code comments added to explain state/hooks
- [x] Bootstrap styling added

