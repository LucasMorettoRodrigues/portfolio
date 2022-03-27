import styles from '../styles/Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'

export default function Navbar() {

    const [show, setShow] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Portfólio</h1>
                <ul className={show ? styles.show : null}>
                    <div onClick={() => setShow(false)} className={styles.closeButton}>< AiOutlineCloseCircle /></div>
                    <li className={show ? styles.show : null}>Home</li>
                    <li className={show ? styles.show : null}>Sobre</li>
                    <li className={show ? styles.show : null}>Projetos</li>
                    <li className={show ? styles.show : null}>Contato</li>
                </ul>
                <div onClick={() => setShow(!show)} className={styles.hamburgerIcon}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>

    )
}
