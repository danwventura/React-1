import React from 'react';
import AddItemForm from './AddItemForm';

class Inventory extends React.Component {
    render(){
        return (
                <div className='inventory'>
                    <h2>Inventory</h2>
                    <AddItemForm addItem={this.props.addItem}/>
                    <button onClick={this.props.loadSampleItems}>Load Sample Items</button>
                </div>
        )
    }
}

export default Inventory;