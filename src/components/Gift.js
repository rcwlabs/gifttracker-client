import React, { Component } from 'react';

export default class Gift extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    render() {

        return(
            <div key={this.props.item._id}>
                <div className="item-group">
                    <div className='recipient'>
                        {this.props.item.recipient}
                    </div>
                    {this.props.item.gift}<br /><br />
                    Price: ${this.props.item.price}<br />
                    Store: {this.props.item.store}<br />
                    Notes: {this.props.item.notes}<br />
                </div>
            </div>
        );
    };
};