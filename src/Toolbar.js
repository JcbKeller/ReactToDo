import React from "react";
import styles from "./styles.css";


class Toolbar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className={styles.banner}>
                <button className={styles.buttonStyle}>Home</button>
                <button className={styles.buttonStyle}>My Account</button>
            </ul>
        )
    }
}

export default Toolbar;