import { Link, useParams } from 'react-router-dom'

export default function CopaDetailPage() {
  const { ano } = useParams()
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold">Copa {ano}</h2>
        <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Detalhes completos com dados reais serão adicionados.</div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          to="#"
          className="rounded-2xl border border-black/10 bg-white/60 px-4 py-2 text-sm font-bold transition hover:bg-white dark:border-white/10 dark:bg-slate-900/40"
        >
          Visão geral
        </Link>
        <Link
          to="#"
          className="rounded-2xl bg-gradient-to-r from-blue-600 via-fuchsia-600 to-emerald-400 px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
        >
          Mata-mata
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-slate-950/40 lg:col-span-2">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">Campeão • Vice • Artilheiro</div>
          <div className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div><b>Campeão:</b> —</div>
            <div><b>Vice:</b> —</div>
            <div><b>Artilheiro:</b> —</div>
          </div>
          <div className="mt-6 rounded-2xl border border-black/5 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/30">
            <div className="text-sm font-semibold">Elencos das seleções semifinalistas</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">—</div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">Estatísticas</div>
          <div className="mt-3 space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <div><b>Sedes:</b> —</div>
            <div><b>Partidas:</b> —</div>
            <div><b>Gols:</b> —</div>
            <div><b>Público:</b> —</div>
          </div>
        </div>
      </div>
    </div>
  )
}

