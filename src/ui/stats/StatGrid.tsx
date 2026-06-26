export default function StatGrid() {
  // Valores placeholder: serão preenchidos com dados reais vindos de JSON.
  const stats = [
    { label: 'Edições', value: 'desde 1930' },
    { label: 'Países campeões', value: '—' },
    { label: 'Total de gols', value: '—' },
    { label: 'Total de partidas', value: '—' },
    { label: 'Maior campeão', value: 'Brasil (placeholder)' }
  ]

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-3xl border border-black/5 bg-white/65 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/75 dark:border-white/10 dark:bg-slate-950/35"
        >
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{s.label}</div>
          <div className="mt-2 text-2xl font-extrabold tracking-tight">{s.value}</div>
        </div>
      ))}
    </div>
  )
}

