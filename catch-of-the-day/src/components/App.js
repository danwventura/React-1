import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Item from './Item';
import sampleItems from '../sample-items';
import base from '../base';

class App extends React.Component {
    state = {
        items: {},
        order: {}
    };

    componentDidMount(){
        const { params } = this.props.match;
        //first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/items`, {
            context: this,
            state: 'items'
        });
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }


    addItem = (item) => {
        //1. Take a copy of existing state
        const items = {...this.state.items};
        //2. Add our new item to the items variable
        items[`item${Date.now()}`] = item;
        //3. Set new items object to state
        this.setState({items})
    }

    updateItem = (key, updatedItem) => {
        //1. Take a copy of the current state
        const items = {...this.state.items};
        //2. Update the state
        items[key] = updatedItem;
        //3. Set that to state
        this.setState({ items });

    }

    loadSampleItems = () =>{
        this.setState({items: sampleItems})
    }

    addToOrder = (key) => {
        console.log('key', key);
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1;
        this.setState({ order })
    }

    render() {
        return(
            <div>
                <div className='catch-of-the-day'>
                    <div className='menu'>
                        <Header tagline="Fresh Baked Daily!"/>
                        <ul className='fishes'>
                            {Object.keys(this.state.items).map(key => <Item  addToOrder={this.addToOrder} index={key} key={key} details={this.state.items[key]}/>)}
                        </ul>
                    </div>
                    <Order {...this.state}/>
                    <Inventory loadSampleItems={this.loadSampleItems} addItem={this.addItem} updateItem={this.updateItem} items={this.state.items}/>
                </div>
            </div>
        )
    }
}

export default App;