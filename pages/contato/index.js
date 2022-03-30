import Navbar from '../../Components/Navbar'
import styles from '../../styles/Contato.module.scss'
import { useState } from 'react'
import Footer from '../../Components/Footer'

export default function Contato() {

    const [title, setTitle] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <section className={styles.contact_container}>
                    <div className={styles.contact}>
                        <h3>Me envie um Email</h3>
                        <form onSubmit={handleOnSubmit}>
                            <input placeholder='Título' type='text' required onChange={e => setTitle(e.target.value)}></input>
                            <input placeholder='Email' type='email' required onChange={e => setTitle(e.target.email)}></input>
                            <textarea placeholder='Mensagem' rows='4' required onChange={e => setTitle(e.target.message)}></textarea>
                            <button type='submit'>ENVIAR</button>
                        </form>

                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
