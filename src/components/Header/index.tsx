import { SignInButton } from "../signinButton"
import styles from "./styles.module.scss"


/* eslint-disable @next/next/no-img-element */
export function Header () {
    return(
    <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt=""/>
        <nav>
        <a className={styles.active}>Home</a>
        <a>Posts</a>
    </nav>
    <SignInButton/>
    </div>
    
     </header>
    )
}