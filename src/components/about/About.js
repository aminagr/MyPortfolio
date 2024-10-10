import styles from './About.module.css';
import Bio from './Bio';
import Languages from './Languages';

export default function About() {
    return (
      <div>
        <h1 className={styles.title}>À propos de moi</h1>
        <Bio/>
        <Languages/>
      </div>
    );
}
