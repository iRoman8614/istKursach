import styles from './Button.module.css'

const Button = ({title, active}) => {

    return(
        <div className={active ? (styles.rootActive) : (styles.root)}>
            {title}
        </div>
    )
}

export default Button