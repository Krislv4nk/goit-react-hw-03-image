import React, { Component } from "react";


export class loadMoreButton extends Component {
    state = {
        images: [],
        page: 1,
    }; render() {
        return (
            <div>
                {this.state.images.length > 0 && (
                    <button onClick={this.loadMoreButton}>Load more</button>
                )}
            </div>
        )
    }
    
}