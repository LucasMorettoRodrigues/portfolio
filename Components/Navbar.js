import styles from '../styles/Navbar.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {

    const [show, setShow] = useState(false)

    return (
        <div className={styles.wrapper}>
            <Link href='/' ><h1>Portfólio</h1></Link >
            <nav>
                <ul className={show ? styles.show : null}>
                    <div onClick={() => setShow(false)} className={styles.closeButton}>< AiOutlineCloseCircle /></div>
                    <Link href='/'><li onClick={() => setShow(false)} className={show ? styles.show : null}>Home</li></Link >
                    <Link href='/sobre'><li onClick={() => setShow(false)} className={show ? styles.show : null}>Sobre</li></Link >
                    <Link href='/projetos'><li onClick={() => setShow(false)} className={show ? styles.show : null}>Projetos</li></Link >
                    <Link href='/contato'><li onClick={() => setShow(false)} className={show ? styles.show : null}>Contato</li></Link >
                </ul>
            </nav>
            <div onClick={() => setShow(!show)} className={styles.hamburgerIcon}>
                <GiHamburgerMenu />
            </div>
        </div>
    )
}
