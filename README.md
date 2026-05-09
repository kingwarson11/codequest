# 🚀 CodeQuest — Level Up Your Coding Skills

![CodeQuest](https://img.shields.io/badge/CodeQuest-Learning%20Platform-00ff9f?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🧠 What is CodeQuest?

**CodeQuest** is a fully interactive, game-based coding education platform built with React. It is designed to help complete beginners — and intermediate learners — study programming concepts in a fun, structured, and rewarding way, directly in the browser without installing anything extra.

Instead of just reading static tutorials, users on CodeQuest:

1. **Read a theory lesson** explaining a concept (e.g. "What are Python variables?")
2. **Experiment with real starter code** in a built-in code editor inside the browser
3. **Complete a hands-on challenge** to prove they understood the concept
4. **Earn XP (experience points)** for every lesson they finish
5. **Level up** as their XP grows, and **unlock badges** for hitting milestones

Every part of the learning experience is gamified — users can see their progress, track which lessons they've done, and get motivated through the same reward loops used in apps like Duolingo or Codecademy.

---

## 🎓 What Can Users Learn?

CodeQuest covers **7 complete courses**, each broken into structured lessons and real-world projects:

| Course | What It Teaches | Lessons | Projects | XP |
|--------|----------------|---------|---------|-----|
| 🐍 **Python** | Variables, loops, functions, OOP, file I/O, modules, error handling | 24 | 4 | 500 |
| 🏗️ **HTML** | Document structure, headings, links, images, forms, semantic markup, accessibility | 18 | 3 | 350 |
| 🎨 **CSS** | Selectors, box model, flexbox, grid, animations, responsive design, CSS variables | 22 | 4 | 450 |
| ⚡ **JavaScript** | Variables, DOM manipulation, events, arrays, async/await, Fetch API, ES6+ | 28 | 5 | 600 |
| ⚛️ **React** | JSX, components, props, state, hooks, useEffect, React Router, Context API | 30 | 5 | 700 |
| 🌿 **Git & GitHub** | Init, add, commit, branches, merge, push/pull, GitHub Flow, pull requests | 16 | 2 | 300 |
| 🧩 **DSA** | Big O notation, arrays, linked lists, stacks, queues, trees, sorting, recursion, dynamic programming | 35 | 3 | 800 |

Each course also includes a curated list of **guided projects** (e.g. "Build a Password Generator in Python", "Create a Responsive Dashboard with CSS", "Build a Weather App with JavaScript") that learners can tackle once they've completed the lessons.

---

## 🕹️ How the Learning Experience Works

### Step 1 — Browse Courses
The homepage displays all available courses in a grid, each showing its topic, difficulty level, number of lessons, number of projects, and the XP a user will earn by completing it. If a user has already started a course, their progress percentage is shown directly on the card.

### Step 2 — Open a Course
Clicking a course opens a dedicated course page which shows:
- A full description of what the course covers
- A list of all lessons with their XP value and completion status (✓ done or locked)
- A list of all projects with difficulty rating
- A circular progress indicator showing how far along the user is

### Step 3 — Take a Lesson
Every lesson has **three interactive tabs**:

**📖 Theory Tab**
The concept is explained in plain, beginner-friendly language. Bold text highlights key terms, and inline code formatting shows examples clearly. This is the "learn" phase — no code writing yet, just understanding.

**💻 Code Tab**
A real code editor pre-loaded with working starter code that demonstrates the concept being taught. Users can freely edit the code and click **▶ Run** to simulate output. They can also reset back to the original starter code at any time. This is the "try it" phase — hands-on experimentation.

**🎯 Challenge Tab**
A problem prompt asks the user to apply what they just learned by writing their own solution. A hint button is available if they get stuck. Once they've written an answer and clicked "Mark as Complete", they earn the XP for that lesson and a direct link appears to the next lesson so they can keep their momentum. This is the "prove it" phase.

### Step 4 — Earn XP and Level Up
Every completed lesson awards XP. XP accumulates and the user's level increases every 100 XP. The XP bar in the navigation updates in real time with a floating "+XP" animation whenever a lesson is completed.

### Step 5 — View Your Profile
The Profile page shows:
- The user's current level and XP with a visual animated progress ring
- A breakdown of every course showing lessons done vs. remaining
- The full badge collection — earned badges are highlighted, locked ones show exactly what needs to be done to unlock them

---

## 🧪 The Playground

Separate from the courses, CodeQuest includes a **free coding sandbox** called the Playground. It supports four languages:

- **Python** — write code and simulate `print()` output
- **JavaScript** — write code and simulate `console.log()` output
- **HTML** — write markup and see a **live rendered preview** in an iframe
- **CSS** — write styles and see them applied **live** to a demo element

The Playground also includes **quick-load snippets** — one-click examples like Fibonacci, Bubble Sort, Fetch API, and a Flexbox card — so users can instantly load working code to study or modify. This is ideal for free experimentation outside of a structured lesson.

---

## 🏆 The Gamification System

CodeQuest uses a progression system to keep users motivated and coming back:

**XP (Experience Points)**
Every lesson is worth a set number of XP (typically 20–30 XP). Harder lessons award more. XP accumulates across all courses in one global pool.

**Levels**
Users start at Level 1. Every 100 XP gained increases the level by 1. The level and XP bar are always visible in the navigation bar — users always know exactly how close they are to leveling up.

**Badges**
There are 8 badges unlocked by reaching specific milestones:

| Badge | How to Unlock |
|-------|--------------|
| 👣 First Steps | Complete your first lesson |
| 🐍 Python Starter | Complete 3 Python lessons |
| 🏗️ Web Builder | Complete 2 HTML lessons |
| ⚡ XP Hunter | Earn 100 XP total |
| 🏆 XP Warrior | Earn 500 XP total |
| 🔥 On Fire! | Build a 3-day learning streak |
| 🗺️ Explorer | Start 3 different courses |
| 🌟 Level 5! | Reach Level 5 |

**Persistent Progress**
All progress — XP, level, completed lessons, unlocked badges — is saved to the browser's `localStorage`. Users can close the tab and return days later and their progress will still be there.

---

## 🖥️ Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| **Home** | `/` | Hero section, course grid preview, feature highlights, call-to-action |
| **Courses** | `/courses` | Full course listing with search bar and difficulty filter |
| **Course Page** | `/course/:courseId` | Course overview — lesson list, project list, topics, progress ring |
| **Lesson Page** | `/course/:courseId/lesson/:lessonId` | The full three-tab lesson: Theory → Code → Challenge |
| **Playground** | `/playground` | Free coding sandbox for Python, JavaScript, HTML, and CSS |
| **Profile** | `/profile` | User stats, per-course progress bars, and badge collection |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | Component-based UI framework |
| **React Router v6** | Client-side routing between pages |
| **Vite 5** | Fast development server and production build tool |
| **CSS Modules** | Scoped, component-level styling with no class name conflicts |
| **localStorage API** | Persisting user progress between browser sessions |
| **Google Fonts** | Syne (headings), Space Mono (code/mono), DM Sans (body) |

No backend, no database, no login required. Everything runs entirely in the browser.

---

## 📁 Project Structure

```
codequest/
├── public/
│   └── favicon.svg                  # Browser tab icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky nav with live XP bar and level display
│   │   └── Navbar.module.css
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page — hero, course grid, features, CTA
│   │   ├── Home.module.css
│   │   ├── Courses.jsx              # All courses with search + difficulty filter
│   │   ├── Courses.module.css
│   │   ├── CoursePage.jsx           # Single course — lesson list, projects, progress
│   │   ├── CoursePage.module.css
│   │   ├── LessonPage.jsx           # Core lesson: Theory / Code Editor / Challenge tabs
│   │   ├── LessonPage.module.css
│   │   ├── Profile.jsx              # User level, XP, per-course progress, badges
│   │   ├── Profile.module.css
│   │   ├── Playground.jsx           # Free-form code sandbox with live preview
│   │   └── Playground.module.css
│   ├── data/
│   │   └── courses.js               # All course content: lessons, projects, topics, challenges
│   ├── hooks/
│   │   └── useProgress.js           # Custom hook: XP logic, level calc, badge unlocking, localStorage
│   ├── styles/
│   │   └── global.css               # Design tokens, typography, reusable utility classes
│   ├── App.jsx                      # App shell with all React Router routes
│   └── main.jsx                     # React DOM entry point
├── index.html                       # HTML shell with Google Fonts links
├── vite.config.js                   # Vite build configuration
├── vercel.json                      # Rewrites config so React Router works on Vercel
├── package.json                     # Dependencies and npm scripts
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18 or higher — [Download here](https://nodejs.org)
- npm (comes bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/codequest.git

# 2. Move into the project folder
cd codequest

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The app will hot-reload automatically as you edit files.

---

## 📦 Build for Production

```bash
npm run build
```

This compiles and bundles everything into the `dist/` folder, optimised and ready to deploy to any static hosting provider.

---

## ☁️ Deploy to Vercel (Recommended)

Vercel is the easiest deployment option — it auto-detects Vite and handles everything.

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub Integration (No CLI needed)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project** and import your GitHub repository
4. Vercel auto-detects Vite — no configuration needed
5. Click **Deploy** — your site is live within seconds

> ⚠️ The `vercel.json` file in this project is critical. It tells Vercel to redirect all routes back to `index.html`, which is required so that pages like `/course/python/lesson/1` work correctly when a user refreshes or shares a link.

---

## 🌿 Deploy to GitHub Pages (Alternative)

```bash
# Install the gh-pages package
npm install --save-dev gh-pages
```

Add these two scripts to `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Update `vite.config.js` to add your repo name as the base path:
```js
base: '/codequest/',
```

Then deploy:
```bash
npm run deploy
```

---

## ➕ How to Add More Lessons

All course content lives in `src/data/courses.js`. To add a new lesson, add an object to the `lessons_data` array of the relevant course:

```js
{
  id: 4,                            // Must be unique within the course (increment from last)
  title: "For Loops",               // Shown in the lesson header and course lesson list
  xp: 30,                           // XP awarded when user marks this lesson complete
  theory: "A for loop repeats a block of code a set number of times...\n\nIn Python, use `range()` to generate a sequence.",
  // Supports **bold** and `inline code` markdown-style formatting
  code: 'for i in range(5):\n    print(f"Step {i + 1}")',
  // This code is pre-loaded into the editor on the Code tab
  challenge: "Write a for loop that prints the numbers 1 to 10.",
  hint: "Use range(1, 11) — the second number is exclusive",
  expected_output: "Numbers 1 through 10 printed on separate lines"
}
```

---

## 🎨 Customising the Design

All design tokens are defined as CSS custom properties at the top of `src/styles/global.css`. Changing any of these updates the entire app's theme:

```css
--bg: #07070f;                        /* Main dark background */
--surface: #1a1a2e;                   /* Card and panel background */
--accent: #00ff9f;                    /* Primary green — XP bars, highlights, links */
--accent2: #7c3aed;                   /* Purple — avatar gradient, secondary accent */
--text: #e8e8f0;                      /* Main readable text */
--muted: #8888aa;                     /* Dimmed / secondary text */
--font-display: 'Syne', sans-serif;   /* Headings and titles */
--font-mono: 'Space Mono', monospace; /* Code blocks and XP numbers */
--font-body: 'DM Sans', sans-serif;   /* Body text and UI labels */
```

---

## 🤝 Contributing

Contributions are very welcome — whether it's new lessons, bug fixes, new badge types, additional courses, or UI improvements.

1. Fork the project on GitHub
2. Create a feature branch: `git checkout -b feature/add-typescript-course`
3. Make your changes and commit with a clear message: `git commit -m "Add TypeScript course with 20 lessons"`
4. Push to your branch: `git push origin feature/add-typescript-course`
5. Open a Pull Request with a description of what you added and why

---

## 📄 License

MIT License — free to use, modify, and distribute for personal or commercial projects. Attribution is appreciated but not required.

---

Built to make coding education more fun and accessible. Happy coding! 🚀
# codequest
