import React from "react";
import {Item} from "./Item";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetch('https://www.reddit.com/r/reactjs.json?limit=100')
            .then(response => response.json())
            .then(({data}) => {
                this.setState({
                    items: data.children,
                    isLoading: false
                })
            });
    }

    render() {
        const {items, isLoading} = this.state;
        return (
            <div>
                <h1>Top commented</h1>
                {isLoading
                    ? <p>Loading...</p>
                    : items.map(item => <Item key={item.data.id} data={item.data}/>
                    )}
            </div>)
    }
}
