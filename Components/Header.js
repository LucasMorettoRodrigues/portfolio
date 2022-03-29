import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Olá, eu sou Lucas</h1>
                <h3>Fullstack Web Developer</h3>
                <button>Contato</button>
                <div className={styles.icons}>
                    <a><BsLinkedin /></a>
                    <a><BsGithub /></a>
                </div>
            </div>
            <div className={styles.right}>
                <Image src='/images/ilustration1.png' layout='responsive' width={100} height={84} alt='computer' objectPosition='0 -20px' />
            </div>
        </div>
    )
}
