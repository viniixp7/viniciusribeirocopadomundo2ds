import { PropsWithChildren, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from '../theme/ThemeToggle'

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/historia', label: 'História' },
  { to: '/copas', label: 'Todas as Copas' },
  { to: '/campeoes', label: 'Campeões' },
  { to: '/estatisticas', label: 'Estatísticas' },
  { to: '/quiz', label: 'Quiz' },
]

export default function SiteLayout({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 top-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-600/25 via-fuchsia-600/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute -right-20 top-[120px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-amber-400/20 via-rose-500/20 to-sky-500/20 blur-3xl" />
      </div>

      {/* Top bar */}
      <header className="relative z-10 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="group inline-flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-white shadow-glow">
                ⚽
              </span>
              <span className="hidden sm:block">
                <span className="block text-sm font-semibold tracking-wide">Portal da</span>
                <span className="block text-lg font-bold leading-none">Copa do Mundo</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-800 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-50"
              onClick={() => setSidebarOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex max-w-6xl">
        {/* Sidebar (desktop) */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <nav className="sticky top-6 mt-5 rounded-2xl border border-black/5 bg-white/70 p-3 backdrop-blur dark:border-white/10 dark:bg-slate-950/50">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/15 via-fuchsia-600/15 to-emerald-400/15 text-slate-900 dark:text-slate-50'
                      : 'text-slate-700 hover:bg-black/5 dark:text-slate-200 dark:hover:bg-white/5'
                  ].join(' ')
                }
              >
                <span>{item.label}</span>
                <span className="text-xs opacity-60">→</span>
              </NavLink>
            ))}
            <div className="mt-3 grid gap-2">
              <NavLink
                to="/vice-campeoes"
                className={({ isActive }) =>
                  [
                    'rounded-xl border px-3 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'border-fuchsia-500/30 bg-fuchsia-500/10'
                      : 'border-black/10 bg-white/60 hover:bg-white dark:border-white/10 dark:bg-slate-900/40'
                  ].join(' ')
                }
              >
                Vice-campeões
              </NavLink>
              <NavLink
                to="/galeria"
                className={({ isActive }) =>
                  [
                    'rounded-xl border px-3 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'border-blue-500/30 bg-blue-500/10'
                      : 'border-black/10 bg-white/60 hover:bg-white dark:border-white/10 dark:bg-slate-900/40'
                  ].join(' ')
                }
              >
                Galeria
              </NavLink>
            </div>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 px-4 py-6 lg:py-10">
          {/* Sidebar (mobile) */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-20 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
          )}
          <div className="relative z-10 w-full">
            {sidebarOpen && (
              <div className="fixed left-0 top-0 z-30 h-full w-[86%] max-w-sm lg:hidden">
                <nav className="h-full rounded-r-3xl border-r border-black/10 bg-white/90 p-4 backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold">Navegação</div>
                    <button
                      className="rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold dark:border-white/10 dark:bg-slate-900/40"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Fechar
                    </button>
                  </div>
                  <div className="mt-4 grid gap-2">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) =>
                          [
                            'rounded-xl px-3 py-2 text-sm font-semibold transition',
                            isActive
                              ? 'bg-gradient-to-r from-blue-600/15 via-fuchsia-600/15 to-emerald-400/15'
                              : 'hover:bg-black/5'
                          ].join(' ')
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                    <NavLink
                      to="/vice-campeoes"
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) =>
                        [
                          'rounded-xl border px-3 py-2 text-sm font-semibold transition',
                          isActive
                            ? 'border-fuchsia-500/30 bg-fuchsia-500/10'
                            : 'border-black/10 bg-white/60'
                        ].join(' ')
                      }
                    >
                      Vice-campeões
                    </NavLink>
                    <NavLink
                      to="/galeria"
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) =>
                        [
                          'rounded-xl border px-3 py-2 text-sm font-semibold transition',
                          isActive ? 'border-blue-500/30 bg-blue-500/10' : 'border-black/10 bg-white/60'
                        ].join(' ')
                      }
                    >
                      Galeria
                    </NavLink>
                  </div>
                </nav>
              </div>
            )}

            {children}

            <footer className="mt-12 border-t border-black/5 pt-6 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>© {new Date().getFullYear()} Portal da Copa do Mundo</div>
                <div className="flex items-center gap-4">
                  <Link className="hover:underline" to="/busca">Busca</Link>
                  <Link className="hover:underline" to="/linha-do-tempo">Linha do Tempo</Link>
                  <Link className="hover:underline" to="/comparador">Comparador</Link>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}

