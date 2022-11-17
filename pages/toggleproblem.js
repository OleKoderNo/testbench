import { useState } from "react";
import styles from '../styles/Toggleproblem.module.css'


export default function ToggleProblem() {

    const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive)
  }

  return(
    <>
        <h1>Toggle løsning</h1>
        <ul>
            <li onClick={handleToggle}>
                Bare det under skal forsvinne når du trykker på denne. 1
                <ul className={isActive ? `${styles.hidden}` : `${styles.show}`}>
                    <li>
                        Dette skal forsvinne 1
                    </li>
                </ul>
            </li>
            <li onClick={handleToggle}>
                Bare det under skal forsvinne når du trykker på denne. 2
                <ul className={isActive ? `${styles.hidden}` : `${styles.show}`}>
                    <li>
                        Dette skal forsvinne 2
                    </li>
                </ul>
            </li>
            <li onClick={handleToggle}>
                Bare det under skal forsvinne når du trykker på denne. 3
                <ul className={isActive ? `${styles.hidden}` : `${styles.show}`}>
                    <li>
                        Dette skal forsvinne 3
                    </li>
                </ul>
            </li>
            <li onClick={handleToggle}>
                Bare det under skal forsvinne når du trykker på denne. 4
                <ul className={isActive ? `${styles.hidden}` : `${styles.show}`}>
                    <li>
                        Dette skal forsvinne 4
                    </li>
                </ul>
            </li>
        </ul>
    </>
  )
}