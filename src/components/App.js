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
            .then(data => console.log(data));
    }

    render() {
        return <div>
            <h1>Top commented</h1>
            <div>
                <img src="" alt="photo"/>
                <p>Title</p>
                <p>Number of comments: 123</p>
                <a href="" target="_blank">
                    link
                </a>
            </div>
        </div>;
    }
}
