import styles from './bibliotecaInfo.module.css';
import InfoBlock from "@/components/infoBlock";

const BibliotecaInfo = ({ bibliotecas }) => {
    return (
        <div className={styles.bibliotecaContent}>
            {bibliotecas.map((biblioteca, index) => (
                <div key={index}>
                    <h2>{biblioteca.title}</h2>
                    <InfoBlock icon="🛠️" title="Principais Características" variant="info">
                        <ul>
                            <li>{biblioteca.description}</li>
                        </ul>
                    </InfoBlock>
                    <div className={styles.bibliotecaCharacteristics}>
                        <InfoBlock icon="📚" title="Prós do Bootstrap" variant="success">
                            <ul>
                                {biblioteca.pros.map((pro, index) => (
                                    <li key={index}>{pro}</li>
                                ))}
                            </ul>
                        </InfoBlock>
                        <InfoBlock icon="⚠️" title="Contras do Bootstrap" variant="danger">
                            <ul>
                                {biblioteca.cons.map((con, index) => (
                                    <li key={index}>{con}</li>
                                ))}
                            </ul>
                        </InfoBlock>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BibliotecaInfo;