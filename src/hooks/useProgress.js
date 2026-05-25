import { useState, useEffect, useCallback } from 'react';

const DEFAULT_PROGRESS = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActive: null,
  completedLessons: {},
  completedProjects: {},
  unlockedBadges: [],
  newlyUnlockedBadges: [],
  username: 'Coder',
};

const BADGES = [
  { id: 'first_lesson',   title: 'First Steps',    emoji: '\u{1F463}', desc: 'Complete your first lesson',       condition: p => Object.values(p.completedLessons).flat().length >= 1 },
  { id: 'python_starter', title: 'Python Starter',  emoji: '\u{1F40D}', desc: 'Complete 3 Python lessons',        condition: p => (p.completedLessons['python'] || []).length >= 3 },
  { id: 'html_builder',   title: 'Web Builder',     emoji: '\u{1F3D7}\u{FE0F}', desc: 'Complete 2 HTML lessons',          condition: p => (p.completedLessons['html'] || []).length >= 2 },
  { id: 'css_artist',     title: 'CSS Artist',      emoji: '\u{1F3A8}', desc: 'Complete 3 CSS lessons',           condition: p => (p.completedLessons['css'] || []).length >= 3 },
  { id: 'js_dev',         title: 'JS Developer',    emoji: '\u{26A1}', desc: 'Complete 3 JavaScript lessons',    condition: p => (p.completedLessons['javascript'] || []).length >= 3 },
  { id: 'git_pro',        title: 'Git Pro',          emoji: '\u{1F33F}', desc: 'Complete all Git lessons',         condition: p => (p.completedLessons['git'] || []).length >= 4 },
  { id: 'algo_brain',     title: 'Algo Brain',      emoji: '\u{1F9E9}', desc: 'Complete 3 DSA lessons',           condition: p => (p.completedLessons['dsa'] || []).length >= 3 },
  { id: 'xp_100',         title: 'XP Hunter',       emoji: '\u{1F4A5}', desc: 'Earn 100 XP',                      condition: p => p.xp >= 100 },
  { id: 'xp_500',         title: 'XP Warrior',      emoji: '\u{1F3C6}', desc: 'Earn 500 XP',                      condition: p => p.xp >= 500 },
  { id: 'xp_1000',        title: 'XP Legend',       emoji: '\u{1F451}', desc: 'Earn 1000 XP',                     condition: p => p.xp >= 1000 },
  { id: 'streak_3',       title: 'On Fire!',        emoji: '\u{1F525}', desc: '3-day learning streak',            condition: p => p.streak >= 3 },
  { id: 'streak_7',       title: 'Week Warrior',    emoji: '\u{1F4C5}', desc: '7-day learning streak',            condition: p => p.streak >= 7 },
  { id: 'multi_course',   title: 'Explorer',        emoji: '\u{1F5FA}\u{FE0F}', desc: 'Start 3 different courses',        condition: p => Object.keys(p.completedLessons).length >= 3 },
  { id: 'all_courses',    title: 'Completionist',   emoji: '\u{1F30D}', desc: 'Start all 7 courses',              condition: p => Object.keys(p.completedLessons).length >= 7 },
  { id: 'level_5',        title: 'Level 5!',        emoji: '\u{1F31F}', desc: 'Reach Level 5',                    condition: p => p.level >= 5 },
  { id: 'level_10',       title: 'Level 10!',       emoji: '\u{1F48E}', desc: 'Reach Level 10',                   condition: p => p.level >= 10 },
];

function calcLevel(xp) { return Math.floor(xp / 100) + 1; }

function calcStreak(lastActive) {
  if (!lastActive) return 0;
  const last = new Date(lastActive);
  const now  = new Date();
  const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
  // Same day = streak unchanged, yesterday = streak continues, older = reset
  return diffDays <= 1 ? null : 0; // null means "don't change"
}

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('codequest_progress');
      const p = saved ? { ...DEFAULT_PROGRESS, ...JSON.parse(saved) } : DEFAULT_PROGRESS;
      // Check if streak should be reset on load
      const streakReset = calcStreak(p.lastActive);
      if (streakReset === 0) p.streak = 0;
      return p;
    } catch { return DEFAULT_PROGRESS; }
  });

  useEffect(() => {
    localStorage.setItem('codequest_progress', JSON.stringify(progress));
  }, [progress]);

  const completeLesson = useCallback((courseId, lessonId, xpReward) => {
    setProgress(prev => {
      const courseLessons = prev.completedLessons[courseId] || [];
      if (courseLessons.includes(lessonId)) return prev;

      const now = new Date().toISOString();
      const newCompleted = {
        ...prev.completedLessons,
        [courseId]: [...courseLessons, lessonId],
      };
      const newXP    = prev.xp + xpReward;
      const newLevel = calcLevel(newXP);

      // Streak logic
      let newStreak = prev.streak;
      if (prev.lastActive) {
        const diffDays = Math.floor((new Date() - new Date(prev.lastActive)) / (1000 * 60 * 60 * 24));
        if (diffDays === 0)      newStreak = prev.streak;          // same day
        else if (diffDays === 1) newStreak = prev.streak + 1;      // consecutive day
        else                     newStreak = 1;                    // streak broken
      } else {
        newStreak = 1;
      }

      const newProgress = {
        ...prev,
        xp: newXP,
        level: newLevel,
        streak: newStreak,
        completedLessons: newCompleted,
        lastActive: now,
        newlyUnlockedBadges: [],
      };

      const freshBadges = BADGES
        .filter(b => !prev.unlockedBadges.includes(b.id) && b.condition(newProgress))
        .map(b => b.id);

      return {
        ...newProgress,
        unlockedBadges: [...prev.unlockedBadges, ...freshBadges],
        newlyUnlockedBadges: freshBadges,
      };
    });
  }, []);

  const clearNewBadges = useCallback(() => {
    setProgress(p => ({ ...p, newlyUnlockedBadges: [] }));
  }, []);

  const setUsername = useCallback((name) => {
    setProgress(p => ({ ...p, username: name }));
  }, []);

  const resetProgress = useCallback(() => {
    localStorage.removeItem('codequest_progress');
    setProgress(DEFAULT_PROGRESS);
  }, []);

  const isLessonComplete  = (courseId, lessonId) =>
    (progress.completedLessons[courseId] || []).includes(lessonId);

  const getCourseProgress = (courseId, totalLessons) => {
    const done = (progress.completedLessons[courseId] || []).length;
    return { done, total: totalLessons, percent: Math.round(done / totalLessons * 100) };
  };

  const levelProgress = (() => {
    const current = progress.xp % 100;
    return { current, percent: current, needed: 100 };
  })();

  return {
    progress,
    completeLesson,
    clearNewBadges,
    setUsername,
    resetProgress,
    isLessonComplete,
    getCourseProgress,
    levelProgress,
    unlockedBadges: BADGES.filter(b => progress.unlockedBadges.includes(b.id)),
    lockedBadges:   BADGES.filter(b => !progress.unlockedBadges.includes(b.id)),
    newlyUnlockedBadges: BADGES.filter(b => (progress.newlyUnlockedBadges || []).includes(b.id)),
    allBadges: BADGES,
  };
}
