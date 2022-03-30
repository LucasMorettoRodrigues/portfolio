import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import styles from '../styles/Home.module.scss'
import Projects from '../Components/Projects'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Header />
      </div>
      <Projects />
      <Footer />
    </>
  )
}
