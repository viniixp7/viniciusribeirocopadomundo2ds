import { Link } from 'react-router-dom'

const copas = [
  { ano: 1930, paisSede: 'Uruguai' },
  { ano: 1934, paisSede: 'Itália' },
  { ano: 1938, paisSede: 'França' }
]

export default function CopasPage() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold">Todas as Copas</h2>
      <div className="mt-4 rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {copas.map((c) => (
            <Link
              key={c.ano}
              to={`/copas/${c.ano}`}
              className="group rounded-3xl border border-black/5 bg-white/70 p-5 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-900/30"
            >
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Edição</div>
              <div className="mt-1 text-2xl font-extrabold">{c.ano}</div>
              <div className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{c.paisSede}</div>
              <div className="mt-3 text-xs font-semibold text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200">Abrir detalhes →</div>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          Lista inicial com placeholders. O projeto será completado com 1930 até a edição mais recente.
        </div>
      </div>
    </div>
  )
}

