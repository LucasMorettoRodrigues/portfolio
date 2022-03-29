import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import Projects from '../Components/Projects'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Header />
      </div>
      <Projects />
    </>
  )
}
