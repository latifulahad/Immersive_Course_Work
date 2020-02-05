import React from 'react';

class ItemDetail extends React.Component {
    render() {
        const { itmInfo } = this.props;

        return(
            <ul>Item Details
                <li>name = {itmInfo.name}</li>
                <li>happiness = {itmInfo.happiness}</li>
                <li>price = {itmInfo.price}</li>
            </ul>
        )
    }
}

export default ItemDetail;