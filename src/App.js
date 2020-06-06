import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
//import Dashboard from './components/content/Dashboard';
import Dashboard from './components/content/Dashboard';
import AddPanel from './components/content/AddPanel';
import './App.css';
import Examples from "./components/content/Examples";

const styles = StyleSheet.create({
  container: {
    height: '100%',
    minHeight: '100vh',
    backgroundColor: '#F7F8FC',
  },
  content: {
    marginTop: 54
  },
  mainBlock: {
    height: '100vh',
    minHeight: '100vh',
    backgroundColor: '#F7F8FC',
    padding: 30
  }
});

class App extends React.Component {

  state = { selectedItem: 'Dashboard' };

  componentDidMount() {
    window.addEventListener('resize', this.resize);

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }


  selectComponent = () => {
    switch (this.state.selectedItem) {
      case 'Add Panel':
        return <AddPanel/>
      case 'Dashboard':
        return <Dashboard/>
      case 'Dashboard Examples':
        return <Examples/>
      default:
        return <AddPanel/>
    }
  }

  resize = () => this.forceUpdate();

  render() {
    const { selectedItem } = this.state;
    return (
        <Row className={css(styles.container)}>
          <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
          <Column flexGrow={1} className={css(styles.mainBlock)}>
            <HeaderComponent title={selectedItem} />
            <div className={css(styles.content)}>
              {this.selectComponent()}
            </div>
          </Column>
        </Row>
    );
  }
}

export default App;
