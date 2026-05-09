import { useState } from 'react'
import styles from './Playground.module.css'

const LANGUAGES = [
  { id: 'python', label: 'Python', filename: 'main.py', starter: '# Python Playground\n# Write any Python code here!\n\nname = "CodeQuest"\nprint(f"Hello from {name}!")\n\n# Try a loop:\nfor i in range(5):\n    print(f"  Step {i + 1}")\n' },
  { id: 'javascript', label: 'JavaScript', filename: 'script.js', starter: '// JavaScript Playground\n// Write any JS code here!\n\nconst greet = (name) => `Hello, ${name}!`;\nconsole.log(greet("CodeQuest"));\n\n// Array methods:\nconst nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);\nconsole.log("Doubled:", doubled);\n' },
  { id: 'html', label: 'HTML', filename: 'index.html', starter: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n  <style>\n    body { font-family: sans-serif; padding: 20px; background: #0f0f1e; color: white; }\n    h1 { color: #00ff9f; }\n    .card { background: #1a1a2e; padding: 16px; border-radius: 8px; margin-top: 12px; }\n  </style>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <div class="card">\n    <p>Edit this HTML and click Preview!</p>\n  </div>\n</body>\n</html>\n' },
  { id: 'css', label: 'CSS', filename: 'style.css', starter: '/* CSS Playground */\n/* Edit and see your styles below! */\n\nbody {\n  font-family: sans-serif;\n  background: #07070f;\n  color: #e8e8f0;\n  padding: 40px;\n}\n\n.box {\n  width: 200px;\n  height: 200px;\n  background: linear-gradient(135deg, #00ff9f, #7c3aed);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  animation: spin 3s linear infinite;\n}\n\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n' },
]

const SNIPPETS = [
  { label: 'Fibonacci', lang: 'python', code: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nfor i in range(10):\n    print(f"fib({i}) = {fibonacci(i)}")' },
  { label: 'Bubble Sort', lang: 'python', code: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nnums = [64, 34, 25, 12, 22, 11, 90]\nprint("Sorted:", bubble_sort(nums))' },
  { label: 'Fetch API', lang: 'javascript', code: '// Fetch data from a public API\nfetch("https://jsonplaceholder.typicode.com/todos/1")\n  .then(res => res.json())\n  .then(data => {\n    console.log("Title:", data.title);\n    console.log("Done:", data.completed);\n  })\n  .catch(err => console.error("Error:", err));' },
  { label: 'Flexbox Card', lang: 'html', code: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { background: #07070f; display: flex; justify-content: center; padding: 40px; }\n  .card { background: #1a1a2e; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 28px; width: 280px; color: white; font-family: sans-serif; }\n  .title { font-size: 1.4rem; font-weight: 700; color: #00ff9f; margin-bottom: 8px; }\n  .tag { background: rgba(0,255,159,0.1); color: #00ff9f; padding: 4px 10px; border-radius: 100px; font-size: 0.75rem; display: inline-block; }\n</style>\n</head>\n<body>\n  <div class="card">\n    <div class="title">Profile Card</div>\n    <p style="color:#8888aa;font-size:0.9rem">Frontend Developer</p>\n    <div class="tag">React</div>\n    <div class="tag" style="margin-left:6px">CSS</div>\n  </div>\n</body>\n</html>' },
]

export default function Playground() {
  const [lang, setLang] = useState(LANGUAGES[0])
  const [code, setCode] = useState(LANGUAGES[0].starter)
  const [output, setOutput] = useState('')
  const [preview, setPreview] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const switchLang = (l) => {
    setLang(l)
    setCode(l.starter)
    setOutput('')
    setPreview('')
    setShowPreview(false)
  }

  const handleRun = () => {
    if (lang.id === 'html') {
      setShowPreview(true)
      setPreview(code)
      return
    }
    if (lang.id === 'css') {
      const htmlWrap = `<!DOCTYPE html><html><head><style>${code}</style></head><body><div class="box">🎨</div></body></html>`
      setShowPreview(true)
      setPreview(htmlWrap)
      return
    }
    // Simulate output for Python/JS
    const lines = code.split('\n')
    const outputs = []
    lines.forEach(line => {
      const py = line.match(/^\s*print\((.+)\)\s*$/)
      const js = line.match(/^\s*console\.log\((.+)\)\s*$/)
      if (py) {
        let val = py[1].replace(/f?"([^"]*)"/, '$1').replace(/f?'([^']*)'/, '$1')
        val = val.replace(/\{(\w+)\}/g, '[var]')
        outputs.push('> ' + val)
      } else if (js) {
        let val = js[1].replace(/"([^"]*)"/g, '$1').replace(/'([^']*)'/g, '$1')
        val = val.replace(/`([^`]*)`/g, '$1')
        outputs.push('> ' + val)
      }
    })
    setOutput(outputs.length ? outputs.join('\n') : '> ✓ Code executed (no print/console.log output)')
    setShowPreview(false)
  }

  const loadSnippet = (s) => {
    const l = LANGUAGES.find(x => x.id === s.lang)
    if (l) {
      setLang(l)
      setCode(s.code)
      setOutput('')
      setPreview('')
      setShowPreview(false)
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>🧪 Playground</h1>
          <p className={styles.subtitle}>Experiment with code freely. No setup needed.</p>
        </div>
        <div className={styles.langTabs}>
          {LANGUAGES.map(l => (
            <button
              key={l.id}
              className={`${styles.langTab} ${lang.id === l.id ? styles.langActive : ''}`}
              onClick={() => switchLang(l)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Snippets */}
      <div className={styles.snippets}>
        <span className={styles.snippetsLabel}>Quick snippets:</span>
        {SNIPPETS.map(s => (
          <button key={s.label} className={styles.snippet} onClick={() => loadSnippet(s)}>
            {s.label}
          </button>
        ))}
      </div>

      <div className={styles.editor}>
        {/* Editor */}
        <div className={styles.editorPanel}>
          <div className={styles.editorBar}>
            <div className={styles.dots}>
              <span style={{ background: '#ff5f57' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#28c840' }} />
            </div>
            <span className={styles.filename}>{lang.filename}</span>
            <button className={styles.runBtn} onClick={handleRun}>▶ Run</button>
          </div>
          <textarea
            className={styles.editorArea}
            value={code}
            onChange={e => setCode(e.target.value)}
            spellCheck={false}
          />
        </div>

        {/* Output / Preview */}
        <div className={styles.outputPanel}>
          <div className={styles.outputBar}>
            <span>{showPreview ? 'Preview' : 'Output'}</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className={styles.clearBtn} onClick={() => { setOutput(''); setPreview(''); setShowPreview(false) }}>Clear</button>
              <button className={styles.resetBtn} onClick={() => { setCode(lang.starter); setOutput(''); setPreview(''); setShowPreview(false) }}>↺ Reset</button>
            </div>
          </div>
          {showPreview ? (
            <iframe
              className={styles.preview}
              srcDoc={preview}
              title="Preview"
              sandbox="allow-scripts"
            />
          ) : (
            <div className={styles.output}>
              {output || <span className={styles.placeholder}>Click ▶ Run to execute your code</span>}
            </div>
          )}
        </div>
      </div>

      <div className={styles.tips}>
        <span className={styles.tipsLabel}>💡 Tips:</span>
        <span>Use <code>print()</code> in Python or <code>console.log()</code> in JS to see output.</span>
        <span>HTML & CSS show a live preview when you run.</span>
        <span>Your code stays in this session — use a file to save.</span>
      </div>
    </main>
  )
}
