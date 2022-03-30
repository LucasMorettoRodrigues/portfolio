import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Header() {
    return (
        <div className={styles.container}>
            <footer className={styles.wrapper}>
                <div className={styles.next}><p>Criado com</p> <Image src='/images/next.png' layout='fixed' width={110} height={66}></Image></div>
                <div className={styles.icons}><BsLinkedin /> <BsGithub /></div>
            </footer>
        </div>

    )
}
