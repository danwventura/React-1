import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Item from './Item';
import sampleItems from '../sample-items';

class App extends React.Component {
    state = {
        items: {},
        order: {}
    };
    addItem = (item) => {
        //1. Take a copy of existing state
        const items = {...this.state.items};
        //2. Add our new item to the items variable
        items[`item${Date.now()}`] = item;
        //3. Set new items object to state
        this.setState({items})
    }
    loadSampleItems = () =>{
        this.setState({items: sampleItems})
    }
    render() {
        return(
            <div>
                <div className='catch-of-the-day'>
                    <div className='menu'>
                        <Header tagline="Fresh Baked Daily!"/>
                        <ul className='fishes'>
                            {Object.keys(this.state.items).map(key => <Item key={key} details={this.state.items[key]}/>)}
                        </ul>
                    </div>
                    <Order/>
                    <Inventory loadSampleItems={this.loadSampleItems} addItem={this.addItem}/>
                </div>
            </div>
        )
    }
}

export default App;