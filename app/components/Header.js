import styles from "../page.module.css";

export default function Header(){
    return(
        <header className={styles.header}>
            <ul>
                <nav>
                    <li>
                        <a href="/city/Seoul">Seoul</a>
                    </li>
                    <li>
                        <a href="/city/Paris">Paris</a>
                    </li>
                    <li>
                        <a href="/city/Berlin">Berlin</a>
                    </li>
                    <li>
                        <a href="/city/Cairo">Cairo</a>
                    </li>
                </nav>
            </ul>
        </header>
    )
}