import React from 'react';
import './searchbar.css';
import {pkmn_list} from './pkmn-list';

class Searchbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            initialState: "Search pokemon",
            currentText: "",
            searchResults:[]
        }
    }
    changeText(currentText ) {
        this.setState({ currentText });
        //console.log({currentText});

    }
    onChange=(e)=>{ 
        const input= e.target.value;

        if(input === '' || input === ' '){
            this.setState({searchResults:[]});
        } else {
            const searchResultsArr=pkmn_list.map((e,i)=>{
                if(e.toUpperCase().includes(input.toUpperCase())){
                    return e;
                }
                
             })
                this.setState({searchResults:searchResultsArr});
        }

    }
    dropDown=()=>{
        const dropDown= this.state.searchResults.map((e,i)=>{
            return <p onClick={() => this.props.click(e.toLowerCase())} key={i}>{e}</p>
            
        })

        return dropDown;
        
    }

    render() {
        return (
            <>
                <div className="redheader" ></div>
                
                    <div className="searchbar-container" >
                        <div className='img-col'>

                            <img src="https://files.slack.com/files-pri/TD416AWAE-FG4DTBZAR/download/screen_shot_2019-02-11_at_7.20.46_pm.png" />
                        </div>

                        <div className='search-col'>

                        <h1 className= "header-title"> Pursuit Pokedex</h1>
                            <form >
                                <input type="text" placeholder={this.state.initialState} onChange={this.onChange} />
                                <button onClick={this.changeText.bind(this, 'currentText')}>Search</button>
                                {this.state.searchResults.length > 0 ?
                                    this.dropDown() : <p></p>
                                }
                            </form>
                        </div>

                        <div className='img-col'>
                                <img src="https://files.slack.com/files-pri/TD416AWAE-FG4DTBZAR/download/screen_shot_2019-02-11_at_7.20.46_pm.png" />
                        </div>
                    </div>
            </>
        );

    }

}

export default Searchbar;