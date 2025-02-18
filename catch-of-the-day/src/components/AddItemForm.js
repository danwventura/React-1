import React from 'react';

class AddItemForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createItem = (event) => {
        event.preventDefault();
        const item = {
            nameRef: this.nameRef.current.value,
            priceRef: parseFloat(this.priceRef.current.value), //1054 instead of 10.54
            statusRef: this.statusRef.current.value,
            descRef: this.descRef.current.value,
            imageRef:this.imageRef.current.value
        }
        this.props.addItem(item);
        //refresh the form
        event.currentTarget.reset();
    }
    
    render(){
        return (
            <form className="fish-edit" onSubmit={this.createItem}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
                <button type="submit">+ Add Item </button>
            </form>
        )
    }
}

export default AddItemForm;