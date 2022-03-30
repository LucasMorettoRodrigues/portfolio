import Navbar from '../../Components/Navbar'
import Projects from '../../Components/Projects'
import styles from '../../styles/Projetos.module.scss'
import Footer from '../../Components/Footer'

export default function Projetos() {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
            </div>
            <Projects />
            <Footer />
        </>
    )
}