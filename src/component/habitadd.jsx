import React, { Component } from 'react';
import './habits.css'
import './public.css'

class Habitadd extends Component {
    render() {
        const addTextRef = React.createRef()
        const onAdd = (e) => {
           e.preventDefault()
           this.props.habitreset(addTextRef.current.value)
        }
        return (
            <form className="habitadd" onSubmit={onAdd}>
               <input 
               ref={addTextRef} 
               className="add-text" 
               type="text"
               placeholder="add habit contents"
               />
               <input className="add-submit button-style" type="submit" value="add"/> 
            </form>
        );
    }
}

export default Habitadd;