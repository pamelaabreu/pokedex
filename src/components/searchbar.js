import React from 'react';
import './searchbar.css';

 class Searchbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initialState: "Search for pokemon",
        currentText: " "
      }
    }
  
    changeText(currentText) {
      this.setState({currentText});
      //console.log({currentText});
    }
  
    render() {
      return (
          <>
           
            <div class="search-box">
              <form>
                <input type="text" placeholder={this.state.initialState} onChange={this.changeText.bind(this, 'currentText')} />
                <button onClick={this.changeText.bind(this, 'currentText')}>Search</button>
              </form>
            </div>
          </>
      );
  
    }
  
  }

  export default Searchbar;