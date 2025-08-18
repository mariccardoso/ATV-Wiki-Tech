import styles from "./textHighlighted.module.css";

const TextHighlighted = ({title, textDescription}) => {
    return (
        <div className={styles.textHighlighted}>
            <h2 className={styles.textTitle}>{title}</h2>
            <p className={styles.textDescription}>{textDescription}</p> 
        </div>
    );
}

export default TextHighlighted;