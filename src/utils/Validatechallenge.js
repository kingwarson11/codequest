/**
 * Strict challenge validator.
 * Runs the code, checks the actual output against expected patterns.
 * Returns: { pass: bool, message: string }
 */

export function validateChallenge({ lesson, courseId, answer, output }) {
  const code   = (answer || '').trim()
  const out    = (output || '').trim()
  const lang   = getLang(courseId)

  // \u{2500}\u{2500} Step 1: Must have written something \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
  if (code.length < 5) {
    return fail('\u{270F}\u{FE0F}  Write your solution first before submitting.')
  }

  // \u{2500}\u{2500} Step 2: Must have clicked Run first \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
  if (!output && lang !== 'html' && lang !== 'css') {
    return fail('\u{25B6}  Click "Run My Code" first \u{2014} we need to see your output before we can check it.')
  }

  // \u{2500}\u{2500} Step 3: No runtime errors allowed \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
  if (out.startsWith('\u{274C}')) {
    return fail(`\u{1F41B}  Fix the error in your code first:\n${out}`)
  }

  // \u{2500}\u{2500} Step 4: Must produce output (for non-preview languages) \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
  if (!out && lang !== 'html' && lang !== 'css' && lang !== 'git') {
    return fail('\u{1F4ED}  Your code ran but produced no output. Add a print() or console.log() to show your result.')
  }

  // \u{2500}\u{2500} Step 5: Lesson-specific checks \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
  if (lesson.checks) {
    for (const check of lesson.checks) {
      const result = runCheck(check, code, out, lang)
      if (!result.pass) return fail(result.message)
    }
  }

  // \u{2500}\u{2500} Step 6: Expected output matching \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
  if (lesson.expected_outputs) {
    for (const expected of lesson.expected_outputs) {
      if (!outContains(out, expected)) {
        return fail(`\u{274C}  Expected your output to contain "${expected}" but it didn't.\n\nYour output:\n${out || '(empty)'}`)
      }
    }
  }

  return pass('\u{2705}  Correct! Well done.')
}

// \u{2500}\u{2500} Run a single check rule \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
function runCheck(check, code, out, lang) {
  const codeLow = code.toLowerCase()
  const outLow  = out.toLowerCase()

  switch (check.type) {

    case 'code_contains':
      if (!codeLow.includes(check.value.toLowerCase())) {
        return fail(check.message || `Your code must contain: ${check.value}`)
      }
      break

    case 'code_not_contains':
      if (codeLow.includes(check.value.toLowerCase())) {
        return fail(check.message || `Your code should not contain: ${check.value}`)
      }
      break

    case 'output_contains':
      if (!outContains(out, check.value)) {
        return fail(check.message || `Expected output to contain: "${check.value}"\n\nYour output:\n${out || '(empty)'}`)
      }
      break

    case 'output_equals':
      if (out.trim() !== String(check.value).trim()) {
        return fail(check.message || `Expected:\n${check.value}\n\nYour output:\n${out || '(empty)'}`)
      }
      break

    case 'output_lines_gte':
      if (out.split('\n').filter(l => l.trim()).length < check.value) {
        return fail(check.message || `Your output should have at least ${check.value} lines. Got ${out.split('\n').filter(l=>l.trim()).length}.`)
      }
      break

    case 'output_contains_number':
      if (!outContainsNumber(out, check.value)) {
        return fail(check.message || `Expected the number ${check.value} in your output. Got:\n${out}`)
      }
      break

    case 'output_sorted': {
      const nums = out.split(/[\s,\[\]]+/).filter(x => x && !isNaN(x)).map(Number)
      const sorted = [...nums].sort((a, b) => a - b)
      if (JSON.stringify(nums) !== JSON.stringify(sorted)) {
        return fail(check.message || `Your output should be a sorted list. Got:\n${out}`)
      }
      break
    }

    case 'output_is_number': {
      const trimmed = out.trim()
      if (isNaN(Number(trimmed))) {
        return fail(check.message || `Expected a number as output. Got: ${trimmed}`)
      }
      break
    }

    default:
      break
  }
  return pass()
}

// \u{2500}\u{2500} Helpers \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
function outContains(out, value) {
  return out.toLowerCase().includes(String(value).toLowerCase())
}

function outContainsNumber(out, num) {
  return out.split(/[\s,\[\]()]+/).some(t => Number(t) === num)
}

function pass(message = '\u{2705}  Correct! Well done.')  { return { pass: true,  message } }
function fail(message)                               { return { pass: false, message } }

function getLang(courseId) {
  if (['python','dsa'].includes(courseId)) return 'python'
  if (['javascript','react'].includes(courseId))  return 'javascript'
  if (courseId === 'html') return 'html'
  if (courseId === 'css')  return 'css'
  if (courseId === 'git')  return 'git'
  return 'python'
}
