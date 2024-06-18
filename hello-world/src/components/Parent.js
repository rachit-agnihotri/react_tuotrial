import React, { Component } from 'react';
import Child from './Child';;

class Parent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            teacher: 'Sir'
        };

        // Binding click method to the current instance of Parent
        this.click = this.click.bind(this);
    }

    click(childname) {
        alert(`Hello ${this.state.teacher} from ${childname}`);
    }

    render() {
        return (
            <div>
                <Child way={this.click} />
            </div>
        );
    }
}

export default Parent;
