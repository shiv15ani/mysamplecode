import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import MyContainer from './containers/MyContainer';
import LoginPage from './components/LoginPage';
import MyForm from './components/MyForm';
import ProfileForm from './components/ProfileForm';
import DisplayProfile from './components/DisplayProfile';
import './App.css';
import DisplayComponent from './components/DisplayComponent';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {loadData} from './actions/AddFields';
export default class  App extends Component{
  componentDidMount(){
    console.log("aoo mounting");
    //this.props.loadData();
    
  }
render(){
    return(
       <div>
      
        <Route path="/" exact component={MyContainer}/>
        <Route path="/LoginPage" component={LoginPage}/>
        <Route path="/MyForm" component={MyForm}/>
        <Route path="/DisplayComponent" component={DisplayComponent}/>
        <Route path="/ProfileForm" component={ProfileForm}/>
        <Route path="/DisplayProfile" component={DisplayProfile}/>
       
      </div>
      )
}
  
}
// const  mapStateToProps = (state) => {
//   console.log("form")
//   console.log(state);
//   return{
//     data: state.Reducer
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return{
    
//     loadData: bindActionCreators(loadData, dispatch)

//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
