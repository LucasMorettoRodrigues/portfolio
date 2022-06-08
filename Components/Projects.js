import styles from '../styles/Projects.module.scss'
import Image from 'next/image'
import { BsGithub, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { SiJavascript, SiReact, SiNodedotjs, SiRedux, SiTypescript, SiMongodb, SiExpress, SiPostgresql, SiSequelize, SiStyledcomponents } from 'react-icons/si'
import MiniProjects from './MiniProjects'

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h2>Meus Projetos</h2>
                </div>
                <ul>
                    <li>
                        <div className={styles.image}>
                            <Image src='/images/musicstore.png' layout='responsive' width={1100} height={585} style={{ borderRadius: '5px' }} />
                        </div>
                        <div className={styles.info}>
                            <h3>E-commerce - MERN stack</h3>
                            <p>
                                - Autenticação com JsonWebToken. <br />
                                - Registro e login de usuário. <br />
                                - Design Responsivo <br />
                            </p>
                            <h4>Front End Stack </h4>
                            <ul className={styles.tags}>
                                <li><img src="https://img.shields.io/badge/HTML5-CB7200?style=for-the-badge&logo=html5&logoColor=FFAA3D" alt='html'></img></li>
                                <li><img src="https://img.shields.io/badge/CSS3-00658E?style=for-the-badge&logo=css3&logoColor=6CCCFF" alt='css'></img></li>
                                <li><img src="https://img.shields.io/badge/JavaScript-A3A300?style=for-the-badge&logo=javascript" alt='javascript'></img></li>
                                <li><img src="https://img.shields.io/badge/React-323739?style=for-the-badge&logo=react" alt='react'></img></li>
                                <li><img src="https://img.shields.io/badge/redux-CA68FF?style=for-the-badge&logo=redux&logoColor=764abc" alt='redux'></img></li>
                                <li><img src="https://img.shields.io/badge/styled--components-FD06FD?style=for-the-badge&logo=styled-components&logoColor=FFF" alt='styled-components'></img></li>
                            </ul>
                            <h4> Back End Stack</h4>
                            <ul className={styles.tags}>
                                <li><img src="https://img.shields.io/badge/typescript-08004D?style=for-the-badge&logo=typescript" alt='typescript'></img></li>
                                <li><img src="https://img.shields.io/badge/node.js-045200?style=for-the-badge&logo=node.js" alt='nodejs'></img></li>
                                <li><img src="https://img.shields.io/badge/express-323739?style=for-the-badge&logo=express" alt='express'></img></li>
                                <li><img src="https://img.shields.io/badge/mongodb-045200?style=for-the-badge&logo=mongodb" alt='mongodb'></img></li>
                            </ul>
                            <div className={styles.icons}>
                                <a href='https://github.com/LucasMorettoRodrigues/musicstore-api'><BsGithub /> <span>Código</span></a>
                                <a href='https://lucasmorettorodrigues.github.io/musicstore/'><BsFillArrowUpRightCircleFill /> <span>Visitar</span></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.image}>
                            <Image src='/images/financas.png' layout='responsive' width={1100} height={585} style={{ borderRadius: '5px' }} />
                        </div>
                        <div className={styles.info}>
                            <h3>App de Finanças Pessoais - PERN stack</h3>
                            <p>
                                - Migrations e seeders para popular banco de dados.<br />
                                - Requisições assíncronas à API com Redux Thunk. <br />
                                - Responsive design. <br />
                            </p>
                            <h4>Front End Stack </h4>
                            <ul className={styles.tags}>
                                <li><img src="https://img.shields.io/badge/HTML5-CB7200?style=for-the-badge&logo=html5&logoColor=FFAA3D" alt='html'></img></li>
                                <li><img src="https://img.shields.io/badge/CSS3-00658E?style=for-the-badge&logo=css3&logoColor=6CCCFF" alt='css'></img></li>
                                <li><img src="https://img.shields.io/badge/typescript-08004D?style=for-the-badge&logo=typescript" alt='typescript'></img></li>
                                <li><img src="https://img.shields.io/badge/React-323739?style=for-the-badge&logo=react" alt='react'></img></li>
                                <li><img src="https://img.shields.io/badge/redux-CA68FF?style=for-the-badge&logo=redux&logoColor=764abc" alt='redux'></img></li>
                                <li><img src="https://img.shields.io/badge/styled--components-FD06FD?style=for-the-badge&logo=styled-components&logoColor=FFF" alt='styled-components'></img></li>
                            </ul>
                            <h4> Back End Stack</h4>
                            <ul className={styles.tags}>
                                <li><img src="https://img.shields.io/badge/JavaScript-A3A300?style=for-the-badge&logo=javascript" alt='javascript'></img></li>
                                <li><img src="https://img.shields.io/badge/node.js-045200?style=for-the-badge&logo=node.js" alt='nodejs'></img></li>
                                <li><img src="https://img.shields.io/badge/express-323739?style=for-the-badge&logo=express" alt='express'></img></li>
                                <li><img src="https://img.shields.io/badge/postgresql-08004D?style=for-the-badge&logo=postgresql" alt='postgresql'></img></li>
                                <li><img src="https://img.shields.io/badge/sequelize-00658E?style=for-the-badge&logo=sequelize" alt='sequelize'></img></li>
                            </ul>
                            <div className={styles.icons}>
                                <a href='https://github.com/LucasMorettoRodrigues/financas'><BsGithub /> <span>Código</span></a>
                                <a href='https://lucasmorettorodrigues.github.io/financas/'><BsFillArrowUpRightCircleFill /><span>Visitar</span></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.image}>
                            <Image src='/images/remember.png' layout='responsive' width={1100} height={585} style={{ borderRadius: '5px' }} />
                        </div>
                        <div className={styles.info}>
                            <h3>Todo List Web App - MERN stack</h3>
                            <p>
                                - Registro e Login de usuário. <br />
                                - Autenticação com JsonWebToken.<br />
                                - CRUD utilizando express, mongoose e mongoDB. <br />
                            </p>
                            <h4> Front End Stack</h4>
                            <ul className={styles.tags}>
                                <li><img src="https://img.shields.io/badge/HTML5-CB7200?style=for-the-badge&logo=html5&logoColor=FFAA3D" alt='html'></img></li>
                                <li><img src="https://img.shields.io/badge/CSS3-00658E?style=for-the-badge&logo=css3&logoColor=6CCCFF" alt='css'></img></li>
                                <li><img src="https://img.shields.io/badge/JavaScript-A3A300?style=for-the-badge&logo=javascript" alt='javascript'></img></li>
                                <li><img src="https://img.shields.io/badge/React-323739?style=for-the-badge&logo=react" alt='react'></img></li>
                            </ul>
                            <h4> Back End Stack</h4>
                            <ul className={styles.tags}>
                                <li><img src="https://img.shields.io/badge/JavaScript-A3A300?style=for-the-badge&logo=javascript" alt='javascript'></img></li>
                                <li><img src="https://img.shields.io/badge/node.js-045200?style=for-the-badge&logo=node.js" alt='nodejs'></img></li>
                                <li><img src="https://img.shields.io/badge/express-323739?style=for-the-badge&logo=express" alt='express'></img></li>
                                <li><img src="https://img.shields.io/badge/mongodb-045200?style=for-the-badge&logo=mongodb" alt='mongodb'></img></li>
                            </ul>
                            <div className={styles.icons}>
                                <a href='https://github.com/LucasMorettoRodrigues/rememeber-api'><BsGithub /> <span>Código</span></a>
                                <a href='https://lucasmorettorodrigues.github.io/remember/'><BsFillArrowUpRightCircleFill /> <span>Visitar</span></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.image}>
                            <Image src='/images/teacherFinder.png' layout='responsive' width={1100} height={585} style={{ borderRadius: '5px' }} />
                        </div>
                        <div className={styles.info}>
                            <h3>App para Professores - Vue App + Firebase</h3>
                            <p>
                                - Design Responsivo <br />
                                - Vuex para gerenciamento de estados. <br />
                                - Firebase para armazenamento de dados. <br />
                            </p>
                            <h4> Stack</h4>
                            <ul className={styles.tags}>
                                <li><img src="https://img.shields.io/badge/HTML5-CB7200?style=for-the-badge&logo=html5&logoColor=FFAA3D" alt='html'></img></li>
                                <li><img src="https://img.shields.io/badge/CSS3-00658E?style=for-the-badge&logo=css3&logoColor=6CCCFF" alt='css'></img></li>
                                <li><img src="https://img.shields.io/badge/JavaScript-A3A300?style=for-the-badge&logo=javascript" alt='javascript'></img></li>
                                <li><img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt='vue'></img></li>
                                <li><img src="https://img.shields.io/badge/Firebase-F29D0C?style=for-the-badge&logo=firebase&logoColor=white" alt='firebase'></img></li>
                            </ul>
                            <div className={styles.icons}>
                                <a href='https://github.com/LucasMorettoRodrigues/findTeacher'><BsGithub /> <span>Código</span></a>
                                <a href='https://vercel.com/lucasmorettorodrigues/findteacher'><BsFillArrowUpRightCircleFill /> <span>Visitar</span></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <MiniProjects />
        </div>
    )
}
