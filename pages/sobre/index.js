import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import styles from '../../styles/Sobre.module.scss'
import { FiDatabase } from 'react-icons/fi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { BiCodeBlock } from 'react-icons/bi'

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <section className={styles.about}>
                    <div className={styles.header}>
                        <h2>Olá, meu nome é Lucas</h2>
                        <p>
                            Me formei em bacharelado Física pela UNESP em 2019.
                            Ainda na faculdade assisti minhas primeiras aulas de programação e
                            à utilizei amplamente em projeto de iniciação científica. Em 2021 me interessei
                            por desenvolvimento web e tenho aprofundado meus estudos em desenvolvimento
                            full-stack, desenvolvendo projetos de front-end e de back-end.
                        </p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.item}>
                            <MdOutlineDesignServices color='#008cff' fontSize='60px' />
                            <h3>Front-end</h3>
                            <p>Ferramentas / Linguagens:</p>
                            <ul>
                                <li>HTML</li>
                                <li>Css, Sass</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Bootstrap</li>
                                <li>Styled-Components</li>
                            </ul>
                        </div>
                        <div className={styles.item}>
                            <BiCodeBlock color='#008cff' fontSize='60px' />
                            <h3>Back-end</h3>
                            <p>Ferramentas / Linguagens:</p>
                            <ul>
                                <li>Node.js</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>API Rest</li>
                                <li>Linux</li>
                                <li>Github</li>
                                <li>Git</li>
                            </ul>
                        </div>
                        <div className={styles.item}>
                            <FiDatabase color='#008cff' fontSize='60px' />
                            <h3>Banco de Dados</h3>
                            <p>Ferramentas / Linguagens:</p>
                            <ul>
                                <li>SQL</li>
                                <li>NoSQL</li>
                                <li>PostgreSQL</li>
                                <li>MongoDb</li>
                                <li>Mongoose</li>
                                <li>Sequelize</li>
                            </ul>
                        </div>
                    </div>
                    {/* <p>
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
                        </p> */}
                </section>
            </div >
            <Footer />
        </>
    )
}
