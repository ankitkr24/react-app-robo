import React,{Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'
import Scroll from './Scroll'



class App extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''

        }
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
       
    
    }
    render(){
        const filteredRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 style={{color:'white'}}>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                
            </div>
            
        )
        
    }
}
export default App;