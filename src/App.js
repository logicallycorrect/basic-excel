import React, { Component } from 'react';
import {connect} from 'react-redux';
import {gridCreate} from './variables'
import * as actions from './actions/actions'
import './App.css';



class App extends Component {


  handleChange = e => {
   console.log(e)
   this.props.dispatch(actions.updateCell(e.target.dataset.id, e.target.dataset.key, e.target.value));
  };


  handleSubmit = e => {
    if(e.target.value[0] == '='){
   let temp = e.target.value.slice(1);
   this.props.dispatch(actions.checkCell(temp, e.target.dataset.key, e.target.dataset.id));
    }
   };


  componentDidMount() {
    let columnArray = ['ROW','A', 'B', 'C', 'D', 'E', 'F'];
    let tempArr = gridCreate(columnArray);
    console.log(tempArr);
    this.props.dispatch(actions.initialGrid(tempArr));
  }

  render() {
    return (
      <div className="mainSection">
            {
              this.props.state.map((val,i) => {
              return <input type="text" className = {i<7||i%7==0?'non-editable':'editable'} value={i<7||i%7==0?'':this.props.state[i].value} onChange={this.handleChange}
              onKeyPress={e => {
                if (e.which === 13) {
                  this.handleSubmit(e)
                }
              }}
              key = {val.key} data-id = {i} data-key = {val.key} placeholder={val.key}
              />
            })}      
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.data,

})


// const mapDispatchToProps = dispatch => ({
 
// })

export default connect(mapStateToProps)(App)
