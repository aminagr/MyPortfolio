
import styles from './About.module.css';
import Bio from './Bio';
import Languages from './Languages';
export default function About() {
    return (
      <div>
        <h2>A propos de moi</h2>
       <Bio/>
       <Languages/>
      </div>
    );
  }