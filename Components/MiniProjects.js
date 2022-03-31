import styles from '../styles/MiniProjects.module.scss'
import { BsGithub, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { SiJavascript, SiReact, SiNodedotjs, SiCss3 } from 'react-icons/si'
import Image from 'next/image'

export default function MiniProjects() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Mini Projetos</h3>
            <ul className={styles.miniProjects}>
                <li className={styles.miniProjectsCard}>
                    <div style={{ width: '100%' }}>
                        <Image src='/images/message.png' layout='responsive' width={2} height={1} />
                    </div>
                    <p>Aplicação Forum</p>
                    <ul className={styles.tags1}>
                        <li style={{ backgroundColor: '#F0DB4F' }}><SiJavascript /><span>JavaScript</span></li>
                        <li style={{ backgroundColor: '#68a063' }}><SiNodedotjs /><span>Node.js</span></li>
                    </ul>
                    <div className={styles.icons}>
                        <button><BsGithub /> <span>Código</span></button>
                        <button><BsFillArrowUpRightCircleFill /> <span>Ver demo</span></button>
                    </div>
                </li>
                <li className={styles.miniProjectsCard}>
                    <div style={{ width: '100%' }}>
                        <Image src='/images/cv.png' layout='responsive' width={2} height={1} />
                    </div>
                    <p>Construtor de CV</p>
                    <ul className={styles.tags1}>
                        <li style={{ backgroundColor: '#F0DB4F' }}><SiJavascript /><span>JavaScript</span></li>
                        <li style={{ backgroundColor: '#61DBFB' }}><SiReact /><span>React</span></li>
                    </ul>
                    <div className={styles.icons}>
                        <button><BsGithub /> <span>Código</span></button>
                        <button><BsFillArrowUpRightCircleFill /> <span>Ver demo</span></button>
                    </div>
                </li>
                <li className={styles.miniProjectsCard}>
                    <div style={{ width: '100%' }}>
                        <Image src='/images/weather.png' layout='responsive' width={2} height={1} />
                    </div>
                    <p>Consulta Tempo</p>
                    <ul className={styles.tags1}>
                        <li style={{ backgroundColor: '#F0DB4F' }}><SiJavascript /><span>JavaScript</span></li>
                        <li style={{ backgroundColor: '#2965f1' }}><SiCss3 /><span>CSS3</span></li>
                    </ul>
                    <div className={styles.icons}>
                        <button><BsGithub /> <span>Código</span></button>
                        <button><BsFillArrowUpRightCircleFill /> <span>Ver demo</span></button>
                    </div>
                </li>
                <li className={styles.miniProjectsCard}>
                    <div style={{ width: '100%' }}>
                        <Image src='/images/memory.png' layout='responsive' width={2} height={1} />
                    </div>
                    <p>Jogo da Memória</p>
                    <ul className={styles.tags1}>
                        <li style={{ backgroundColor: '#F0DB4F' }}><SiJavascript /><span>JavaScript</span></li>
                        <li style={{ backgroundColor: '#61DBFB' }}><SiReact /><span>React</span></li>
                    </ul>
                    <div className={styles.icons}>
                        <button><BsGithub /> <span>Código</span></button>
                        <button><BsFillArrowUpRightCircleFill /> <span>Ver demo</span></button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
