import styles from '../styles/Projects.module.scss'
import Image from 'next/image'
import { BsGithub, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { SiJavascript, SiReact, SiNodedotjs, SiRedux, SiTypescript, SiMongodb, SiExpress, SiPostgresql, SiSequelize, SiStyledcomponents } from 'react-icons/si'
import MiniProjects from './MiniProjects'

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Meus Projetos</h2>
                <ul>
                    <li>
                        <div className={styles.image}>
                            <Image src='/images/musicstore.png' layout='responsive' width={1100} height={585} style={{ borderRadius: '5px' }} />
                        </div>
                        <div className={styles.info}>
                            <h3>E-commerce - MERN stack</h3>
                            <p>
                                - Criação de conta de usuário e sistema de login. <br />
                                - Jason Web Token para autenticação de usuário.<br />
                                - Carrinho de compras utilizando Redux. <br />
                                - Design 100% responsivo. <br />
                            </p>
                            <h4> Tecnologias utilizadas no Front End </h4>
                            <ul className={styles.tags}>
                                <li style={{ backgroundColor: '#F0DB4F' }}><SiJavascript /><span>JavaScript</span></li>
                                <li style={{ backgroundColor: '#61DBFB' }}><SiReact /><span>React</span></li>
                                <li style={{ backgroundColor: '#764abc' }}><SiRedux /><span>Redux</span></li>
                            </ul>
                            <h4> Tecnologias utilizadas no Back End </h4>
                            <ul className={styles.tags}>
                                <li style={{ backgroundColor: '#007acc' }}><SiTypescript /><span>TypeScript</span></li>
                                <li style={{ backgroundColor: '#68a063' }}><SiNodedotjs /><span>Node.js</span></li>
                                <li style={{ backgroundColor: '#999' }}><SiExpress /><span>Express</span></li>
                                <li style={{ backgroundColor: '#4DB33D' }}><SiMongodb /><span>MongoDB</span></li>
                            </ul>
                            <div className={styles.icons}>
                                <button><BsGithub /> <span>Código</span></button>
                                <button><BsFillArrowUpRightCircleFill /> <span>Ver demo</span></button>
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
                                - Criação de contas, despesas, receitas e transações. <br />
                                - Migrations e seeders para popular banco de dados.<br />
                                - Requisições assíncronas à API com Redux Thunk. <br />
                                - Design 100% responsivo. <br />
                            </p>
                            <h4> Tecnologias utilizadas no Front End </h4>
                            <ul className={styles.tags}>
                                <li style={{ backgroundColor: '#007acc' }}><SiTypescript /><span>TypeScript</span></li>
                                <li style={{ backgroundColor: '#61DBFB' }}><SiReact /><span>React</span></li>
                                <li style={{ backgroundColor: '#764abc' }}><SiRedux /><span>Redux</span></li>
                                <li style={{ backgroundColor: '#FF7796' }}><SiStyledcomponents /><span>styled-components</span></li>
                            </ul>
                            <h4> Tecnologias utilizadas no Back End </h4>
                            <ul className={styles.tags}>
                                <li style={{ backgroundColor: '#F0DB4F' }}><SiJavascript /><span>JavaScript</span></li>
                                <li style={{ backgroundColor: '#68a063' }}><SiNodedotjs /><span>Node.js</span></li>
                                <li style={{ backgroundColor: '#999' }}><SiExpress /><span>Express</span></li>
                                <li style={{ backgroundColor: '#0064a5' }}><SiPostgresql /><span>PostgreSQL</span></li>
                                <li style={{ backgroundColor: '#46B6FF' }}><SiSequelize /><span>Sequelize</span></li>
                            </ul>
                            <div className={styles.icons}>
                                <button><BsGithub /> <span>Código</span></button>
                                <button><BsFillArrowUpRightCircleFill /><span>Ver demo</span></button>
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
                                - Criação de conta de usuário e sistema de login. <br />
                                - Jason Web Token para autenticação de usuário.<br />
                                - Criação de projetos e atribuição de tarefas<br />
                                - CRUD utilizando express, mongoose e mongoDB. <br />
                            </p>
                            <h4> Tecnologias utilizadas no Front End </h4>
                            <ul className={styles.tags}>
                                <li style={{ backgroundColor: '#F0DB4F' }}><SiJavascript /><span>JavaScript</span></li>
                                <li style={{ backgroundColor: '#61DBFB' }}><SiReact /><span>React</span></li>
                            </ul>
                            <h4> Tecnologias utilizadas no Back End </h4>
                            <ul className={styles.tags}>
                                <li style={{ backgroundColor: '#F0DB4F' }}><SiJavascript /><span>JavaScript</span></li>
                                <li style={{ backgroundColor: '#68a063' }}><SiNodedotjs /><span>Node.js</span></li>
                                <li style={{ backgroundColor: '#999' }}><SiExpress /><span>Express</span></li>
                                <li style={{ backgroundColor: '#4DB33D' }}><SiMongodb /><span>MongoDB</span></li>
                            </ul>
                            <div className={styles.icons}>
                                <button><BsGithub /> <span>Código</span></button>
                                <button><BsFillArrowUpRightCircleFill /> <span>Ver demo</span></button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <MiniProjects />
        </div>
    )
}
