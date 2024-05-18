import styles from "./Display.module.css";
function Display({displayValue}){
    return(
        <input className={styles.display} type="text" value={displayValue}></input>
    )
}
export default Display;