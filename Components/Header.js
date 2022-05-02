import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1><span className='logo'>L</span>ucas <span className='logo'>M</span>oretto</h1>
                <h3>Fullstack Web Developer</h3>
                <Link href='/contato'><button>Contato</button></Link>
                <div className={styles.icons}>
                    <a href='https://br.linkedin.com/in/lucas-moretto-rodrigues-67897310a'><BsLinkedin /></a>
                    <a href='https://github.com/LucasMorettoRodrigues/'><BsGithub /></a>
                </div>
            </div>
            <div className={styles.right}>
                <Image
                    src='/images/ilustration1.png' layout='fill' objectFit='contain' alt='computer'
                />
            </div>
        </div>
    )
}
