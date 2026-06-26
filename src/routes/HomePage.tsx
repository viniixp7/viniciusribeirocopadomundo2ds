import { Link } from 'react-router-dom'
import StatGrid from '../ui/stats/StatGrid'

export default function HomePage() {
  return (
    <div className="relative">
      <section className="mt-2 overflow-hidden rounded-3xl border border-black/5 bg-white/60 p-6 shadow-glow backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold dark:border-white/10 dark:bg-slate-900/40">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Portal educativo • História completa • Interface moderna
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              A história da Copa do Mundo, do início ao presente.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Explore cada edição com detalhes, mata-mata em formato de chave, estatísticas e um quiz interativo.
              Dados organizados em arquivos JSON para desempenho e escalabilidade.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/copas"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-fuchsia-600 to-emerald-400 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
              >
                Explorar a história
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/60 px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-white dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-50"
              >
                Jogar Quiz
              </Link>
            </div>
          </div>

          {/* Banner placeholder */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-br from-blue-600/25 via-fuchsia-600/20 to-emerald-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(217,70,239,0.25),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(16,185,129,0.25),transparent_55%)] p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/90">Edição em destaque</div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">1930 • Primeira</div>
              </div>
              <div className="mt-8 grid gap-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-white/90 backdrop-blur">
                  <span className="text-xl">🏆</span>
                  <div>
                    <div className="text-xs opacity-90">Começo de tudo</div>
                    <div className="text-base font-bold">Uruguai vence</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-white/90 backdrop-blur">
                  <span className="text-xl">⚽</span>
                  <div>
                    <div className="text-xs opacity-90">Evolução</div>
                    <div className="text-base font-bold">Formato e escala</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 h-40 rounded-2xl bg-black/20 p-4 text-white/90">
                <div className="text-xs font-semibold opacity-90">Destaque</div>
                <div className="mt-2 text-lg font-bold">Do torneio inaugural ao fenômeno global</div>
                <div className="mt-2 text-xs opacity-90">Atualizações visuais e animações suaves.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <StatGrid />
      </section>
    </div>
  )
}

