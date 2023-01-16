import React from "react";

class EditItemForm extends React.Component {
    handleChange = (event) => {
        //update the item
        //1. Take a copy of the current item
        const updatedItem = {
            ...this.props.item,
            [event.currentTarget.name]:event.currentTarget.value
        };
        this.props.updateItem(this.props.index, updatedItem)
    }
    render(){
        return <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.item.name}/>
            <input type="text" name="price" onChange={this.handleChange} value={this.props.item.price}/>
            <select type="text" name="status" onChange={this.handleChange} value={this.props.item.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.item.desc}/>
            <input type="text" name="image" onChange={this.handleChange} value={this.props.item.image}/>
        </div>
    }       
}


export default EditItemForm;