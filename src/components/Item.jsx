import React, {PureComponent} from 'react';

export class Item extends PureComponent {
    render() {
        const {data} = this.props;
        return (
            <div
                style={{
                    border: "1px solid black",
                    marginBottom: "10px",
                    padding: "5px"
                }}>
                {data.thumbnail !== 'self' ? <img src={data.thumbnail} alt=""/> : null}
                <h3>{data.title}</h3>
                <p>Number of comments: {data.num_comments}</p>
                <a href={`https://www.reddit.com/${data.permalink}`} target="_blank"
                   rel="noopener noreferrer">
                    link
                </a>
            </div>
        );
    }
};