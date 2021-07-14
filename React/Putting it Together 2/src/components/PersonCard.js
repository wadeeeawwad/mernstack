import React, { Component } from 'react'

export class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        const {firstName,lastName,hairColor}=this.props;
        const{age}=this.state;

        return (
            <div>
            <h1>{firstName},{lastName}</h1>
            <p>age:{age}</p>
            <p>Hair Color {hairColor} </p>
            <button onClick = { ()=> this.setState({age: age+1}) }>birth day for {firstName} {lastName} </button>

                
            </div>
        )
    }
}

export default PersonCard
