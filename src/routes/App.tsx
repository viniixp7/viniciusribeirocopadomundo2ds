import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import SiteLayout from '../ui/layout/SiteLayout'
import HomePage from './HomePage'
import HistoriaPage from './HistoriaPage'
import CopasPage from './CopasPage'
import CopaDetailPage from './CopaDetailPage'
import CampeoesPage from './CampeoesPage'
import ViceCampeoesPage from './ViceCampeoesPage'
import EstatisticasPage from './EstatisticasPage'
import QuizPage from './QuizPage'
import BuscaPage from './BuscaPage'
import GaleriaPage from './GaleriaPage'
import LinhaDoTempoPage from './LinhaDoTempoPage'
import ComparadorPage from './ComparadorPage'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  return (
    <div
      key={pathname}
      className="absolute left-0 top-0 h-px w-px -translate-x-full -translate-y-full"
      aria-hidden="true"
    />
  )
}

export default function App() {
  return (
    <SiteLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/historia" element={<HistoriaPage />} />
        <Route path="/copas" element={<CopasPage />} />
        <Route path="/copas/:ano" element={<CopaDetailPage />} />
        <Route path="/campeoes" element={<CampeoesPage />} />
        <Route path="/vice-campeoes" element={<ViceCampeoesPage />} />
        <Route path="/estatisticas" element={<EstatisticasPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/busca" element={<BuscaPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/linha-do-tempo" element={<LinhaDoTempoPage />} />
        <Route path="/comparador" element={<ComparadorPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}

