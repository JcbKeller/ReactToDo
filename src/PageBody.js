import React, { Component } from "react";
import styles from "./styles.css";
// import { AppRegistry, TextInput } from 'react-native';
class PageBody extends React.Component{
    constructor(){
        super();
        this.state = {
            username: 'default',
            password: 'default',
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("mey new component is here!")
    }


    handleSubmit(event) {
        console.log("event Happened: " + this.state.username + this.state.password);
        event.preventDefault();
    }

    handleUserChange(event){
        this.setState({
            username: event.target.value
        });

    }

    handlePassChange(event){
        this.setState({
            password: event.target.value
        });

    }

    render(){
        return (
            <div className={styles.app}>
            <form className={styles.mainpage} onSubmit={this.handleSubmit}>
                <h3>Please Login</h3>
                <div>
                    <label>
                        Username:
                        <input type="text" value={this.state.value} onChange={this.handleUserChange}/>
                    </label>
                </div>

                <div>
                    <label>
                        Password:
                        <input type="text" value={this.state.value} onChange={this.handlePassChange}/>
                    </label>
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            </div>

        )
    }


}

export default PageBody;