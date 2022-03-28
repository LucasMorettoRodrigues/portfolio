import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Olá, eu sou Lucas</h1>
          <h3>Fullstack Web Developer</h3>
          <button>Contato</button>
        </div>
        <div className={styles.right}>
          <Image src='/images/ilustration1.png' layout='responsive' width={100} height={84} alt='computer' objectPosition='0 -20px' />
        </div>
      </div>
    </div>
  )
}
