import styles from '../styles/MiniProjects.module.scss'
import { BsGithub, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { SiJavascript, SiReact, SiNodedotjs, SiCss3, SiBootstrap } from 'react-icons/si'
import Image from 'next/image'

export default function MiniProjects() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>Mini Projetos</h3>
            </div>
            <ul className={styles.miniProjects}>
                <li className={styles.miniProjectsCard}>
                    <div style={{ width: '100%' }}>
                        <Image src='/images/iTravel.png' layout='responsive' width={2} height={1} />
                    </div>
                    <p>Agência Turismo</p>
                    <ul className={styles.tags1}>
                        <li><img src="https://img.shields.io/badge/Boostrap-CA68FF?style=for-the-badge&logo=bootstrap" alt='bootstrap'></img></li>
                        <li><img src="https://img.shields.io/badge/CSS3-00658E?style=for-the-badge&logo=css3&logoColor=6CCCFF" alt='css'></img></li>
                    </ul>
                    <div className={styles.icons}>
                        <a href='https://github.com/LucasMorettoRodrigues/iTravel'><BsGithub /> <span>Código</span></a>
                        <a href='https://lucasmorettorodrigues.github.io/iTravel/'><BsFillArrowUpRightCircleFill /> <span>Visitar</span></a>
                    </div>
                </li>
                <li className={styles.miniProjectsCard}>
                    <div style={{ width: '100%' }}>
                        <Image src='/images/cv.png' layout='responsive' width={2} height={1} />
                    </div>
                    <p>Construtor de CV</p>
                    <ul className={styles.tags1}>
                        <li><img src="https://img.shields.io/badge/JavaScript-A3A300?style=for-the-badge&logo=javascript" alt='javascript'></img></li>
                        <li><img src="https://img.shields.io/badge/React-323739?style=for-the-badge&logo=react" alt='react'></img></li>
                    </ul>
                    <div className={styles.icons}>
                        <a href='https://github.com/LucasMorettoRodrigues/cv_application'><BsGithub /> <span>Código</span></a>
                        <a href='https://lucasmorettorodrigues.github.io/cv_application/'><BsFillArrowUpRightCircleFill /> <span>Visitar</span></a>
                    </div>
                </li>
                <li className={styles.miniProjectsCard}>
                    <div style={{ width: '100%' }}>
                        <Image src='/images/calculator.png' layout='responsive' width={2} height={1} />
                    </div>
                    <p>Calculadora</p>
                    <ul className={styles.tags1}>
                        <li><img src="https://img.shields.io/badge/JavaScript-A3A300?style=for-the-badge&logo=javascript" alt='javascript'></img></li>
                        <li><img src="https://img.shields.io/badge/CSS3-00658E?style=for-the-badge&logo=css3&logoColor=6CCCFF" alt='css'></img></li>
                    </ul>
                    <div className={styles.icons}>
                        <a href='https://github.com/LucasMorettoRodrigues/calculator'><BsGithub /> <span>Código</span></a>
                        <a href='https://lucasmorettorodrigues.github.io/calculator/'><BsFillArrowUpRightCircleFill /> <span>Visitar</span></a>
                    </div>
                </li>
                <li className={styles.miniProjectsCard}>
                    <div style={{ width: '100%' }}>
                        <Image src='/images/weather.png' layout='responsive' width={2} height={1} />
                    </div>
                    <p>Consulta Tempo</p>
                    <ul className={styles.tags1}>
                        <li><img src="https://img.shields.io/badge/JavaScript-A3A300?style=for-the-badge&logo=javascript" alt='javascript'></img></li>
                        <li><img src="https://img.shields.io/badge/CSS3-00658E?style=for-the-badge&logo=css3&logoColor=6CCCFF" alt='css'></img></li>
                    </ul>
                    <div className={styles.icons}>
                        <a href='https://github.com/LucasMorettoRodrigues/Weather-App'><BsGithub /> <span>Código</span></a>
                        <a href='https://lucasmorettorodrigues.github.io/Weather-App/'><BsFillArrowUpRightCircleFill /> <span>Visitar</span></a>
                    </div>
                </li>
                <li className={styles.miniProjectsCard}>
                    <div style={{ width: '100%' }}>
                        <Image src='/images/memory.png' layout='responsive' width={2} height={1} />
                    </div>
                    <p>Jogo da Memória</p>
                    <ul className={styles.tags1}>
                        <li><img src="https://img.shields.io/badge/JavaScript-A3A300?style=for-the-badge&logo=javascript" alt='javascript'></img></li>
                        <li><img src="https://img.shields.io/badge/React-323739?style=for-the-badge&logo=react" alt='react'></img></li>
                    </ul>
                    <div className={styles.icons}>
                        <a href='https://github.com/LucasMorettoRodrigues/memory-card'><BsGithub /> <span>Código</span></a>
                        <a href='https://lucasmorettorodrigues.github.io/memory-card/'><BsFillArrowUpRightCircleFill /> <span>Visitar</span></a>
                    </div>
                </li>
            </ul>
        </div>
    )
}
