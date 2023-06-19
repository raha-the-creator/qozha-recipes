import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          {/* <a> */}
            <h1>
              <span>Kazakh Dastarkhan</span>
              <span>"Qozha"</span>
            </h1>
            <h2>The taste of Great Steppe</h2>
          {/* </a> */}
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>made by raha</p>
      </footer>
    </div>
  )
}