export const courses = [
  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  //  PYTHON
  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  {
    id:"python", title:"Python", emoji:"\u{1F40D}",
    tagline:"The language of AI & automation",
    color:"#3b82f6", accent:"#60a5fa",
    xp:500, lessons:24, projects:4, difficulty:"Beginner",
    description:"Start your coding journey with Python \u{2014} clean syntax, powerful libraries, and endless possibilities.",
    topics:["Variables & Types","Control Flow","Functions","Lists & Dicts","OOP","File I/O","Modules","Error Handling"],
    projects_list:[
      {title:"Number Guessing Game",difficulty:"Easy",xp:50},
      {title:"Password Generator",difficulty:"Easy",xp:75},
      {title:"Todo CLI App",difficulty:"Medium",xp:100},
      {title:"Web Scraper",difficulty:"Hard",xp:150},
    ],
    lessons_data:[
      {
        id:1, title:"Hello, World!", xp:20,
        theory:"Python is a high-level, interpreted language known for its clean, readable syntax.\n\nThe `print()` function outputs text to the screen. You can print strings, numbers, or f-strings (formatted strings that embed variables).\n\nEvery Python file runs top to bottom.",
        code:'print("Hello, World!")\nprint("Welcome to CodeQuest!")\nname = "coder"\nprint(f"Hey {name}, let\'s learn Python!")',
        challenge:"Store your name in a variable called `name` and your age in a variable called `age`. Print a sentence like: My name is Alex and I am 22 years old.",
        hint:'name = "Alex"\nage = 22\nprint(f"My name is {name} and I am {age} years old.")',
        checks:[
          {type:"code_contains", value:"name", message:"Define a variable called `name` with your name."},
          {type:"code_contains", value:"age",  message:"Define a variable called `age` with your age."},
          {type:"code_contains", value:"print(",message:"Use print() to display the result."},
          {type:"output_contains",value:"name is", message:"Your output should say '... name is ...'"},
        ],
        expected_outputs:[]
      },
      {
        id:2, title:"Variables & Data Types", xp:20,
        theory:"Python has several built-in data types:\n- `int`: whole numbers (42)\n- `float`: decimal numbers (3.14)\n- `str`: text ('hello')\n- `bool`: True or False\n- `list`: ordered collection [1, 2, 3]\n\n`type()` tells you what type a variable is.",
        code:'age = 25\nheight = 1.75\nname = "Alex"\nis_coder = True\nskills = ["Python", "HTML", "CSS"]\n\nprint(type(age))\nprint(type(name))\nprint(f"{name} is {age} years old")',
        challenge:"Create 4 variables: a string, an integer, a float, and a boolean. Print the type of each one using type(). You should see 4 lines of output each showing a type.",
        hint:'x = "hello"\ny = 42\nz = 3.14\nb = True\nprint(type(x))\nprint(type(y))\nprint(type(z))\nprint(type(b))',
        checks:[
          {type:"code_contains",  value:"type(",   message:"Use type() to show the type of your variables."},
          {type:"output_lines_gte",value:4,         message:"Print the type of at least 4 different variables \u{2014} you should have at least 4 lines of output."},
          {type:"output_contains", value:"<class '",message:"Your output should show class types like <class 'str'>."},
        ],
        expected_outputs:[]
      },
      {
        id:3, title:"If / Else Statements", xp:25,
        theory:"Conditional statements let your program make decisions.\n- `if` checks a condition \u{2014} if True, that block runs\n- `elif` adds more conditions\n- `else` runs when nothing else matches\n\nPython uses **indentation** (4 spaces) to define blocks.",
        code:'score = 85\n\nif score >= 90:\n    print("A \u{2014} Excellent!")\nelif score >= 80:\n    print("B \u{2014} Great job!")\nelif score >= 70:\n    print("C \u{2014} Good effort")\nelse:\n    print("Keep practicing!")',
        challenge:"Write a program that stores a number in a variable called `num`. If it's positive print 'positive', if negative print 'negative', if zero print 'zero'. Test with num = -7.",
        hint:'num = -7\nif num > 0:\n    print("positive")\nelif num < 0:\n    print("negative")\nelse:\n    print("zero")',
        checks:[
          {type:"code_contains",  value:"if ",      message:"Use an if statement."},
          {type:"code_contains",  value:"elif ",     message:"Use elif to check another condition."},
          {type:"code_contains",  value:"else:",     message:"Include an else for the zero case."},
          {type:"output_contains",value:"negative",  message:"With num = -7 your output should contain 'negative'."},
        ],
        expected_outputs:[]
      },
      {
        id:4, title:"For Loops", xp:25,
        theory:"A `for` loop repeats code a set number of times.\n- `range(5)` gives 0,1,2,3,4\n- `range(1,6)` gives 1,2,3,4,5\n- `range(0,10,2)` gives 0,2,4,6,8 (step 2)\n\nYou can loop over lists, strings, and any iterable.",
        code:'for i in range(5):\n    print(f"Step {i + 1}")\n\nfruits = ["apple","banana","cherry"]\nfor fruit in fruits:\n    print(f"I like {fruit}")',
        challenge:"Write a for loop that prints the numbers 1 to 10, one per line. Then write a second loop that prints only the even numbers from 2 to 20.",
        hint:'for i in range(1, 11):\n    print(i)\nfor i in range(2, 21, 2):\n    print(i)',
        checks:[
          {type:"code_contains",  value:"for ",     message:"Use a for loop."},
          {type:"code_contains",  value:"range(",   message:"Use range() to generate numbers."},
          {type:"output_contains",value:"10",       message:"The numbers 1\u{2013}10 should appear in your output."},
          {type:"output_contains",value:"20",       message:"The even numbers up to 20 should appear in your output."},
          {type:"output_lines_gte",value:20,        message:"You should print at least 20 lines total (10 numbers + 10 evens)."},
        ],
        expected_outputs:[]
      },
      {
        id:5, title:"While Loops", xp:25,
        theory:"A `while` loop keeps running **as long as a condition is True**.\n\nAlways make sure something changes inside the loop to avoid an infinite loop!\n\n- `break` exits the loop immediately\n- `continue` skips to the next iteration",
        code:'countdown = 5\nwhile countdown > 0:\n    print(f"T-minus {countdown}")\n    countdown -= 1\nprint("Blast off! \u{1F680}")',
        challenge:"Write a while loop that starts at n = 1 and keeps doubling it (n = n * 2) until n is greater than 100. Print every value of n including the final one that exceeds 100.",
        hint:'n = 1\nwhile n <= 100:\n    print(n)\n    n *= 2\nprint(n)',
        checks:[
          {type:"code_contains",  value:"while ",    message:"Use a while loop."},
          {type:"code_contains",  value:"*= 2",      message:"Double the value using *= 2 (or n = n * 2)."},
          {type:"output_contains",value:"128",       message:"Your output should include 128 (the first value over 100 when doubling from 1)."},
          {type:"output_contains",value:"1",         message:"Start from 1 \u{2014} it should appear in your output."},
        ],
        expected_outputs:[]
      },
      {
        id:6, title:"Functions", xp:30,
        theory:"Functions are reusable blocks of code. Define once, use many times.\n\n- `def` keyword defines a function\n- Parameters are inputs\n- `return` sends a value back\n\n**DRY principle**: Don't Repeat Yourself.",
        code:'def greet(name):\n    return f"Hello, {name}!"\n\ndef add(a, b):\n    return a + b\n\nprint(greet("Alex"))\nprint(add(3, 7))',
        challenge:"Write a function called `factorial` that takes one parameter `n` and returns n! (n factorial). factorial(5) = 5\u{00D7}4\u{00D7}3\u{00D7}2\u{00D7}1 = 120. Test it by printing factorial(5).",
        hint:'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(5))',
        checks:[
          {type:"code_contains",   value:"def factorial", message:"Define a function called `factorial`."},
          {type:"code_contains",   value:"return",        message:"Your function must return a value."},
          {type:"output_contains", value:"120",           message:"factorial(5) should output 120."},
        ],
        expected_outputs:["120"]
      },
      {
        id:7, title:"Lists", xp:25,
        theory:"Lists are ordered, changeable collections.\n\nKey methods:\n- `append(x)` \u{2014} add to end\n- `remove(x)` \u{2014} remove first match\n- `sort()` \u{2014} sort in place\n- `len(list)` \u{2014} number of items\n- `list[i]` \u{2014} access by index",
        code:'fruits = ["apple","banana","cherry"]\nfruits.append("mango")\nprint(fruits)\nprint(len(fruits))\nsquares = [x**2 for x in range(1,6)]\nprint(squares)',
        challenge:"Create a list of 5 numbers. Without using sum(), max(), or min() built-ins, use a for loop to calculate the total sum and find the largest number. Print both.",
        hint:'nums = [3, 7, 1, 9, 4]\ntotal = 0\nbiggest = nums[0]\nfor n in nums:\n    total += n\n    if n > biggest:\n        biggest = n\nprint(total)\nprint(biggest)',
        checks:[
          {type:"code_contains",  value:"for ",    message:"Use a for loop to calculate the sum and max."},
          {type:"code_not_contains",value:"sum(",  message:"Do not use the built-in sum() function \u{2014} calculate it yourself with a loop."},
          {type:"code_not_contains",value:"max(",  message:"Do not use the built-in max() function \u{2014} find it yourself with a loop."},
          {type:"output_lines_gte",value:2,        message:"Print both the sum and the maximum number."},
        ],
        expected_outputs:[]
      },
      {
        id:8, title:"Dictionaries", xp:25,
        theory:"Dictionaries store **key-value pairs**.\n- Access with `dict[key]` or `dict.get(key)`\n- Add/update: `dict[key] = value`\n- Loop: `for key, value in dict.items()`\n- Check key: `if key in dict`",
        code:'person = {"name":"Alex","age":25,"city":"Accra"}\nprint(person["name"])\nperson["age"] = 26\nfor key, value in person.items():\n    print(f"{key}: {value}")',
        challenge:"Create a dictionary called `scores` with at least 3 student names as keys and their scores as values. Loop through it and print each student's name and score. Then find and print the name of the student with the highest score.",
        hint:'scores = {"Alice": 85, "Bob": 92, "Carol": 78}\nbest = max(scores, key=scores.get)\nprint(f"Best: {best}")',
        checks:[
          {type:"code_contains",  value:"{",          message:"Define a dictionary using {}."},
          {type:"code_contains",  value:"for ",        message:"Loop through the dictionary."},
          {type:"code_contains",  value:".items()",    message:"Use .items() to loop over key-value pairs."},
          {type:"output_lines_gte",value:3,            message:"Print at least 3 student name/score pairs."},
        ],
        expected_outputs:[]
      },
      {
        id:9, title:"Error Handling", xp:30,
        theory:"Errors crash your program. `try/except` handles them gracefully.\n\n```\ntry:\n    # risky code\nexcept ErrorType as e:\n    # handle it\nfinally:\n    # always runs\n```\n\nCommon exceptions: `ValueError`, `ZeroDivisionError`, `IndexError`, `KeyError`.",
        code:'try:\n    num = int("abc")\nexcept ValueError as e:\n    print(f"Error: {e}")\n\ndef safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "Cannot divide by zero"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))',
        challenge:"Write a function called `safe_int` that takes a string and tries to convert it to an integer using int(). If it fails, return 0. Test it by printing safe_int('42') and safe_int('hello').",
        hint:'def safe_int(s):\n    try:\n        return int(s)\n    except ValueError:\n        return 0\nprint(safe_int("42"))\nprint(safe_int("hello"))',
        checks:[
          {type:"code_contains",  value:"def safe_int",  message:"Define a function called safe_int."},
          {type:"code_contains",  value:"try:",          message:"Use a try block."},
          {type:"code_contains",  value:"except",        message:"Use an except block to catch the error."},
          {type:"output_contains",value:"42",            message:"safe_int('42') should return and print 42."},
          {type:"output_contains",value:"0",             message:"safe_int('hello') should return and print 0."},
        ],
        expected_outputs:["42","0"]
      },
      {
        id:10, title:"Classes & OOP", xp:35,
        theory:"OOP organises code into **objects** with properties and behaviours.\n\n- `class` defines the blueprint\n- `__init__` runs when you create an object\n- `self` refers to the current object\n- **Inheritance**: a class can inherit from another",
        code:'class Animal:\n    def __init__(self, name, sound):\n        self.name = name\n        self.sound = sound\n    def speak(self):\n        return f"{self.name} says {self.sound}!"\n\nclass Dog(Animal):\n    def __init__(self, name):\n        super().__init__(name, "Woof")\n\ndog = Dog("Rex")\nprint(dog.speak())',
        challenge:"Create a `BankAccount` class with `balance = 0`. Add a `deposit(amount)` method that adds to balance, and a `withdraw(amount)` method that subtracts \u{2014} but never lets balance go below 0 (print 'Insufficient funds' if it would). Test by depositing 100, withdrawing 40, then withdrawing 200.",
        hint:'class BankAccount:\n    def __init__(self):\n        self.balance = 0\n    def deposit(self, amount):\n        self.balance += amount\n        print(f"Balance: {self.balance}")\n    def withdraw(self, amount):\n        if amount > self.balance:\n            print("Insufficient funds")\n        else:\n            self.balance -= amount\n            print(f"Balance: {self.balance}")',
        checks:[
          {type:"code_contains",   value:"class BankAccount",   message:"Define a class called BankAccount."},
          {type:"code_contains",   value:"def deposit",         message:"Add a deposit method."},
          {type:"code_contains",   value:"def withdraw",        message:"Add a withdraw method."},
          {type:"output_contains", value:"60",                  message:"After depositing 100 and withdrawing 40, balance should be 60."},
          {type:"output_contains", value:"Insufficient",        message:"Withdrawing more than the balance should print 'Insufficient funds'."},
        ],
        expected_outputs:[]
      },
    ]
  },

  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  //  HTML
  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  {
    id:"html", title:"HTML", emoji:"\u{1F3D7}\u{FE0F}",
    tagline:"The skeleton of every website",
    color:"#f97316", accent:"#fb923c",
    xp:350, lessons:18, projects:3, difficulty:"Beginner",
    description:"Learn to structure web content with HTML \u{2014} the foundation of every website.",
    topics:["Document Structure","Text Elements","Links & Images","Lists & Tables","Forms","Semantic HTML","Media","Accessibility"],
    projects_list:[
      {title:"Personal Portfolio Page",difficulty:"Easy",xp:60},
      {title:"Restaurant Menu",difficulty:"Easy",xp:80},
      {title:"Blog Post Layout",difficulty:"Medium",xp:100},
    ],
    lessons_data:[
      {
        id:1, title:"Your First HTML Page", xp:20,
        theory:"HTML uses **tags** to structure content. Every page has:\n- `<!DOCTYPE html>` \u{2014} declares HTML5\n- `<html>` \u{2014} root element\n- `<head>` \u{2014} metadata (title, charset)\n- `<body>` \u{2014} visible content\n\nTags come in pairs: `<p>text</p>`.",
        code:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>This is my first webpage.</p>\n</body>\n</html>',
        challenge:"Write a complete HTML page with the DOCTYPE, html, head (with a title), and body. In the body add an h1 heading and two p paragraphs. The title must say 'My Page'.",
        hint:'<!DOCTYPE html>\n<html><head><title>My Page</title></head>\n<body><h1>Heading</h1><p>Para 1</p><p>Para 2</p></body></html>',
        checks:[
          {type:"code_contains",value:"<!DOCTYPE html>",      message:"Include <!DOCTYPE html> at the top."},
          {type:"code_contains",value:"<title>",              message:"Add a <title> tag in the <head>."},
          {type:"code_contains",value:"My Page",              message:"The title must say 'My Page'."},
          {type:"code_contains",value:"<h1>",                 message:"Add an <h1> heading in the body."},
          {type:"code_contains",value:"<p>",                  message:"Add at least one <p> paragraph."},
        ],
        expected_outputs:[]
      },
      {
        id:2, title:"Headings & Text Formatting", xp:20,
        theory:"Headings h1\u{2013}h6 define hierarchy. Text formatting:\n- `<strong>` \u{2014} bold\n- `<em>` \u{2014} italic\n- `<br>` \u{2014} line break\n- `<hr>` \u{2014} horizontal rule\n\nUse headings for structure, not styling!",
        code:'<h1>Main Title</h1>\n<h2>Section</h2>\n<p>This is <strong>bold</strong> and <em>italic</em>.</p>\n<p>Line one.<br>Same paragraph, new line.</p>\n<hr>\n<h3>Sub-section</h3>',
        challenge:"Create an HTML snippet about your favourite book. Use h1 for the title, h2 for 'Summary' and 'Author', p tags for content. Make the book title inside a paragraph bold and the genre italic.",
        hint:'<h1>Book Title</h1>\n<h2>Summary</h2>\n<p>This book is <strong>amazing</strong> and is <em>fiction</em>.</p>\n<h2>Author</h2>',
        checks:[
          {type:"code_contains",value:"<h1>",     message:"Use <h1> for the book title."},
          {type:"code_contains",value:"<h2>",     message:"Use at least one <h2> for a section like Summary or Author."},
          {type:"code_contains",value:"<strong>", message:"Make some text bold using <strong>."},
          {type:"code_contains",value:"<em>",     message:"Make some text italic using <em>."},
          {type:"code_contains",value:"<p>",      message:"Add paragraph tags."},
        ],
        expected_outputs:[]
      },
      {
        id:3, title:"Links & Images", xp:25,
        theory:"**Links** `<a href='...'>` navigate to pages.\n- `target='_blank'` opens in new tab\n\n**Images** `<img src='...' alt='...'>` display pictures.\n- Always include `alt` for accessibility\n- Self-closing tag \u{2014} no </img> needed",
        code:'<a href="https://google.com">Visit Google</a>\n<br>\n<a href="https://github.com" target="_blank">GitHub (new tab)</a>\n<hr>\n<img src="https://via.placeholder.com/200" alt="placeholder" width="200">',
        challenge:"Write HTML with: (1) a link to https://github.com that opens in a new tab, (2) an image with a placeholder src and descriptive alt text, (3) the image wrapped in a link so clicking it goes somewhere.",
        hint:'<a href="https://github.com" target="_blank">GitHub</a>\n<a href="https://example.com">\n  <img src="https://via.placeholder.com/150" alt="my image">\n</a>',
        checks:[
          {type:"code_contains",value:'target="_blank"',  message:'Add target="_blank" to open the link in a new tab.'},
          {type:"code_contains",value:"<img",             message:"Add an <img> tag."},
          {type:"code_contains",value:"alt=",             message:'Always include alt="" on images for accessibility.'},
          {type:"code_contains",value:"https://github.com",message:"Link to https://github.com."},
        ],
        expected_outputs:[]
      },
      {
        id:4, title:"Lists", xp:20,
        theory:"**Unordered** `<ul>` \u{2014} bullet points\n**Ordered** `<ol>` \u{2014} numbered\nBoth use `<li>` for items.\n\nLists can be **nested** inside each other.",
        code:'<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n<ol>\n  <li>Wake up</li>\n  <li>Code</li>\n  <li>Sleep</li>\n</ol>',
        challenge:"Create an ordered list of your top 5 programming languages. Then create an unordered list of 3 reasons you want to learn coding. Nest a sub-list under at least one item.",
        hint:'<ol>\n  <li>Python</li>\n  <li>JavaScript\n    <ul><li>For the web</li></ul>\n  </li>\n</ol>',
        checks:[
          {type:"code_contains",value:"<ol>",  message:"Add an ordered list <ol>."},
          {type:"code_contains",value:"<ul>",  message:"Add an unordered list <ul>."},
          {type:"code_contains",value:"<li>",  message:"Add list items with <li>."},
        ],
        expected_outputs:[]
      },
      {
        id:5, title:"Tables", xp:25,
        theory:"Tables: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`.\n\n`colspan` makes a cell span multiple columns.\nAlways include `<thead>` and `<tbody>` for good structure.",
        code:'<table border="1">\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alex</td><td>25</td></tr>\n    <tr><td>Priya</td><td>22</td></tr>\n  </tbody>\n</table>',
        challenge:"Build a table showing a weekly study schedule. It must have columns for Day, Subject, and Hours. Include at least 5 rows of data. Use thead and tbody.",
        hint:'<table><thead><tr><th>Day</th><th>Subject</th><th>Hours</th></tr></thead><tbody><tr><td>Monday</td><td>Python</td><td>2</td></tr>...</tbody></table>',
        checks:[
          {type:"code_contains",value:"<table",  message:"Add a <table> element."},
          {type:"code_contains",value:"<thead>", message:"Add a <thead> section."},
          {type:"code_contains",value:"<tbody>", message:"Add a <tbody> section."},
          {type:"code_contains",value:"<th>",    message:"Add header cells using <th>."},
          {type:"code_contains",value:"<td>",    message:"Add data cells using <td>."},
        ],
        expected_outputs:[]
      },
      {
        id:6, title:"Forms", xp:30,
        theory:"Forms collect user input.\n- `<input type='text'>` text field\n- `<input type='email'>` email\n- `<textarea>` multi-line\n- `<select>` dropdown\n- `<button type='submit'>` submit\n\nAlways use `<label for='id'>` with every input.",
        code:'<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name" placeholder="Your name"><br><br>\n  <label for="email">Email:</label>\n  <input type="email" id="email"><br><br>\n  <button type="submit">Submit</button>\n</form>',
        challenge:"Build a contact form with: a text input for name, an email input, a textarea for message, and a submit button. Every input must have a matching label with the correct `for` attribute.",
        hint:'<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name">\n  <label for="msg">Message:</label>\n  <textarea id="msg"></textarea>\n  <button type="submit">Send</button>\n</form>',
        checks:[
          {type:"code_contains",value:"<form",         message:"Wrap everything in a <form> tag."},
          {type:"code_contains",value:'type="text"',   message:'Add a text input: <input type="text">.'},
          {type:"code_contains",value:'type="email"',  message:'Add an email input: <input type="email">.'},
          {type:"code_contains",value:"<textarea",     message:"Add a <textarea> for the message."},
          {type:"code_contains",value:'type="submit"', message:"Add a submit button."},
          {type:"code_contains",value:"<label",        message:"Add <label> tags for your inputs."},
        ],
        expected_outputs:[]
      },
      {
        id:7, title:"Semantic HTML", xp:25,
        theory:"Semantic tags describe the **purpose** of content:\n- `<header>` \u{2014} page header\n- `<nav>` \u{2014} navigation\n- `<main>` \u{2014} main content\n- `<article>` \u{2014} self-contained content\n- `<section>` \u{2014} thematic group\n- `<aside>` \u{2014} sidebar\n- `<footer>` \u{2014} footer\n\nHelps SEO and accessibility.",
        code:'<header><h1>My Blog</h1><nav><a href="/">Home</a></nav></header>\n<main>\n  <article><h2>Post Title</h2><p>Content...</p></article>\n  <aside><p>About me sidebar</p></aside>\n</main>\n<footer><p>\u{00A9} 2025</p></footer>',
        challenge:"Rebuild a webpage layout using ONLY semantic tags. No <div> allowed. Include: header with nav, main with an article and aside, and a footer with copyright text.",
        hint:'<header><nav>...</nav></header>\n<main><article>...</article><aside>...</aside></main>\n<footer><p>\u{00A9} 2025</p></footer>',
        checks:[
          {type:"code_contains",   value:"<header>",  message:"Add a <header> element."},
          {type:"code_contains",   value:"<nav>",     message:"Add a <nav> inside the header."},
          {type:"code_contains",   value:"<main>",    message:"Add a <main> element."},
          {type:"code_contains",   value:"<article>", message:"Add an <article> inside main."},
          {type:"code_contains",   value:"<aside>",   message:"Add an <aside> inside main."},
          {type:"code_contains",   value:"<footer>",  message:"Add a <footer> element."},
          {type:"code_not_contains",value:"<div",     message:"Do not use <div> \u{2014} this challenge requires only semantic tags."},
        ],
        expected_outputs:[]
      },
    ]
  },

  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  //  CSS
  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  {
    id:"css", title:"CSS", emoji:"\u{1F3A8}",
    tagline:"Style the web beautifully",
    color:"#8b5cf6", accent:"#a78bfa",
    xp:450, lessons:22, projects:4, difficulty:"Beginner",
    description:"Make websites beautiful with CSS \u{2014} selectors, flexbox, grid, animations, and responsive design.",
    topics:["Selectors","Box Model","Colors & Fonts","Flexbox","CSS Grid","Animations","Responsive Design","Variables"],
    projects_list:[
      {title:"Styled Profile Card",difficulty:"Easy",xp:60},
      {title:"Animated Landing Page",difficulty:"Medium",xp:100},
      {title:"Responsive Dashboard",difficulty:"Hard",xp:150},
      {title:"CSS Art Piece",difficulty:"Medium",xp:90},
    ],
    lessons_data:[
      {
        id:1, title:"CSS Basics & Selectors", xp:20,
        theory:"CSS controls how HTML looks.\n\n```\nselector { property: value; }\n```\n\nSelectors:\n- `h1` \u{2014} element\n- `.class` \u{2014} class (reusable)\n- `#id` \u{2014} ID (unique)\n- `*` \u{2014} everything",
        code:'h1 { color: #00ff9f; font-size: 2rem; }\n.card { background: #1a1a2e; padding: 20px; border-radius: 12px; color: white; }\n#special { border: 2px solid gold; }',
        challenge:"Write CSS that: (1) targets all p elements and gives them a dark background (#0f0f1e), white text, and 16px padding; (2) creates a .highlight class with yellow color and bold font-weight.",
        hint:'p { background: #0f0f1e; color: white; padding: 16px; }\n.highlight { color: yellow; font-weight: bold; }',
        checks:[
          {type:"code_contains",value:"p {",        message:"Target the p element with a CSS rule."},
          {type:"code_contains",value:"background", message:"Add a background property to p."},
          {type:"code_contains",value:"padding",    message:"Add padding to p."},
          {type:"code_contains",value:".highlight", message:"Create a .highlight class."},
          {type:"code_contains",value:"font-weight",message:"Add font-weight to .highlight."},
        ],
        expected_outputs:[]
      },
      {
        id:2, title:"Colors & Typography", xp:20,
        theory:"Colors: named (`red`), hex (`#ff6b6b`), rgb, rgba, hsl.\n\nTypography: `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `text-align`.\n\nUse `rem` for font sizes (relative to root, better for accessibility).",
        code:'body { font-family: sans-serif; background: #07070f; color: #e8e8f0; }\nh1 { color: #00ff9f; font-size: 3rem; font-weight: 800; letter-spacing: -0.03em; }\np { font-size: 1rem; line-height: 1.7; color: rgba(255,255,255,0.6); }',
        challenge:"Style a page with: body using a sans-serif font, h1 with font-size of at least 2rem and a non-black color, p with line-height of 1.6 or higher. Use at least one rgba() color.",
        hint:'body { font-family: sans-serif; }\nh1 { font-size: 2.5rem; color: #00ff9f; }\np { line-height: 1.7; color: rgba(200,200,200,0.8); }',
        checks:[
          {type:"code_contains",value:"font-family",  message:"Set font-family on body."},
          {type:"code_contains",value:"font-size",    message:"Set font-size on h1."},
          {type:"code_contains",value:"line-height",  message:"Set line-height on p."},
          {type:"code_contains",value:"rgba(",        message:"Use at least one rgba() color value."},
        ],
        expected_outputs:[]
      },
      {
        id:3, title:"The Box Model", xp:25,
        theory:"Every element is a box:\n1. **Content**\n2. **Padding** \u{2014} inside the border\n3. **Border**\n4. **Margin** \u{2014} outside the border\n\nAlways add `box-sizing: border-box` \u{2014} it includes padding and border in the element's total size.",
        code:'.box {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #00ff9f;\n  margin: 20px auto;\n  background: #1a1a2e;\n  color: white;\n  box-sizing: border-box;\n}',
        challenge:"Create a .card class with: 24px padding, a 1px solid border with any color, 12px border-radius, 20px margin, a dark background color, white text, and box-sizing: border-box.",
        hint:'.card { padding: 24px; border: 1px solid #333; border-radius: 12px; margin: 20px; background: #1a1a2e; color: white; box-sizing: border-box; }',
        checks:[
          {type:"code_contains",value:".card",            message:"Create a .card class."},
          {type:"code_contains",value:"padding: 24px",    message:"Add padding: 24px."},
          {type:"code_contains",value:"border-radius: 12px",message:"Add border-radius: 12px."},
          {type:"code_contains",value:"box-sizing: border-box",message:"Add box-sizing: border-box."},
          {type:"code_contains",value:"background",       message:"Add a background color."},
          {type:"code_contains",value:"color: white",     message:"Set text color to white."},
        ],
        expected_outputs:[]
      },
      {
        id:4, title:"Flexbox", xp:30,
        theory:"Flexbox arranges items in a row or column.\n\n**Container**: `display:flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`.\n\n**Items**: `flex:1` (grow to fill), `align-self`.\n\n`justify-content: space-between` is perfect for navbars.",
        code:'.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background: #1a1a2e;\n}\n.links {\n  display: flex;\n  gap: 20px;\n}',
        challenge:"Build a navbar using flexbox. The .navbar container should have the logo on the left and links on the right using justify-content: space-between. The links should be in a row with a gap of at least 16px.",
        hint:'.navbar { display: flex; justify-content: space-between; align-items: center; }\n.nav-links { display: flex; gap: 20px; }',
        checks:[
          {type:"code_contains",value:"display: flex",             message:"Use display: flex on the navbar container."},
          {type:"code_contains",value:"justify-content: space-between",message:"Use justify-content: space-between to push logo left and links right."},
          {type:"code_contains",value:"align-items: center",       message:"Use align-items: center to vertically center items."},
          {type:"code_contains",value:"gap:",                      message:"Add a gap between the nav links."},
        ],
        expected_outputs:[]
      },
      {
        id:5, title:"CSS Grid", xp:30,
        theory:"CSS Grid handles 2D layouts \u{2014} rows AND columns.\n\n- `display: grid`\n- `grid-template-columns: repeat(3, 1fr)` \u{2014} 3 equal columns\n- `gap` \u{2014} space between cells\n- `grid-column: span 2` \u{2014} span multiple columns\n- `minmax(250px, 1fr)` with `auto-fill` = responsive!",
        code:'.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.featured { grid-column: span 2; }',
        challenge:"Create a .gallery grid with 4 equal columns and a 12px gap. Make a .featured class that spans 2 columns. Make a .full-width class that spans all 4 columns.",
        hint:'.gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }\n.featured { grid-column: span 2; }\n.full-width { grid-column: span 4; }',
        checks:[
          {type:"code_contains",value:"display: grid",             message:"Use display: grid."},
          {type:"code_contains",value:"grid-template-columns",     message:"Define grid-template-columns."},
          {type:"code_contains",value:"repeat(4",                  message:"Create 4 columns using repeat(4, 1fr)."},
          {type:"code_contains",value:"gap:",                      message:"Add a gap between grid items."},
          {type:"code_contains",value:"grid-column: span 2",       message:"Create a .featured class that spans 2 columns."},
          {type:"code_contains",value:"grid-column: span 4",       message:"Create a .full-width class that spans all 4 columns."},
        ],
        expected_outputs:[]
      },
      {
        id:6, title:"Animations & Transitions", xp:35,
        theory:"**Transitions**: smooth change between two states.\n```\ntransition: property duration easing;\n```\n\n**Animations**: `@keyframes` defines steps.\n```\n@keyframes spin { from{...} to{...} }\nanimation: spin 1s linear infinite;\n```\n\nUse `transform` for performance (translate, scale, rotate).",
        code:'.btn {\n  background: #00ff9f;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0,255,159,0.4);\n}\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n.spinner { animation: spin 1s linear infinite; }',
        challenge:"Create a .box element that: (1) smoothly transitions all properties over 0.3s, (2) on hover scales up to 1.1x and changes background color. Also write a @keyframes fadeIn that goes from opacity 0 to opacity 1.",
        hint:'.box { transition: all 0.3s ease; background: #3b82f6; }\n.box:hover { transform: scale(1.1); background: #00ff9f; }\n@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }',
        checks:[
          {type:"code_contains",value:"transition:",          message:"Add a transition property."},
          {type:"code_contains",value:":hover",               message:"Add a :hover rule."},
          {type:"code_contains",value:"transform: scale",     message:"Use transform: scale() on hover."},
          {type:"code_contains",value:"@keyframes fadeIn",    message:"Define a @keyframes called fadeIn."},
          {type:"code_contains",value:"opacity: 0",           message:"Start the fadeIn animation at opacity: 0."},
          {type:"code_contains",value:"opacity: 1",           message:"End the fadeIn animation at opacity: 1."},
        ],
        expected_outputs:[]
      },
    ]
  },

  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  //  JAVASCRIPT
  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  {
    id:"javascript", title:"JavaScript", emoji:"\u{26A1}",
    tagline:"Make the web interactive",
    color:"#eab308", accent:"#facc15",
    xp:600, lessons:28, projects:5, difficulty:"Beginner\u{2013}Intermediate",
    description:"The language of the web. Learn JavaScript to add interactivity, manipulate the DOM, and build dynamic applications.",
    topics:["Variables & Types","Functions","Arrays & Objects","DOM","Events","Async/Await","Fetch API","ES6+"],
    projects_list:[
      {title:"Interactive Quiz App",difficulty:"Easy",xp:80},
      {title:"Weather App",difficulty:"Medium",xp:120},
      {title:"Expense Tracker",difficulty:"Medium",xp:130},
      {title:"Pomodoro Timer",difficulty:"Easy",xp:75},
      {title:"Memory Card Game",difficulty:"Hard",xp:160},
    ],
    lessons_data:[
      {
        id:1, title:"Variables: let, const, var", xp:20,
        theory:"- `const` \u{2014} cannot be reassigned. Use by default.\n- `let` \u{2014} can be reassigned.\n- `var` \u{2014} old, avoid it.\n\nStart with `const`, switch to `let` only if you need to reassign.",
        code:'const name = "Alex";\nlet score = 0;\nscore = 100;\nconsole.log(name, score);\n\nconst player = { name: "Alex", level: 1 };\nplayer.level = 2; // objects CAN be mutated\nconsole.log(player);',
        challenge:"Declare a const called `name` with your name. Declare a let called `score` starting at 0. Add 75 to score, then log both. Also create an object called `user` with name and score properties and log it.",
        hint:'const name = "Alex";\nlet score = 0;\nscore += 75;\nconst user = { name, score };\nconsole.log(name, score);\nconsole.log(user);',
        checks:[
          {type:"code_contains",  value:"const name",    message:"Declare a const called name."},
          {type:"code_contains",  value:"let score",     message:"Declare a let called score."},
          {type:"code_contains",  value:"+= 75",         message:"Add 75 to score using += 75."},
          {type:"code_contains",  value:"console.log(",  message:"Use console.log() to display results."},
          {type:"output_contains",value:"75",            message:"Your output should contain 75 (the score after adding 75)."},
        ],
        expected_outputs:[]
      },
      {
        id:2, title:"Functions & Arrow Functions", xp:25,
        theory:"**Regular**: `function greet(name) { return 'Hi ' + name; }`\n**Arrow**: `const greet = (name) => 'Hi ' + name;`\n\nArrow functions are shorter and don't have their own `this`. For single expressions, omit `{}` and `return`.",
        code:'const square = (n) => n * n;\nconst add = (a, b) => a + b;\nconst greet = (name = "stranger") => `Hello, ${name}!`;\n\nconsole.log(square(4));\nconsole.log(add(5, 7));\nconsole.log(greet());\nconsole.log(greet("Alex"));',
        challenge:"Write two arrow functions: (1) `multiply(a, b)` that returns a * b, (2) `isEven(n)` that returns true if n is even, false otherwise. Test: log multiply(6, 7) and isEven(10) and isEven(7).",
        hint:'const multiply = (a, b) => a * b;\nconst isEven = (n) => n % 2 === 0;\nconsole.log(multiply(6, 7));\nconsole.log(isEven(10));\nconsole.log(isEven(7));',
        checks:[
          {type:"code_contains",  value:"multiply",    message:"Define an arrow function called multiply."},
          {type:"code_contains",  value:"isEven",      message:"Define an arrow function called isEven."},
          {type:"code_contains",  value:"=>",          message:"Use arrow function syntax =>."},
          {type:"output_contains",value:"42",          message:"multiply(6, 7) should log 42."},
          {type:"output_contains",value:"true",        message:"isEven(10) should log true."},
          {type:"output_contains",value:"false",       message:"isEven(7) should log false."},
        ],
        expected_outputs:["42","true","false"]
      },
      {
        id:3, title:"Arrays & Array Methods", xp:30,
        theory:"- `map()` \u{2014} transform each item\n- `filter()` \u{2014} keep matching items\n- `reduce()` \u{2014} combine into one value\n- `find()` \u{2014} first matching item\n- `includes()` \u{2014} check existence\n\nThese return new arrays (no mutation).",
        code:'const nums = [1,2,3,4,5,6,7,8,9,10];\nconsole.log(nums.filter(n => n % 2 === 0));\nconsole.log(nums.map(n => n * 2));\nconsole.log(nums.reduce((acc, n) => acc + n, 0));',
        challenge:"Given `const nums = [1,2,3,4,5,6,7,8,9,10]`, use: (1) filter to get only numbers > 5, (2) map to square those numbers, (3) reduce to sum the squares. Log each result separately.",
        hint:'const nums = [1,2,3,4,5,6,7,8,9,10];\nconst gt5 = nums.filter(n => n > 5);\nconsole.log(gt5);\nconst squared = gt5.map(n => n * n);\nconsole.log(squared);\nconsole.log(squared.reduce((a,b) => a+b, 0));',
        checks:[
          {type:"code_contains",  value:".filter(",   message:"Use .filter() to get numbers > 5."},
          {type:"code_contains",  value:".map(",      message:"Use .map() to square the numbers."},
          {type:"code_contains",  value:".reduce(",   message:"Use .reduce() to sum the squares."},
          {type:"output_contains",value:"6",          message:"filter result should include 6 (numbers > 5 start at 6)."},
          {type:"output_contains",value:"36",         message:"6 squared is 36 \u{2014} it should appear in your squared array output."},
          {type:"output_contains",value:"330",        message:"The sum of squares of 6,7,8,9,10 is 330."},
        ],
        expected_outputs:["330"]
      },
      {
        id:4, title:"Objects & Destructuring", xp:25,
        theory:"**Destructuring** extracts values:\n`const { name, age } = person;`\n\n**Spread** copies properties:\n`const updated = { ...person, age: 26 };`\n\n**Optional chaining** `?.` safely accesses nested props.",
        code:'const person = { name:"Alex", age:25, city:"Accra" };\nconst { name, age } = person;\nconsole.log(name, age);\nconst updated = { ...person, age: 26 };\nconsole.log(updated);',
        challenge:"Create an object `product` with name, price (100), and category. Use destructuring to extract all three values into variables. Use spread to create `discounted` with a 20% lower price (price * 0.8). Log both objects.",
        hint:'const product = { name: "Laptop", price: 100, category: "Electronics" };\nconst { name, price, category } = product;\nconst discounted = { ...product, price: price * 0.8 };\nconsole.log(product);\nconsole.log(discounted);',
        checks:[
          {type:"code_contains",  value:"const product",   message:"Create an object called product."},
          {type:"code_contains",  value:"const {",         message:"Use destructuring to extract properties."},
          {type:"code_contains",  value:"...product",      message:"Use the spread operator ...product to copy the object."},
          {type:"code_contains",  value:"* 0.8",           message:"Apply 20% discount by multiplying price by 0.8."},
          {type:"output_contains",value:"80",              message:"The discounted price of 100 * 0.8 = 80 should appear in your output."},
        ],
        expected_outputs:[]
      },
      {
        id:5, title:"Async/Await & Fetch", xp:35,
        theory:"`async/await` is the modern way to handle Promises.\n\n- `async` before a function makes it return a Promise\n- `await` pauses until a Promise resolves\n- Always use `try/catch` to handle errors\n\nThe `fetch` API retrieves data from URLs.",
        code:'async function getUser() {\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");\n    const user = await res.json();\n    console.log("Name:", user.name);\n    console.log("Email:", user.email);\n  } catch (err) {\n    console.error("Error:", err.message);\n  }\n}\ngetUser();',
        challenge:"Write an async function called `getTodo` that fetches from 'https://jsonplaceholder.typicode.com/todos/5'. Log the todo's title and whether it is completed (true/false). Call the function.",
        hint:'async function getTodo() {\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/todos/5");\n    const todo = await res.json();\n    console.log(todo.title);\n    console.log(todo.completed);\n  } catch(e) { console.error(e); }\n}\ngetTodo();',
        checks:[
          {type:"code_contains",value:"async function getTodo",      message:"Define an async function called getTodo."},
          {type:"code_contains",value:"await fetch(",                message:"Use await fetch() to get the data."},
          {type:"code_contains",value:"todos/5",                    message:"Fetch from the todos/5 endpoint."},
          {type:"code_contains",value:"todo.title",                  message:"Log todo.title."},
          {type:"code_contains",value:"todo.completed",              message:"Log todo.completed."},
          {type:"code_contains",value:"getTodo()",                   message:"Call the getTodo function."},
        ],
        expected_outputs:[]
      },
    ]
  },

  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  //  REACT
  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  {
    id:"react", title:"React", emoji:"\u{269B}\u{FE0F}",
    tagline:"Build modern UIs with components",
    color:"#06b6d4", accent:"#22d3ee",
    xp:700, lessons:30, projects:5, difficulty:"Intermediate",
    description:"The most popular frontend library. Learn components, hooks, state, and build real-world applications.",
    topics:["JSX","Components","Props","useState","useEffect","Forms","React Router","Context API"],
    projects_list:[
      {title:"Todo App with Hooks",difficulty:"Easy",xp:80},
      {title:"Movie Search App",difficulty:"Medium",xp:130},
      {title:"E-commerce Cart",difficulty:"Hard",xp:180},
      {title:"Real-time Chat UI",difficulty:"Hard",xp:170},
      {title:"Dashboard Analytics",difficulty:"Hard",xp:200},
    ],
    lessons_data:[
      {
        id:1, title:"Components & JSX", xp:25,
        theory:"React UIs are built from **components** \u{2014} JavaScript functions that return JSX.\n\nJSX rules:\n- Component names must be **Capitalized**\n- Use `className` not `class`\n- Must have **one root element** (or use `<>...</>` fragments)\n- JavaScript goes in `{curly braces}`\n- Self-close empty tags: `<img />`, `<br />`",
        code:'function WelcomeCard({ name, level }) {\n  return (\n    <div style={{padding:20,background:"#1a1a2e",borderRadius:12,color:"white"}}>\n      <h2 style={{color:"#00ff9f"}}>Welcome, {name}!</h2>\n      <p>Level: {level}</p>\n      <p>XP to next level: {level * 100}</p>\n    </div>\n  );\n}\nconsole.log("Component defined");',
        challenge:"Write a React component called `ProfileCard` that accepts props: `name`, `role`, and `xp`. It should render a div containing those three values. Use it with at least two different sets of props in a comment. Must use JSX with className (not class).",
        hint:'function ProfileCard({ name, role, xp }) {\n  return (\n    <div className="card">\n      <h2>{name}</h2>\n      <p>{role}</p>\n      <span>XP: {xp}</span>\n    </div>\n  );\n}',
        checks:[
          {type:"code_contains",value:"function ProfileCard",  message:"Define a function called ProfileCard."},
          {type:"code_contains",value:"{ name",               message:"Accept name as a prop via destructuring."},
          {type:"code_contains",value:"role",                  message:"Accept role as a prop."},
          {type:"code_contains",value:"xp",                   message:"Accept xp as a prop."},
          {type:"code_contains",value:"return (",              message:"Return JSX from the component."},
          {type:"code_contains",value:"{name}",               message:"Render the name prop in JSX using {name}."},
        ],
        expected_outputs:[]
      },
      {
        id:2, title:"useState Hook", xp:30,
        theory:"State is **data that changes** and causes re-renders.\n\n```\nconst [value, setValue] = useState(initialValue);\n```\n\nNever mutate state directly. Always use the setter function. Each state update triggers a re-render.",
        code:'const { useState } = React;\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div style={{padding:20,color:"white",background:"#1a1a2e",borderRadius:12}}>\n      <h2 style={{color:"#00ff9f"}}>Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n      <button onClick={() => setCount(count - 1)} style={{marginLeft:8}}>-1</button>\n      <button onClick={() => setCount(0)} style={{marginLeft:8}}>Reset</button>\n    </div>\n  );\n}\nconsole.log("Counter component ready");',
        challenge:"Build a component called `ScoreBoard` with useState. It should have a score starting at 0. Add three buttons: '+10' adds 10, '-5' subtracts 5, 'Reset' sets to 0. Display the current score in an h2.",
        hint:'const { useState } = React;\nfunction ScoreBoard() {\n  const [score, setScore] = useState(0);\n  return (\n    <div>\n      <h2>Score: {score}</h2>\n      <button onClick={() => setScore(score + 10)}>+10</button>\n      <button onClick={() => setScore(score - 5)}>-5</button>\n      <button onClick={() => setScore(0)}>Reset</button>\n    </div>\n  );\n}',
        checks:[
          {type:"code_contains",value:"const { useState }",      message:"Import useState from React."},
          {type:"code_contains",value:"function ScoreBoard",      message:"Define a component called ScoreBoard."},
          {type:"code_contains",value:"useState(0)",              message:"Initialise score state to 0 with useState(0)."},
          {type:"code_contains",value:"setScore(score + 10)",     message:"Add 10 on click using setScore(score + 10)."},
          {type:"code_contains",value:"setScore(score - 5)",      message:"Subtract 5 on click using setScore(score - 5)."},
          {type:"code_contains",value:"setScore(0)",              message:"Reset to 0 using setScore(0)."},
          {type:"code_contains",value:"{score}",                  message:"Display the score in JSX using {score}."},
        ],
        expected_outputs:[]
      },
      {
        id:3, title:"useEffect Hook", xp:35,
        theory:"**useEffect** handles side effects \u{2014} data fetching, timers, subscriptions.\n\n```\nuseEffect(() => {\n  // effect\n  return () => { /* cleanup */ };\n}, [dependencies]);\n```\n\n- `[]` \u{2014} runs once after mount\n- `[value]` \u{2014} runs when `value` changes\n- No array \u{2014} runs after every render",
        code:'const { useState, useEffect } = React;\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n  const [running, setRunning] = useState(false);\n\n  useEffect(() => {\n    if (!running) return;\n    const interval = setInterval(() => setSeconds(s => s + 1), 1000);\n    return () => clearInterval(interval); // cleanup!\n  }, [running]);\n\n  return (\n    <div style={{padding:20,color:"white",background:"#1a1a2e",borderRadius:12}}>\n      <h2 style={{color:"#00ff9f"}}>{seconds}s</h2>\n      <button onClick={() => setRunning(!running)}>{running ? "Pause" : "Start"}</button>\n      <button onClick={() => { setRunning(false); setSeconds(0); }} style={{marginLeft:8}}>Reset</button>\n    </div>\n  );\n}\nconsole.log("Timer with useEffect ready");',
        challenge:"Write a component called `WindowWidth` that uses useEffect and useState to track the window's width. Use window.addEventListener('resize', handler) in the effect and clean it up. Display 'Window width: Xpx' in the component.",
        hint:'const { useState, useEffect } = React;\nfunction WindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const handler = () => setWidth(window.innerWidth);\n    window.addEventListener("resize", handler);\n    return () => window.removeEventListener("resize", handler);\n  }, []);\n  return <p>Window width: {width}px</p>;\n}',
        checks:[
          {type:"code_contains",value:"const { useState, useEffect }",  message:"Import both useState and useEffect from React."},
          {type:"code_contains",value:"function WindowWidth",           message:"Define a component called WindowWidth."},
          {type:"code_contains",value:"useState(window.innerWidth)",     message:"Initialise state with window.innerWidth."},
          {type:"code_contains",value:"useEffect(",                     message:"Use the useEffect hook."},
          {type:"code_contains",value:"addEventListener",               message:"Add an event listener for resize."},
          {type:"code_contains",value:"removeEventListener",            message:"Remove the event listener in the cleanup function (return () => ...)."},
          {type:"code_contains",value:"{width}",                        message:"Display the width in JSX using {width}."},
        ],
        expected_outputs:[]
      },
    ]
  },

  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  //  GIT
  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  {
    id:"git", title:"Git & GitHub", emoji:"\u{1F33F}",
    tagline:"Version control like a pro",
    color:"#f43f5e", accent:"#fb7185",
    xp:300, lessons:16, projects:2, difficulty:"Beginner",
    description:"Every developer needs Git. Track changes, collaborate with others, and contribute to open source.",
    topics:["Init & Config","Add & Commit","Branches","Merge & Rebase","Push & Pull","GitHub Flow","Pull Requests","Open Source"],
    projects_list:[
      {title:"Your First GitHub Repo",difficulty:"Easy",xp:50},
      {title:"Collaborate on a Project",difficulty:"Medium",xp:100},
    ],
    lessons_data:[
      {
        id:1, title:"What is Git?", xp:20,
        theory:"Git is a **version control system** \u{2014} a time machine for your code.\n\n- **Repository**: A project tracked by Git\n- **Commit**: A snapshot in time\n- **Branch**: A parallel version\n- **Remote**: Hosted copy (GitHub)\n\nWithout Git, one mistake can destroy hours of work.",
        code:'git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"\nmkdir my-project\ncd my-project\ngit init\ngit status',
        challenge:"Write the commands to: (1) configure your git username as 'YourName', (2) configure your email, (3) create a new folder called 'portfolio', (4) navigate into it, (5) initialise a git repo.",
        hint:'git config --global user.name "YourName"\ngit config --global user.email "you@email.com"\nmkdir portfolio\ncd portfolio\ngit init',
        checks:[
          {type:"code_contains",value:"git config --global user.name",   message:"Configure your git username with: git config --global user.name"},
          {type:"code_contains",value:"git config --global user.email",  message:"Configure your git email with: git config --global user.email"},
          {type:"code_contains",value:"mkdir portfolio",                  message:"Create the folder with: mkdir portfolio"},
          {type:"code_contains",value:"cd portfolio",                    message:"Navigate into it with: cd portfolio"},
          {type:"code_contains",value:"git init",                        message:"Initialise the repo with: git init"},
        ],
        expected_outputs:[]
      },
      {
        id:2, title:"Add, Commit, Push", xp:25,
        theory:"The core workflow:\n1. Edit files\n2. `git add .` \u{2014} stage changes\n3. `git commit -m 'message'` \u{2014} snapshot\n4. `git push` \u{2014} upload to GitHub\n\nGood commit messages: present tense, under 72 chars, describe WHAT changed.",
        code:'git add index.html\ngit add .\ngit commit -m "Add homepage layout"\ngit remote add origin https://github.com/user/repo.git\ngit push -u origin main\ngit log --oneline',
        challenge:"Write the full workflow to stage ALL files, commit with message 'Add README and homepage', connect to a remote called origin at https://github.com/yourname/myproject.git, and push to main.",
        hint:'git add .\ngit commit -m "Add README and homepage"\ngit remote add origin https://github.com/yourname/myproject.git\ngit push -u origin main',
        checks:[
          {type:"code_contains",value:"git add .",                        message:"Stage all files with: git add ."},
          {type:"code_contains",value:'git commit -m "Add README and homepage"',message:'Commit with exact message: git commit -m "Add README and homepage"'},
          {type:"code_contains",value:"git remote add origin",            message:"Add the remote with: git remote add origin <url>"},
          {type:"code_contains",value:"git push",                         message:"Push with: git push"},
        ],
        expected_outputs:[]
      },
      {
        id:3, title:"Branches", xp:25,
        theory:"Branches let you work on features without touching main code.\n\n- `git branch` \u{2014} list branches\n- `git checkout -b name` \u{2014} create and switch\n- `git checkout main` \u{2014} switch to main\n- `git merge name` \u{2014} merge into current branch\n- `git branch -d name` \u{2014} delete branch",
        code:'git checkout -b feature/login-page\ngit add .\ngit commit -m "Add login form"\ngit checkout main\ngit merge feature/login-page\ngit branch -d feature/login-page',
        challenge:"Write the commands to: (1) create and switch to a branch called 'feature/navbar', (2) commit all changes with message 'Add navbar component', (3) switch back to main, (4) merge the feature branch, (5) delete the feature branch.",
        hint:'git checkout -b feature/navbar\ngit add .\ngit commit -m "Add navbar component"\ngit checkout main\ngit merge feature/navbar\ngit branch -d feature/navbar',
        checks:[
          {type:"code_contains",value:"git checkout -b feature/navbar",    message:"Create and switch with: git checkout -b feature/navbar"},
          {type:"code_contains",value:'git commit -m "Add navbar component"',message:'Commit with: git commit -m "Add navbar component"'},
          {type:"code_contains",value:"git checkout main",                  message:"Switch back to main: git checkout main"},
          {type:"code_contains",value:"git merge feature/navbar",           message:"Merge with: git merge feature/navbar"},
          {type:"code_contains",value:"git branch -d feature/navbar",       message:"Delete the branch: git branch -d feature/navbar"},
        ],
        expected_outputs:[]
      },
      {
        id:4, title:"GitHub Flow", xp:30,
        theory:"**GitHub Flow** is the standard team workflow:\n\n1. Pull latest main\n2. Create a feature branch\n3. Commit your work\n4. Push the branch\n5. Open a Pull Request on GitHub\n6. Merge and clean up\n\nNever push directly to main on shared projects!",
        code:'git checkout main\ngit pull origin main\ngit checkout -b feature/dark-mode\ngit add .\ngit commit -m "Add dark mode toggle"\ngit push origin feature/dark-mode\n# Open PR on GitHub\ngit checkout main\ngit pull origin main\ngit branch -d feature/dark-mode',
        challenge:"Write the complete GitHub Flow for adding a feature called 'feature/profile-page'. Start by pulling latest main, create the branch, commit with message 'Add profile page', push the branch, then clean up after merging.",
        hint:'git checkout main\ngit pull origin main\ngit checkout -b feature/profile-page\ngit add .\ngit commit -m "Add profile page"\ngit push origin feature/profile-page\ngit checkout main\ngit pull origin main\ngit branch -d feature/profile-page',
        checks:[
          {type:"code_contains",value:"git pull origin main",            message:"Start by pulling latest main: git pull origin main"},
          {type:"code_contains",value:"git checkout -b feature/profile-page",message:"Create branch: git checkout -b feature/profile-page"},
          {type:"code_contains",value:'git commit -m "Add profile page"',message:'Commit with: git commit -m "Add profile page"'},
          {type:"code_contains",value:"git push origin feature/profile-page",message:"Push the branch: git push origin feature/profile-page"},
          {type:"code_contains",value:"git branch -d feature/profile-page",  message:"Delete after merging: git branch -d feature/profile-page"},
        ],
        expected_outputs:[]
      },
    ]
  },

  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  //  DSA
  // \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
  {
    id:"dsa", title:"Data Structures & Algorithms", emoji:"\u{1F9E9}",
    tagline:"Think like a computer scientist",
    color:"#10b981", accent:"#34d399",
    xp:800, lessons:35, projects:3, difficulty:"Intermediate\u{2013}Advanced",
    description:"Master the fundamentals of CS \u{2014} data structures, algorithms, and problem-solving patterns for technical interviews.",
    topics:["Big O","Arrays","Linked Lists","Stacks & Queues","Trees","Graphs","Sorting","Searching","Dynamic Programming","Recursion"],
    projects_list:[
      {title:"Sorting Visualizer",difficulty:"Medium",xp:150},
      {title:"Pathfinding Visualizer",difficulty:"Hard",xp:200},
      {title:"LeetCode Tracker",difficulty:"Medium",xp:120},
    ],
    lessons_data:[
      {
        id:1, title:"Big O Notation", xp:30,
        theory:"Big O describes how runtime scales with input size `n`.\n\n- **O(1)** \u{2014} Constant (dictionary lookup)\n- **O(log n)** \u{2014} Logarithmic (binary search)\n- **O(n)** \u{2014} Linear (single loop)\n- **O(n log n)** \u{2014} Log-linear (merge sort)\n- **O(n\u{00B2})** \u{2014} Quadratic (nested loops)\n\nWe always care about **worst case** and drop constants.",
        code:'def get_first(arr): return arr[0]           # O(1)\n\ndef find_max(arr):                            # O(n)\n    m = arr[0]\n    for x in arr:\n        if x > m: m = x\n    return m\n\ndef has_pair_sum(arr, target):               # O(n)\n    seen = set()\n    for n in arr:\n        if target - n in seen: return True\n        seen.add(n)\n    return False\n\nprint(find_max([3,1,7,2,9,4]))\nprint(has_pair_sum([2,7,11,15], 9))',
        challenge:"Write two functions to check for duplicates in a list. First: `slow_has_dup(arr)` using nested loops \u{2014} O(n\u{00B2}). Second: `fast_has_dup(arr)` using a set \u{2014} O(n). Test both with [1,2,3,1] and print results.",
        hint:'def slow_has_dup(arr):\n    for i in range(len(arr)):\n        for j in range(i+1, len(arr)):\n            if arr[i] == arr[j]: return True\n    return False\n\ndef fast_has_dup(arr):\n    seen = set()\n    for n in arr:\n        if n in seen: return True\n        seen.add(n)\n    return False\n\nprint(slow_has_dup([1,2,3,1]))\nprint(fast_has_dup([1,2,3,1]))',
        checks:[
          {type:"code_contains",  value:"def slow_has_dup",   message:"Define slow_has_dup using nested loops."},
          {type:"code_contains",  value:"def fast_has_dup",   message:"Define fast_has_dup using a set."},
          {type:"code_contains",  value:"set()",              message:"Use a set() for the fast version."},
          {type:"output_contains",value:"True",               message:"Both functions should return True for [1,2,3,1]."},
        ],
        expected_outputs:["True","True"]
      },
      {
        id:2, title:"Two Pointers", xp:30,
        theory:"**Two pointers** solve many array problems in O(n) instead of O(n\u{00B2}).\n\nPatterns:\n- Opposite ends moving inward (palindrome, two-sum in sorted array)\n- Fast/slow pointers (cycle detection)\n- Sliding window (substring problems)",
        code:'def is_palindrome(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        if s[left] != s[right]: return False\n        left += 1\n        right -= 1\n    return True\n\ndef reverse_array(arr):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    return arr\n\nprint(is_palindrome("racecar"))\nprint(reverse_array([1,2,3,4,5]))',
        challenge:"Write `two_sum_sorted(arr, target)` using two pointers (not a hash map). The array is already sorted. Return the indices [i, j] of the two numbers that add up to target. Test with ([1,3,5,7,9], 12).",
        hint:'def two_sum_sorted(arr, target):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        s = arr[left] + arr[right]\n        if s == target: return [left, right]\n        elif s < target: left += 1\n        else: right -= 1\n    return []\nprint(two_sum_sorted([1,3,5,7,9], 12))',
        checks:[
          {type:"code_contains",  value:"def two_sum_sorted",  message:"Define a function called two_sum_sorted."},
          {type:"code_contains",  value:"left, right",         message:"Use two pointer variables called left and right."},
          {type:"code_contains",  value:"while left < right",  message:"Use a while loop with condition left < right."},
          {type:"output_contains",value:"1",                   message:"Index 1 (value 3) should be in the result for ([1,3,5,7,9], 12)."},
          {type:"output_contains",value:"4",                   message:"Index 4 (value 9) should be in the result \u{2014} 3+9=12."},
        ],
        expected_outputs:[]
      },
      {
        id:3, title:"Stacks & Queues", xp:30,
        theory:"**Stack** (LIFO): push/pop from same end. Use for: undo, call stack, brackets.\n**Queue** (FIFO): add to back, remove from front. Use for: BFS, scheduling.\n\nPython: lists = stacks. `collections.deque` = efficient queue.",
        code:'from collections import deque\nstack = []\nstack.append(1); stack.append(2); stack.append(3)\nprint("Stack pop:", stack.pop())\n\nqueue = deque()\nqueue.append("A"); queue.append("B")\nprint("Queue dequeue:", queue.popleft())',
        challenge:"Write `is_balanced(s)` that checks if brackets are balanced using a stack. '({[]})' \u{2192} True, '([)]' \u{2192} False, '{{{' \u{2192} False. Test all three and print the results.",
        hint:'def is_balanced(s):\n    stack = []\n    pairs = {")":"(", "]":"[", "}":"{"}\n    for c in s:\n        if c in "([{":\n            stack.append(c)\n        elif c in ")]}":\n            if not stack or stack[-1] != pairs[c]: return False\n            stack.pop()\n    return len(stack) == 0\nprint(is_balanced("({[]})"))\nprint(is_balanced("([)]"))\nprint(is_balanced("{{{"))',
        checks:[
          {type:"code_contains",  value:"def is_balanced",    message:"Define a function called is_balanced."},
          {type:"code_contains",  value:"stack",              message:"Use a stack (list) in your solution."},
          {type:"code_contains",  value:"stack.pop()",        message:"Pop from the stack when a closing bracket is found."},
          {type:"output_contains",value:"True",               message:"is_balanced('({[]})') should be True."},
          {type:"output_contains",value:"False",              message:"is_balanced('([)]') and is_balanced('{{{') should be False."},
        ],
        expected_outputs:["True","False","False"]
      },
      {
        id:4, title:"Recursion", xp:35,
        theory:"Recursion: a function that **calls itself** on a smaller input.\n\nEvery recursive function needs:\n1. **Base case** \u{2014} when to stop\n2. **Recursive case** \u{2014} smaller version of the problem\n\nThink: solve the tiny piece, trust recursion for the rest.",
        code:'def factorial(n):\n    if n <= 1: return 1          # base case\n    return n * factorial(n - 1)  # recursive case\n\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\n\nprint(factorial(6))\nprint(fib(10))',
        challenge:"Write a recursive function `power(base, exp)` that computes base^exp WITHOUT using ** or pow(). power(2, 10) should return 1024. Print the result.",
        hint:'def power(base, exp):\n    if exp == 0: return 1\n    return base * power(base, exp - 1)\nprint(power(2, 10))',
        checks:[
          {type:"code_contains",  value:"def power",          message:"Define a recursive function called power."},
          {type:"code_contains",  value:"if exp == 0",        message:"Include the base case: if exp == 0, return 1."},
          {type:"code_contains",  value:"power(base, exp - 1)",message:"Recursive call: return base * power(base, exp - 1)."},
          {type:"code_not_contains",value:"**",               message:"Do not use ** \u{2014} compute it yourself recursively."},
          {type:"code_not_contains",value:"pow(",             message:"Do not use pow() \u{2014} compute it yourself recursively."},
          {type:"output_contains",value:"1024",               message:"power(2, 10) should output 1024."},
        ],
        expected_outputs:["1024"]
      },
      {
        id:5, title:"Sorting Algorithms", xp:35,
        theory:"Must-know sorts:\n- **Bubble Sort** O(n\u{00B2}) \u{2014} compare adjacent, swap\n- **Selection Sort** O(n\u{00B2}) \u{2014} find min, swap to front\n- **Insertion Sort** O(n\u{00B2}) \u{2014} build sorted portion\n- **Merge Sort** O(n log n) \u{2014} divide and conquer\n\nPython's built-in `sort()` uses Timsort \u{2014} O(n log n).",
        code:'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\nprint(bubble_sort([64,34,25,12,22,11,90]))',
        challenge:"Implement `selection_sort(arr)`: repeatedly find the minimum in the unsorted part and swap it to the front. Sort [29,10,14,37,13] and print the result. Do NOT use Python's built-in sort().",
        hint:'def selection_sort(arr):\n    for i in range(len(arr)):\n        min_idx = i\n        for j in range(i+1, len(arr)):\n            if arr[j] < arr[min_idx]: min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\nprint(selection_sort([29,10,14,37,13]))',
        checks:[
          {type:"code_contains",   value:"def selection_sort",  message:"Define a function called selection_sort."},
          {type:"code_contains",   value:"min_idx",             message:"Track the minimum index with a variable called min_idx."},
          {type:"code_not_contains",value:".sort()",            message:"Do not use Python's built-in .sort() \u{2014} implement it yourself."},
          {type:"code_not_contains",value:"sorted(",            message:"Do not use sorted() \u{2014} implement selection sort manually."},
          {type:"output_contains", value:"10",                  message:"The sorted result should start with 10 (the smallest)."},
          {type:"output_contains", value:"37",                  message:"37 should be last in the sorted result."},
        ],
        expected_outputs:["[10, 13, 14, 29, 37]"]
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
