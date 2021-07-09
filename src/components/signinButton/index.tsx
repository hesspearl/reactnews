import { FaGithub} from "react-icons/fa"
import{FiX} from "react-icons/fi"
import {signIn, useSession} from "next-auth/client"
import styles from "./styles.module.scss"

export function SignInButton (){
const [session]=useSession()
   
console.log(session)

    return session ?(
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
        className={styles.signButton}
        onClick={()=> signIn('github')}
        >
            <FaGithub color="#eba417"/>
            sign in with Github
        </button>
    )
}