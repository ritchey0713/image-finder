import React from 'react';
import SearchBar from './SearchBar';
import unsplash from "../api/unsplash"


class App extends React.Component {
  state = {
    images: []
  }
  


onSearchSubmit = async (searchTerm) => {
  const resp = await unsplash.get("/search/photos", {
    params: {
      query: searchTerm
    },
   

  })
  this.setState({
    images: resp.data.results
  })

}

  render(){
    return (
      <div className="App ui container" style={{marginTop: "10px"}}>
        Image finder
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length}
      </div>
    );

  }
}

export default App;
