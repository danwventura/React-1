import React from 'react';
import { getFunName } from "../helpers";

//wes bos react jsx emmet blog post --> set this up!
class StorePicker extends React.Component {
    myInput = React.createRef();
    goToStore = event =>{
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }
    render(){
        return (
                <form className='store-selector'  onSubmit={this.goToStore} >
                    <h2>Please Enter a Store</h2>
                    <input ref={this.myInput} type="text" required placeholder='Store Name' defaultValue={getFunName()}></input>
                    <button type="submit">Visit Store</button>
                </form>
        )
    }
}

export default StorePicker;
