import styles from './style.module.scss';

export function Header() {
    return(
        <header className={ styles.header}> 
            <div className={ styles.header__text}>
                A casa do código e da massa
            </div>
        </header>
    )
}