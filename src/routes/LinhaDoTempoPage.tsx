export default function LinhaDoTempoPage() {
  const years = [1930, 1934, 1938]
  return (
    <div>
      <h2 className="text-2xl font-extrabold">Linha do Tempo</h2>
      <div className="mt-4 rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
        <div className="flex flex-wrap gap-2">
          {years.map((y) => (
            <button
              key={y}
              className="rounded-2xl border border-black/10 bg-white/60 px-4 py-2 text-sm font-bold hover:bg-white dark:border-white/10 dark:bg-slate-900/40 dark:hover:bg-slate-900/30"
            >
              {y}
            </button>
          ))}
        </div>
        <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">Timeline completa (1930 até recente) será adicionada com detalhes por edição.</div>
      </div>
    </div>
  )
}

