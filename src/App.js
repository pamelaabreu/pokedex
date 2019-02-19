import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Profile from './components/profile';
import Homepage from './components/homepage';
import Searchbar from './components/searchbar';
let offset = 0;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: '',
      poke_list: [],
      activeIndex: null,
      pageOffset: 0,
      isFetching: false,
    }
  }

  getlist = () => {
    let listUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;

    Axios.get(listUrl)
      .then(response => response.data)
      .then(data => {
        offset += 20;
  
        if(this.state.poke_list.length >= 20){
          const dataList = data.results.map((e, i) => {
            const name = e.name;
            const number = i + 1 + this.state.poke_list.length;
            const image = `https://img.pokemondb.net/sprites/sun-moon/icon/${name}.png`;
  
            return { image, name, number };
          });

          const {pageOffset2} =this.state;
          const pkList = this.state.poke_list.concat(dataList);
          this.setState({
            poke_list: pkList,
            isFetching: false, 
            pageOffset: pageOffset2 + pkList.length
          });
          
        } else {
          const dataList = data.results.map((e, i) => {
            const name = e.name;
            const number = i + 1;
            const image = `https://img.pokemondb.net/sprites/sun-moon/icon/${name}.png`;
  
            return { image, name, number };
          })
      
          const pkList = this.state.poke_list.concat(dataList);
          const {pageOffset2} =this.state;

          this.setState({
            poke_list: pkList, 
            isFetching: false, 
            pageOffset: pageOffset2 + dataList.length});
        };
      })
      .catch(err => {
        console.log(err);
      })
  }

  toggleProfile = (name) => {
    this.setState({activeIndex: name});
  }

  toggleHomePage = () => {
    this.setState({activeIndex: null});
  }

  componentDidMount () {
    window.addEventListener("scroll", this.handleScroll);
    this.getlist();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.state.poke_list.length &&
      !this.state.isFetching
    ) {
      this.getlist();
    }
  };

  componentDidUpdate (prevProps, prevState) {
    // console.log('this was previous state', prevState)
    // console.log('this is current state', this.state)
  }

  render() {
    return (
      <>
        <Searchbar click={this.toggleProfile}/>

        {!this.state.activeIndex ? 
        <Homepage click={this.toggleProfile} data={this.state.poke_list} onClick={this.getlist}/> 
        : 
        <Profile name={this.state.activeIndex} onClick={this.toggleHomePage}/>}
      </>
    );
  }
}

export default App;
