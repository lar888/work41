import { Suspense } from 'react'
import Loading from './components/Loading'
import AppErrorBoundary from './components/ErrorBoundary'
import MessageComponent from './components/MessageComponent'
import { fetchMessage } from './utils/api'

const App = () => {
  return (
    <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '40px' }}>
      <AppErrorBoundary>
        <Suspense fallback={<Loading />}>
          <MessageComponent messagePromise={fetchMessage()} />
        </Suspense>
      </AppErrorBoundary>
    </div>
  )
}

export default App
