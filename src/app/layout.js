import './globals.css'
import styles from './page.module.css'
import Header from './components/header'
import Footer from './components/footer'

export const metadata = {
  title: 'ting lin',
  description: "Ting's space on the web",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <div className="home">
            <Header/>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
