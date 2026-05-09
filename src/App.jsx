import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CoursePage from './pages/CoursePage'
import LessonPage from './pages/LessonPage'
import Profile from './pages/Profile'
import Playground from './pages/Playground'

export default function App() {
  return (
    <div className="noise">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </div>
  )
}
