import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {

  const getPuppeteerReport = async () => {
    const pdf = await axios.get("http://localhost:3000/puppeteer", {
      responseType: 'blob',
    })
    const blob = new Blob([pdf.data], { type: 'application/pdf' })
    downloadBlob({ data: blob, filename: 'Puppeteer.pdf' });
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Reporting</h1>
      <div className='report-actions'>
        <div className='card'>
          <button onClick={getPuppeteerReport}>Download Report</button>
        </div>
      </div>
    </>
  )
}

const downloadBlob = ({ data, filename }) => {
  try {
    const href = URL.createObjectURL(data)
    const link = document.createElement('a')

    link.href = href
    link.download = filename

    document.body.appendChild(link);
    link.click()
    document.body.removeChild(link);
    URL.revokeObjectURL(href)
  } catch (e) {
    console.error(e)
  }
}


export default App
