import { useState, useEffect, useRef } from 'react'
import styles from './Playground.module.css'

const LANGUAGES = [
  {
    id: 'python', label: 'Python', filename: 'main.py',
    starter: '# Python Playground\n# Write any Python code here!\n\nname = "CodeQuest"\nprint(f"Hello from {name}!")\n\n# Try a loop:\nfor i in range(5):\n    print(f"  Step {i + 1}")\n'
  },
  {
    id: 'javascript', label: 'JavaScript', filename: 'script.js',
    starter: '// JavaScript Playground\n\nconst greet = (name) => `Hello, ${name}!`;\nconsole.log(greet("CodeQuest"));\n\nconst nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);\nconsole.log("Doubled:", doubled);\n'
  },
  {
    id: 'html', label: 'HTML', filename: 'index.html',
    starter: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n  <style>\n    body { font-family: sans-serif; padding: 20px; background: #0f0f1e; color: white; }\n    h1 { color: #00ff9f; }\n    .card { background: #1a1a2e; padding: 16px; border-radius: 8px; margin-top: 12px; }\n  </style>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <div class="card">\n    <p>Edit this HTML and click Preview!</p>\n  </div>\n</body>\n</html>\n'
  },
  {
    id: 'css', label: 'CSS', filename: 'style.css',
    starter: '/* CSS Playground */\n\nbody {\n  font-family: sans-serif;\n  background: #07070f;\n  color: #e8e8f0;\n  padding: 40px;\n}\n\n.box {\n  width: 200px;\n  height: 200px;\n  background: linear-gradient(135deg, #00ff9f, #7c3aed);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  animation: spin 3s linear infinite;\n}\n\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n'
  },
]

const SNIPPETS = [
  { label: 'Fibonacci', lang: 'python', code: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nfor i in range(10):\n    print(f"fib({i}) = {fibonacci(i)}")' },
  { label: 'Bubble Sort', lang: 'python', code: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nnums = [64, 34, 25, 12, 22, 11, 90]\nprint("Sorted:", bubble_sort(nums))' },
  { label: 'List Comprehension', lang: 'python', code: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nsquares = [x**2 for x in numbers]\nprint("Squares:", squares)\n\nevens = [x for x in numbers if x % 2 == 0]\nprint("Evens:", evens)\n\npairs = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]\nprint("Pairs:", pairs)' },
  { label: 'Fetch API', lang: 'javascript', code: 'fetch("https://jsonplaceholder.typicode.com/todos/1")\n  .then(res => res.json())\n  .then(data => {\n    console.log("Title:", data.title);\n    console.log("Done:", data.completed);\n  })\n  .catch(err => console.error("Error:", err));' },
  { label: 'Flexbox Card', lang: 'html', code: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { background: #07070f; display: flex; justify-content: center; padding: 40px; }\n  .card { background: #1a1a2e; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 28px; width: 280px; color: white; font-family: sans-serif; }\n  .title { font-size: 1.4rem; font-weight: 700; color: #00ff9f; margin-bottom: 8px; }\n  .tag { background: rgba(0,255,159,0.1); color: #00ff9f; padding: 4px 10px; border-radius: 100px; font-size: 0.75rem; display: inline-block; }\n</style>\n</head>\n<body>\n  <div class="card">\n    <div class="title">Profile Card</div>\n    <p style="color:#8888aa;font-size:0.9rem">Frontend Developer</p>\n    <div class="tag">React</div>\n    <div class="tag" style="margin-left:6px">CSS</div>\n  </div>\n</body>\n</html>' },
]

// Run JS safely by capturing console.log output
function runJavaScript(code) {
  const logs = []
  const sandbox = {
    console: {
      log:   (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
      error: (...args) => logs.push('❌ ' + args.join(' ')),
      warn:  (...args) => logs.push('⚠️ ' + args.join(' ')),
    },
    setTimeout: () => {},
    setInterval: () => {},
  }
  try {
    const fn = new Function(...Object.keys(sandbox), code)
    fn(...Object.values(sandbox))
    return logs.length ? logs.join('\n') : '✓ Executed (no console.log output)'
  } catch (err) {
    return `❌ ${err.name}: ${err.message}`
  }
}

export default function Playground() {
  const [lang, setLang] = useState(LANGUAGES[0])
  const [code, setCode] = useState(LANGUAGES[0].starter)
  const [output, setOutput] = useState('')
  const [preview, setPreview] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [pyodideReady, setPyodideReady] = useState(false)
  const [pyodideLoading, setPyodideLoading] = useState(false)
  const [running, setRunning] = useState(false)
  const pyodideRef = useRef(null)

  // Load Pyodide when Python tab is active
  useEffect(() => {
    if (lang.id !== 'python' || pyodideRef.current || pyodideLoading) return
    setPyodideLoading(true)
    setOutput('⏳ Loading Python engine (one-time, ~5 seconds)...')

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js'
    script.onload = async () => {
      try {
        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
        })
        pyodideRef.current = pyodide
        setPyodideReady(true)
        setPyodideLoading(false)
        setOutput('✅ Python ready! Click ▶ Run to execute your code.')
      } catch (e) {
        setPyodideLoading(false)
        setOutput('❌ Failed to load Python engine. Check your internet connection.')
      }
    }
    script.onerror = () => {
      setPyodideLoading(false)
      setOutput('❌ Failed to load Python engine. Check your internet connection.')
    }
    document.head.appendChild(script)
  }, [lang.id])

  const switchLang = (l) => {
    setLang(l)
    setCode(l.starter)
    setOutput('')
    setPreview('')
    setShowPreview(false)
  }

  const handleRun = async () => {
    // HTML preview
    if (lang.id === 'html') {
      setShowPreview(true)
      setPreview(code)
      return
    }
    // CSS preview
    if (lang.id === 'css') {
      const htmlWrap = `<!DOCTYPE html><html><head><style>${code}</style></head><body><div class="box">{'🎨'}</div></body></html>`
      setShowPreview(true)
      setPreview(htmlWrap)
      return
    }
    // Real JavaScript execution
    if (lang.id === 'javascript') {
      setShowPreview(false)
      setOutput(runJavaScript(code))
      return
    }
    // Real Python via Pyodide
    if (lang.id === 'python') {
      setShowPreview(false)
      if (!pyodideRef.current) {
        setOutput('⏳ Python engine is still loading, please wait...')
        return
      }
      setRunning(true)
      setOutput('⏳ Running...')
      try {
        // Capture stdout
        pyodideRef.current.runPython(`
import sys
import io
sys.stdout = io.StringIO()
`)
        pyodideRef.current.runPython(code)
        const result = pyodideRef.current.runPython('sys.stdout.getvalue()')
        // Restore stdout
        pyodideRef.current.runPython('sys.stdout = sys.__stdout__')
        setOutput(result || '✓ Executed (no print output)')
      } catch (err) {
        // Restore stdout even on error
        try { pyodideRef.current.runPython('sys.stdout = sys.__stdout__') } catch (_) {}
        // Clean up the Python traceback for readability
        const msg = String(err)
        const lines = msg.split('\n')
        const clean = lines.filter(l => !l.includes('File "<exec>"') && !l.includes('pyodide')).join('\n').trim()
        setOutput('❌ ' + (clean || msg))
      }
      setRunning(false)
    }
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

  const runBtnLabel = running ? '⏳ Running...' : '▶ Run'

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>{'🧪'} Playground</h1>
          <p className={styles.subtitle}>
            Real code execution — Python runs via Pyodide (WebAssembly), JS runs natively.
          </p>
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

      <div className={styles.snippets}>
        <span className={styles.snippetsLabel}>Quick snippets:</span>
        {SNIPPETS.map(s => (
          <button key={s.label} className={styles.snippet} onClick={() => loadSnippet(s)}>
            {s.label}
          </button>
        ))}
      </div>

      <div className={styles.editor}>
        <div className={styles.editorPanel}>
          <div className={styles.editorBar}>
            <div className={styles.dots}>
              <span style={{ background: '#ff5f57' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#28c840' }} />
            </div>
            <span className={styles.filename}>{lang.filename}</span>
            <button
              className={styles.runBtn}
              onClick={handleRun}
              disabled={running || (lang.id === 'python' && pyodideLoading)}
            >
              {lang.id === 'python' && pyodideLoading ? '⏳ Loading Python...' : runBtnLabel}
            </button>
          </div>
          <textarea
            className={styles.editorArea}
            value={code}
            onChange={e => setCode(e.target.value)}
            spellCheck={false}
          />
        </div>

        <div className={styles.outputPanel}>
          <div className={styles.outputBar}>
            <span>{showPreview ? 'Preview' : 'Output'}</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className={styles.clearBtn} onClick={() => { setOutput(''); setPreview(''); setShowPreview(false) }}>Clear</button>
              <button className={styles.resetBtn} onClick={() => { setCode(lang.starter); setOutput(''); setPreview(''); setShowPreview(false) }}>{'↺'} Reset</button>
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
              {output
                ? output.split('\n').map((line, i) => <div key={i}>{line || '\u00A0'}</div>)
                : <span className={styles.placeholder}>Click {'▶'} Run to execute your code</span>
              }
            </div>
          )}
        </div>
      </div>

      <div className={styles.tips}>
        <span className={styles.tipsLabel}>{'💡'} Tips:</span>
        <span>Python executes <strong>for real</strong> {'—'} loops, functions, sorting all work correctly.</span>
        <span>JavaScript runs natively in your browser.</span>
        <span>HTML &amp; CSS show a live rendered preview.</span>
      </div>
    </main>
  )
}
