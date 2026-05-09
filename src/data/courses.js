export const courses = [
  {
    id: "python",
    title: "Python",
    emoji: "🐍",
    tagline: "The language of AI & automation",
    color: "#3b82f6",
    accent: "#60a5fa",
    xp: 500,
    lessons: 24,
    projects: 4,
    difficulty: "Beginner",
    description: "Start your coding journey with Python — clean syntax, powerful libraries, and endless possibilities from web scraping to machine learning.",
    topics: ["Variables & Types", "Control Flow", "Functions", "Lists & Dicts", "OOP", "File I/O", "Modules", "Error Handling"],
    projects_list: [
      { title: "Number Guessing Game", difficulty: "Easy", xp: 50 },
      { title: "Password Generator", difficulty: "Easy", xp: 75 },
      { title: "Todo CLI App", difficulty: "Medium", xp: 100 },
      { title: "Web Scraper", difficulty: "Hard", xp: 150 },
    ],
    lessons_data: [
      {
        id: 1, title: "Hello, World!", xp: 20,
        theory: "Python is a high-level, interpreted language known for its clean, readable syntax. It's used in web development, data science, AI, and automation.\n\nEvery Python program starts by executing code from top to bottom. The `print()` function displays output to the screen.",
        code: 'print("Hello, World!")\nprint("Welcome to CodeQuest!")\nname = "coder"\nprint(f"Hey {name}, let\'s learn Python!")',
        challenge: 'Print your own name using a variable. Store your name in a variable called `name` and print a greeting.',
        hint: 'Try: name = "YourName" then print(f"Hello, {name}!")',
        expected_output: "Hello, [Your Name]!"
      },
      {
        id: 2, title: "Variables & Data Types", xp: 25,
        theory: "Variables store data values. Python has several built-in data types:\n- `int`: whole numbers (42)\n- `float`: decimal numbers (3.14)\n- `str`: text ('hello')\n- `bool`: True or False\n- `list`: ordered collection [1, 2, 3]\n\nPython is dynamically typed — you don't need to declare types.",
        code: 'age = 25          # int\nheight = 1.75     # float\nname = "Alex"     # str\nis_coder = True   # bool\nskills = ["Python", "HTML", "CSS"]  # list\n\nprint(type(age))\nprint(type(name))\nprint(f"{name} is {age} years old")',
        challenge: "Create variables for your own name, age, and favorite language. Print them in a sentence.",
        hint: 'Use f-strings: print(f"My name is {name}")',
        expected_output: "My name is [name], I am [age], I love [language]"
      },
      {
        id: 3, title: "If / Else Statements", xp: 30,
        theory: "Conditional statements let your program make decisions. The `if` keyword checks a condition — if it's True, that block runs. `elif` adds more conditions. `else` catches everything else.\n\nPython uses indentation (4 spaces) to define code blocks — no curly braces needed!",
        code: 'score = 85\n\nif score >= 90:\n    print("A — Excellent!")\nelif score >= 80:\n    print("B — Great job!")\nelif score >= 70:\n    print("C — Good effort")\nelse:\n    print("Keep practicing!")\n\n# Ternary / one-liner\nresult = "Pass" if score >= 60 else "Fail"\nprint(result)',
        challenge: "Write a program that checks if a number is positive, negative, or zero.",
        hint: 'Use if num > 0, elif num < 0, else',
        expected_output: "The number is positive/negative/zero"
      },
    ]
  },
  {
    id: "html",
    title: "HTML",
    emoji: "🏗️",
    tagline: "The skeleton of every website",
    color: "#f97316",
    accent: "#fb923c",
    xp: 350,
    lessons: 18,
    projects: 3,
    difficulty: "Beginner",
    description: "Learn to structure web content with HTML — the foundation of every website on the internet. From headings to forms to semantic markup.",
    topics: ["Document Structure", "Text Elements", "Links & Images", "Lists & Tables", "Forms", "Semantic HTML", "Media", "Accessibility"],
    projects_list: [
      { title: "Personal Portfolio Page", difficulty: "Easy", xp: 60 },
      { title: "Restaurant Menu", difficulty: "Easy", xp: 80 },
      { title: "Blog Post Layout", difficulty: "Medium", xp: 100 },
    ],
    lessons_data: [
      {
        id: 1, title: "Your First HTML Page", xp: 20,
        theory: "HTML (HyperText Markup Language) uses tags to structure content. Every HTML page has a basic skeleton:\n\n`<!DOCTYPE html>` tells the browser this is HTML5.\n`<html>` wraps everything.\n`<head>` contains meta info (invisible to users).\n`<body>` contains visible content.",
        code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>This is my first webpage.</p>\n</body>\n</html>',
        challenge: "Create a basic HTML page with a title, one heading, and two paragraphs about yourself.",
        hint: 'Use <h1> for heading and <p> for paragraphs',
        expected_output: "A valid HTML page with proper structure"
      },
      {
        id: 2, title: "Headings, Paragraphs & Text", xp: 20,
        theory: "HTML has 6 heading levels (h1–h6) for hierarchy. `<p>` creates paragraphs. Text formatting tags:\n- `<strong>` — bold/important\n- `<em>` — italic/emphasis\n- `<br>` — line break\n- `<hr>` — horizontal rule\n\nUse headings semantically, not for styling!",
        code: '<h1>Main Title</h1>\n<h2>Section Title</h2>\n<h3>Subsection</h3>\n\n<p>This is a <strong>bold</strong> word and this is <em>italic</em>.</p>\n\n<p>First line.<br>Same paragraph, new line.</p>\n\n<hr>\n<p>After the divider.</p>',
        challenge: "Create a page for your favorite movie/book with a title, subtitle, and a short description using bold and italic.",
        hint: 'Use h1 for movie name, h2 for genre, p for description',
        expected_output: "Page with proper heading hierarchy and formatted text"
      },
    ]
  },
  {
    id: "css",
    title: "CSS",
    emoji: "🎨",
    tagline: "Style the web beautifully",
    color: "#8b5cf6",
    accent: "#a78bfa",
    xp: 450,
    lessons: 22,
    projects: 4,
    difficulty: "Beginner",
    description: "Make websites beautiful with CSS. Master selectors, flexbox, grid, animations, and responsive design to create stunning visual experiences.",
    topics: ["Selectors", "Box Model", "Colors & Fonts", "Flexbox", "CSS Grid", "Animations", "Responsive Design", "Variables"],
    projects_list: [
      { title: "Styled Profile Card", difficulty: "Easy", xp: 60 },
      { title: "Animated Landing Page", difficulty: "Medium", xp: 100 },
      { title: "Responsive Dashboard", difficulty: "Hard", xp: 150 },
      { title: "CSS Art Piece", difficulty: "Medium", xp: 90 },
    ],
    lessons_data: [
      {
        id: 1, title: "CSS Basics & Selectors", xp: 20,
        theory: "CSS (Cascading Style Sheets) controls how HTML looks. You write rules:\n```\nselector { property: value; }\n```\n\nCommon selectors:\n- `h1` — targets all h1 elements\n- `.classname` — targets elements with that class\n- `#idname` — targets element with that ID\n- `*` — targets everything",
        code: '/* Target by element */\nh1 {\n  color: #00ff9f;\n  font-size: 2rem;\n}\n\n/* Target by class */\n.card {\n  background: #1a1a2e;\n  padding: 20px;\n  border-radius: 8px;\n}\n\n/* Target by ID */\n#header {\n  background: black;\n  padding: 16px;\n}',
        challenge: "Write CSS to make all paragraphs have a dark blue background and white text with some padding.",
        hint: 'Target p { background: ...; color: ...; padding: ...; }',
        expected_output: "Paragraphs styled with background and text color"
      },
    ]
  },
  {
    id: "javascript",
    title: "JavaScript",
    emoji: "⚡",
    tagline: "Make the web interactive",
    color: "#eab308",
    accent: "#facc15",
    xp: 600,
    lessons: 28,
    projects: 5,
    difficulty: "Beginner–Intermediate",
    description: "The language of the web. Learn JavaScript to add interactivity, handle events, manipulate the DOM, and build dynamic applications.",
    topics: ["Variables & Types", "Functions", "DOM Manipulation", "Events", "Arrays & Objects", "Async/Await", "Fetch API", "ES6+"],
    projects_list: [
      { title: "Interactive Quiz App", difficulty: "Easy", xp: 80 },
      { title: "Weather App", difficulty: "Medium", xp: 120 },
      { title: "Expense Tracker", difficulty: "Medium", xp: 130 },
      { title: "Pomodoro Timer", difficulty: "Easy", xp: 75 },
      { title: "Memory Card Game", difficulty: "Hard", xp: 160 },
    ],
    lessons_data: [
      {
        id: 1, title: "Variables: let, const, var", xp: 25,
        theory: "JavaScript has three ways to declare variables:\n\n- `const` — can't be reassigned (use by default)\n- `let` — can be reassigned (use when you need to change it)\n- `var` — old way, avoid it (has scoping issues)\n\nModern JS style: prefer `const`, use `let` when needed, never `var`.",
        code: 'const name = "Alex";       // cannot reassign\nlet score = 0;             // can reassign\nscore = 100;               // ✅ works\n\n// const name = "Bob";   // ❌ Error!\n\nconst player = {\n  name: "Alex",\n  level: 1\n};\nplayer.level = 2;          // ✅ object properties CAN change\n\nconsole.log(name, score, player.level);',
        challenge: "Declare a const for your name and a let for your score starting at 0. Add 50 to the score, then log both.",
        hint: 'score += 50; then console.log(name, score)',
        expected_output: "YourName 50"
      },
    ]
  },
  {
    id: "react",
    title: "React",
    emoji: "⚛️",
    tagline: "Build modern UIs with components",
    color: "#06b6d4",
    accent: "#22d3ee",
    xp: 700,
    lessons: 30,
    projects: 5,
    difficulty: "Intermediate",
    description: "The most popular frontend library. Learn components, hooks, state management, and build real-world applications used by top companies.",
    topics: ["JSX", "Components", "Props", "State & Hooks", "useEffect", "Forms", "React Router", "Context API"],
    projects_list: [
      { title: "Todo App with Hooks", difficulty: "Easy", xp: 80 },
      { title: "Movie Search App", difficulty: "Medium", xp: 130 },
      { title: "E-commerce Cart", difficulty: "Hard", xp: 180 },
      { title: "Real-time Chat UI", difficulty: "Hard", xp: 170 },
      { title: "Dashboard Analytics", difficulty: "Hard", xp: 200 },
    ],
    lessons_data: [
      {
        id: 1, title: "What is React?", xp: 25,
        theory: "React is a JavaScript library for building UIs. It introduces the concept of components — reusable pieces of UI.\n\nKey ideas:\n- **Components**: Functions that return JSX (HTML-like syntax)\n- **JSX**: Lets you write HTML inside JavaScript\n- **Virtual DOM**: React efficiently updates only what changed\n- **Unidirectional data flow**: Data flows down via props",
        code: '// A simple React component\nfunction WelcomeCard({ name, level }) {\n  return (\n    <div className="card">\n      <h2>Welcome, {name}!</h2>\n      <p>You are on Level {level}</p>\n      <button onClick={() => alert("Leveling up!")}\n        Level Up\n      </button>\n    </div>\n  );\n}\n\n// Using it:\n// <WelcomeCard name="Alex" level={5} />',
        challenge: "Create a Greeting component that accepts a `name` prop and renders 'Hello, [name]! Ready to code?'",
        hint: 'function Greeting({ name }) { return <h1>Hello, {name}!</h1> }',
        expected_output: "Hello, [name]! Ready to code?"
      },
    ]
  },
  {
    id: "git",
    title: "Git & GitHub",
    emoji: "🌿",
    tagline: "Version control like a pro",
    color: "#f43f5e",
    accent: "#fb7185",
    xp: 300,
    lessons: 16,
    projects: 2,
    difficulty: "Beginner",
    description: "Every developer needs Git. Learn to track changes, collaborate with others, manage branches, and contribute to open source on GitHub.",
    topics: ["Init & Config", "Add & Commit", "Branches", "Merge & Rebase", "Push & Pull", "GitHub Flow", "Pull Requests", "Open Source"],
    projects_list: [
      { title: "Your First GitHub Repo", difficulty: "Easy", xp: 50 },
      { title: "Collaborate on a Project", difficulty: "Medium", xp: 100 },
    ],
    lessons_data: [
      {
        id: 1, title: "What is Git?", xp: 20,
        theory: "Git is a version control system — it tracks changes to your files over time. Think of it as a time machine for your code!\n\nKey concepts:\n- **Repository (repo)**: A project tracked by Git\n- **Commit**: A snapshot of your code at a point in time\n- **Branch**: A parallel version of your code\n- **Remote**: A copy of your repo hosted online (e.g. GitHub)",
        code: '# Set up Git for the first time\ngit config --global user.name "Your Name"\ngit config --global user.email "you@example.com"\n\n# Start a new project\nmkdir my-project\ncd my-project\ngit init\n\n# Check status\ngit status\n\n# See your config\ngit config --list',
        challenge: "Configure your Git username and email, then initialize a new repository.",
        hint: 'Run git config --global user.name "YourName" first',
        expected_output: "Initialized empty Git repository"
      },
      {
        id: 2, title: "Add, Commit, Push", xp: 25,
        theory: "The Git workflow:\n1. **Edit** your files\n2. **Stage** changes with `git add`\n3. **Commit** with a message using `git commit`\n4. **Push** to GitHub with `git push`\n\nCommit messages should be short, present-tense: 'Add login page', not 'Added login page'.",
        code: '# Stage a specific file\ngit add index.html\n\n# Stage everything\ngit add .\n\n# Commit with a message\ngit commit -m "Add homepage layout"\n\n# Connect to GitHub (first time)\ngit remote add origin https://github.com/user/repo.git\n\n# Push to GitHub\ngit push -u origin main\n\n# See commit history\ngit log --oneline',
        challenge: "Create a file, stage it, and commit it with a meaningful message.",
        hint: 'touch README.md → git add README.md → git commit -m "Add README"',
        expected_output: "1 commit in git log"
      },
    ]
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    emoji: "🧩",
    tagline: "Think like a computer scientist",
    color: "#10b981",
    accent: "#34d399",
    xp: 800,
    lessons: 35,
    projects: 3,
    difficulty: "Intermediate–Advanced",
    description: "Master the fundamentals of computer science. Understand how data is organized and algorithms work — essential for technical interviews and efficient code.",
    topics: ["Big O Notation", "Arrays", "Linked Lists", "Stacks & Queues", "Trees", "Graphs", "Sorting", "Searching", "Dynamic Programming", "Recursion"],
    projects_list: [
      { title: "Sorting Visualizer", difficulty: "Medium", xp: 150 },
      { title: "Pathfinding Visualizer", difficulty: "Hard", xp: 200 },
      { title: "LeetCode Challenge Tracker", difficulty: "Medium", xp: 120 },
    ],
    lessons_data: [
      {
        id: 1, title: "Big O Notation", xp: 30,
        theory: "Big O describes how an algorithm's runtime scales with input size. It helps us compare efficiency.\n\nCommon complexities (best to worst):\n- O(1) — Constant: instant, no matter the size\n- O(log n) — Logarithmic: binary search\n- O(n) — Linear: one loop\n- O(n log n) — Log-linear: good sorting\n- O(n²) — Quadratic: nested loops\n- O(2ⁿ) — Exponential: very slow",
        code: '# O(1) — Constant\ndef get_first(arr):\n    return arr[0]  # Always one operation\n\n# O(n) — Linear\ndef find_max(arr):\n    max_val = arr[0]\n    for item in arr:  # Loops n times\n        if item > max_val:\n            max_val = item\n    return max_val\n\n# O(n²) — Quadratic\ndef bubble_sort(arr):\n    for i in range(len(arr)):\n        for j in range(len(arr)-i-1):  # Nested loop!\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr',
        challenge: "What is the Big O of a function that has a loop inside a loop? Write an example.",
        hint: 'A nested loop (loop inside loop) is usually O(n²)',
        expected_output: "O(n²) — quadratic time complexity"
      },
    ]
  },
];

export const getCourse = (id) => courses.find(c => c.id === id);

export const totalStats = {
  courses: courses.length,
  lessons: courses.reduce((sum, c) => sum + c.lessons, 0),
  projects: courses.reduce((sum, c) => sum + c.projects, 0),
  totalXP: courses.reduce((sum, c) => sum + c.xp, 0),
};
