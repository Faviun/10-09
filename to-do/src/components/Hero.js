<<<<<<< HEAD
import hero1 from '../img/main.jpg';
import styles from '../styles/hero.module.css';

export const Hero = () => {
    const size = 50;
    return (
        <section className="float-left w-25 row mt-1 mr-3 ml-1">
            <img 
                className={`w-${size} ${styles.hero}`} 
                src={hero1} 
                alt="Luke skywalker" />
        </section>
    )
}
=======
import hero from "../img/main.jpg";
import styles from "../styles/hero.module.css";

export const Hero = () => {
  return (
    <section className="float-left w-25 row mt-1 mr-3 ml-1">
      <img className={`${styles.hero}`} src={hero} alt="luke skywalker" />
    </section>
  );
};
>>>>>>> d98c3b1224db35e2f06944612267ae9f6d14f71f
