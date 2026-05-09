# CodeQuest — Learn to Code the Fun Way

CodeQuest is an interactive website where anyone can learn coding from scratch. Instead of watching videos or reading boring textbooks, users learn by doing — reading short lessons, writing real code in the browser, and completing challenges that test what they just learned. Every lesson completed earns XP points, which level you up and unlock badges, making the whole experience feel like a game.

---

## What the Project Does

When you open CodeQuest, you land on a homepage that shows all the available courses. You pick one, work through its lessons one by one, and track your progress as you go. There is no sign-up required and no installation — everything runs in the browser.

### The Courses

There are 7 courses covering the most important topics for anyone starting out in tech:

- **Python** — the most beginner-friendly programming language, used in AI, automation, and data science
- **HTML** — the language used to structure every webpage on the internet
- **CSS** — the language used to make webpages look good, with colors, layouts, and animations
- **JavaScript** — the language that makes websites interactive and dynamic
- **React** — the most popular tool for building modern web apps, used by companies like Meta and Airbnb
- **Git & GitHub** — how developers save their work, track changes, and collaborate with others
- **Data Structures & Algorithms** — the problem-solving fundamentals needed for coding interviews and writing efficient code

Each course has between 16 and 35 lessons, and each course ends with a set of real projects to build.

### How a Lesson Works

Every lesson is split into three steps:

**1. Theory** — A short, plain-language explanation of the concept. No jargon, no walls of text. Just enough to understand what's going on and why it matters.

**2. Code** — A code editor opens right in the browser, pre-loaded with a working example of the concept. You can read it, edit it, run it, and see the output. No need to install Python or Node or anything else.

**3. Challenge** — A small task that asks you to write your own code using what you just learned. There is a hint button if you get stuck. Once you write your answer and mark the lesson complete, you earn XP and move on to the next lesson.

### The XP and Leveling System

Every lesson gives you XP when you complete it. As your XP builds up, your level increases — shown in the navigation bar at all times so you always know how close you are to the next level. Completing lessons across different courses and hitting XP milestones unlocks badges, which are displayed on your profile page.

### The Playground

There is also a free Playground page where you can write code in Python, JavaScript, HTML, or CSS without being in a lesson. It is useful for experimenting, trying out ideas, or just practicing. HTML and CSS show a live visual preview. There are also quick-load code snippets (like a Bubble Sort or a Flexbox card) that load into the editor with one click.

### The Profile Page

The profile page shows everything in one place — your current level, total XP, how far along you are in each course, and all the badges you have earned or still need to unlock.

---

## Tech Used

Built with **React** and **Vite**. Styled using CSS Modules. No backend or database — all progress is saved directly in the browser using localStorage, so nothing is lost when you close the tab.

---

## How to Run It

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## How to Deploy

Push the project to GitHub, then import it on [vercel.com](https://vercel.com). Vercel detects the setup automatically and deploys it in under a minute.

---

Built by kingwarson11
