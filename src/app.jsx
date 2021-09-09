import { Component } from 'react';
import './App.css';
import Habits from './component/habits';
import Header from './component/header';


class App extends Component{
  state = {
    habits : [
      {id:0,name:'coding',count:0},
      {id:1,name:'running',count:0},
      {id:2,name:'gaming',count:0}
    ],
    habitEvents : {
      habitplus : (habit) => {
         habit.count++
         const habits = this.state.habits
         this.setState({habits})
      },
      habitminus : (habit) => {
        if(habit.count > 0){
          habit.count--
          const habits = this.state.habits
          this.setState({habits})
        }
      },
      habitreset : () => {
          this.state.habits.map(item => {
            if(item.count !== 0){
              item.count = 0
            }
          })
          const habits = this.state.habits
          this.setState({habits})
      },
      habitAdd : (add) => {
         const habits = [...this.state.habits,{id:this.state.habits.length + 1, name:add, count:0}]
         this.setState({habits})
      },
      habitDelete : (habit) => {
        const habits = this.state.habits.filter(item => habit.id !== item.id)
        this.setState({habits})
     }
    }
  }
  render(){
    return (
      <>
       <Header habitsall={this.state.habits}/>
       <Habits habits={this.state.habits} habitevent={this.state.habitEvents}/>
      </>
    )
  }
}

export default App;
