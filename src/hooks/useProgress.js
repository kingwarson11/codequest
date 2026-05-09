import { useState, useEffect } from 'react';

const DEFAULT_PROGRESS = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActive: null,
  completedLessons: {},   // { courseId: [lessonId, ...] }
  completedProjects: {},  // { courseId: [projectTitle, ...] }
  unlockedBadges: [],
  totalTime: 0,
};

const BADGES = [
  { id: 'first_lesson', title: 'First Steps', emoji: '👣', desc: 'Complete your first lesson', condition: (p) => Object.values(p.completedLessons).flat().length >= 1 },
  { id: 'python_starter', title: 'Python Starter', emoji: '🐍', desc: 'Complete 3 Python lessons', condition: (p) => (p.completedLessons['python'] || []).length >= 3 },
  { id: 'html_builder', title: 'Web Builder', emoji: '🏗️', desc: 'Complete 2 HTML lessons', condition: (p) => (p.completedLessons['html'] || []).length >= 2 },
  { id: 'xp_100', title: 'XP Hunter', emoji: '⚡', desc: 'Earn 100 XP', condition: (p) => p.xp >= 100 },
  { id: 'xp_500', title: 'XP Warrior', emoji: '🏆', desc: 'Earn 500 XP', condition: (p) => p.xp >= 500 },
  { id: 'streak_3', title: 'On Fire!', emoji: '🔥', desc: '3-day learning streak', condition: (p) => p.streak >= 3 },
  { id: 'multi_course', title: 'Explorer', emoji: '🗺️', desc: 'Start 3 different courses', condition: (p) => Object.keys(p.completedLessons).length >= 3 },
  { id: 'level_5', title: 'Level 5!', emoji: '🌟', desc: 'Reach Level 5', condition: (p) => p.level >= 5 },
];

function calcLevel(xp) {
  return Math.floor(xp / 100) + 1;
}

function xpToNextLevel(xp) {
  const nextLevelXP = (calcLevel(xp)) * 100;
  return { needed: nextLevelXP, current: xp % 100, percent: Math.round((xp % 100) / 100 * 100) };
}

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('codequest_progress');
      return saved ? { ...DEFAULT_PROGRESS, ...JSON.parse(saved) } : DEFAULT_PROGRESS;
    } catch {
      return DEFAULT_PROGRESS;
    }
  });

  useEffect(() => {
    localStorage.setItem('codequest_progress', JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (courseId, lessonId, xpReward) => {
    setProgress(prev => {
      const courseLessons = prev.completedLessons[courseId] || [];
      if (courseLessons.includes(lessonId)) return prev; // already done

      const newCompleted = {
        ...prev.completedLessons,
        [courseId]: [...courseLessons, lessonId]
      };
      const newXP = prev.xp + xpReward;
      const newProgress = {
        ...prev,
        xp: newXP,
        level: calcLevel(newXP),
        completedLessons: newCompleted,
        lastActive: new Date().toISOString(),
      };

      // Check badges
      const newBadges = BADGES
        .filter(b => !prev.unlockedBadges.includes(b.id) && b.condition(newProgress))
        .map(b => b.id);

      return { ...newProgress, unlockedBadges: [...prev.unlockedBadges, ...newBadges] };
    });
  };

  const isLessonComplete = (courseId, lessonId) => {
    return (progress.completedLessons[courseId] || []).includes(lessonId);
  };

  const getCourseProgress = (courseId, totalLessons) => {
    const done = (progress.completedLessons[courseId] || []).length;
    return { done, total: totalLessons, percent: Math.round(done / totalLessons * 100) };
  };

  const levelProgress = xpToNextLevel(progress.xp);

  const unlockedBadgeObjects = BADGES.filter(b => progress.unlockedBadges.includes(b.id));
  const lockedBadgeObjects = BADGES.filter(b => !progress.unlockedBadges.includes(b.id));

  return {
    progress,
    completeLesson,
    isLessonComplete,
    getCourseProgress,
    levelProgress,
    unlockedBadges: unlockedBadgeObjects,
    lockedBadges: lockedBadgeObjects,
    allBadges: BADGES,
  };
}
