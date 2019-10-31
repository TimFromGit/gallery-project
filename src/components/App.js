import React from "react";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('https://www.reddit.com/r/reactjs.json?limit=100')
            .then(response => {
                return response.json();
            })
            .then(({data}) => {
                this.setState({
                    items: data.children
                })
            });
    }

    render() {
        const {items} = this.state;
        return <div>
            <h1>Top commented</h1>
            {items.map(item => <div key={item.data.id}>
                {item.data.thumbnail!=='self' ? <img src={item.data.thumbnail}/>: null}
                <h3>{item.data.title}</h3>
                <p>Number of comments: {item.data.num_comments}</p>
                <a href={item.data.permalink} target="_blank">
                    link
                </a>
            </div>)}

        </div>;
    }
}
