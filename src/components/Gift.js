import React, { Component } from 'react';

export default class Gift extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    render() {

        return(
            <div>
                <li key={this.props.item._id}>
                    <div className="item-group">
                        {this.props.item.recipient}<br />
                        {this.props.item.gift}<br />
                        {this.props.item.price}<br />
                        {this.props.item.store}<br />
                        {this.props.item.notes}<br />
                    </div>
                </li>
            </div>
        );
    };
};