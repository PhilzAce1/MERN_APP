import React, {Component} from 'react';
import AppNavbar from './component/AppNavbar';
import ShoppingList from './component/ShoppingList';
import ItemModal from './component/ItemModal';
import { Provider } from 'react-redux'
import store from './store'
import './App.css' ;
import { Container } from 'reactstrap';

class App extends Component{
  render(){
    return(
    <Provider store={store}>
      <div className="App">
       <AppNavbar />
       <Container>
        <ItemModal />
         <ShoppingList />
       </Container>
       
      </div>
    </Provider>
      
    )
  }
}
export default App;
