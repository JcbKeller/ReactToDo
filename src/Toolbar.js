import React from "react";
import styles from "./styles.css";


class Toolbar extends React.Component {
    constructor() {
        super();
        console.log(styles.toolbarStyle);
    }

    render() {
        return (
            <ul className={styles.banner}>
                <button className={styles.elementStyle}>Hello World</button>
                <button className={styles.elementStyle}>This is an element</button>
            </ul>
        )
    }
}

export default Toolbar;