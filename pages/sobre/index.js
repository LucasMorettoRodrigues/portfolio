import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import styles from '../../styles/Sobre.module.scss'

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <section className={styles.wrapper}>
                    <div className={styles.info}>
                        <h3>Sobre</h3>
                        <p>
                            Olá, meu nome é Lucas, sou natural de Bauru/SP e me formei em Física pela Universidade
                            Estadual de São Paulo em 2018.
                            <br />
                            Ainda na faculdade assisti minhas primeiras aulas de programação e
                            à utilizei amplamente em projeto de iniciação científica.
                            <br />
                            Atualmente aprofundo meus conhecimentos em programação de forma autoditada,
                            focando meus estudos em desenvolvimento web full stack.
                            <br /><br />
                            Possuo conhecimentos em:
                            <br />
                            - JavaScript e TypeScript<br />
                            - HTML<br />
                            - CSS (Sass)<br />
                            - Node.js (Express)<br />
                            - React (Redux e Styled-components) e Next.js<br />
                            - Banco de dados SQL (Postgres)<br />
                            - Banco de dados noSQL (MongoDB)<br />
                            - Versionamento com git<br />
                        </p>
                    </div>
                </section>
            </div >
            <Footer />
        </>
    )
}
