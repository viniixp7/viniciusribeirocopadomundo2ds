import { useMemo, useState } from 'react'

type QuizQuestion = {
  id: string
  question: string
  options: string[]
  correctIndex: number
}

const pool: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Quem venceu a Copa do Mundo de 2002?',
    options: ['Brasil', 'Alemanha', 'França', 'Argentina'],
    correctIndex: 0
  },
  {
    id: 'q2',
    question: 'Quem foi campeão na Copa do Mundo de 1994?',
    options: ['Brasil', 'Itália', 'Suécia', 'Holanda'],
    correctIndex: 0
  }
]

export default function QuizPage() {
  const questions = useMemo(() => {
    // placeholder para começar; será expandido para 30+.
    return pool
  }, [])

  const [order] = useState(() => [...questions].sort(() => Math.random() - 0.5))
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const total = order.length || 1
  const q = order[idx]

  const progress = Math.min(100, ((idx) / total) * 100)

  const onPick = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    if (i === q.correctIndex) setScore((s) => s + 1)
    setTimeout(() => {
      const next = idx + 1
      if (next >= order.length) setFinished(true)
      else {
        setIdx(next)
        setSelected(null)
      }
    }, 700)
  }

  const restart = () => {
    setIdx(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <div>
        <h2 className="text-2xl font-extrabold">Quiz</h2>
        <div className="mt-4 rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
          <div className="text-sm text-slate-600 dark:text-slate-300">Pontuação final</div>
          <div className="mt-2 text-4xl font-extrabold">{score} / {order.length}</div>
          <button
            onClick={restart}
            className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 via-fuchsia-600 to-emerald-400 px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
          >
            Jogar novamente
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold">Quiz interativo</h2>
      <div className="mt-4 rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold">Pergunta {idx + 1} de {order.length}</div>
          <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Pontuação: {score}</div>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-blue-600 via-fuchsia-600 to-emerald-400" style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-6 text-lg font-extrabold">{q.question}</div>

        <div className="mt-5 grid gap-3">
          {q.options.map((opt, i) => {
            const isCorrect = selected !== null && i === q.correctIndex
            const isWrong = selected !== null && i === selected && i !== q.correctIndex
            const klass = selected === null
              ? 'border-black/10 bg-white/60 hover:bg-white dark:border-white/10 dark:bg-slate-900/40 dark:hover:bg-slate-900/30'
              : isCorrect
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200'
                : isWrong
                  ? 'border-rose-500/30 bg-rose-500/10 text-rose-900 dark:text-rose-200'
                  : 'border-black/10 bg-white/40 text-slate-600 dark:border-white/10 dark:bg-slate-900/20 dark:text-slate-400'

            return (
              <button
                key={opt}
                onClick={() => onPick(i)}
                disabled={selected !== null}
                className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${klass}`}
              >
                <span className="mr-2">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

