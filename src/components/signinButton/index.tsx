import { FaGithub} from "react-icons/fa"
import{FiX} from "react-icons/fi"
import styles from "./styles.module.scss"

export function SignInButton (){

    const isLogged = true;

    return isLogged?(
        <button type="button"
        className={styles.signButton}>
            <FaGithub color="#04d361"/>
            Hessa 
            <FiX color ="#737388"
            className={styles.closeIcon}/>
        </button>
    )
    :
    (
        <button type="button"
        className={styles.signButton}>
            <FaGithub color="#eba417"/>
            sign in with Github
        </button>
    )
}