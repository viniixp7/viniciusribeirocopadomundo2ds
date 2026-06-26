import { useSearchParams } from 'react-router-dom'

export default function ComparadorPage() {
  const [params] = useSearchParams()
  const left = params.get('left') ?? '1998'
  const right = params.get('right') ?? '2022'

  return (
    <div>
      <h2 className="text-2xl font-extrabold">Comparador</h2>
      <div className="mt-4 rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
        <div className="text-sm text-slate-600 dark:text-slate-300">Comparação placeholder: {left} × {right}</div>
      </div>
    </div>
  )
}

