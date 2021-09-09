import React, { Component } from 'react';
import Habitadd from './habitadd';
import Habit from './habit';
import './public.css'
import './habits.css'


class Habits extends Component {
    render() {
        const onReset = () => {
            this.props.habitevent.habitreset()
        }
        return (
            <>
            <Habitadd habitreset={this.props.habitevent.habitAdd}/>
            <ul className="habits">
                {
                    this.props.habits.map(item => 
                        <Habit key={item.id} habits={item} habitevent={this.props.habitevent}/>
                    )
                }
            </ul>
            <button className="reset-all button-style" onClick={onReset}>Reset</button>
            </>
        );
    }
}

export default Habits;