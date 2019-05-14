import React, { Component } from 'react';
import './App.css';

import { NavLink, HashRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Love from './love.js';
import { Menu, Icon } from 'antd';

const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }




  render() {
    return (
      <div>
        <Router>
          {/* <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >

          
            <NavLink to="/"><Menu.Item key="/" />Home<Icon type="home" /></NavLink>
            

          
          <NavLink to="/Love"><Menu.Item key="/Love" />Love Test</NavLink>
          
        </Menu> */}
          
          <Route path='/' exact component={Home} />
          <Route path='/Love' exact component={Love} />
          {/* <Route path='/Worder' exact component={props => {
              return <Worder alldata={this.state} updateDB={this.updateDB}/>
            }} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
