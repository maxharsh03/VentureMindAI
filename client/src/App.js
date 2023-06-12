import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';
import './styles/tailwind.css'

function App() {
  return (
    <div className='min-h-screen bg-gray-900 text-slate-300'>
      <div className='min-h-screen'>
        <Header />
        <Message />
      </div>
      <Footer />
    </div>
  )
}

export default App;