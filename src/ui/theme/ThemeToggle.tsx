import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as Theme | null
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      document.documentElement.classList.toggle('dark', stored === 'dark')
      return
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    const initial: Theme = prefersDark ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    window.localStorage.setItem('theme', next)
  }

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-lg backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-slate-900/40"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}

