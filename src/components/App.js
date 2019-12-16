import React from 'react';
import SearchBar from './SearchBar';
import unsplash from "../api/unsplash"
import ImageList from "./imageList"

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
        <ImageList images={this.state.images}/>
      </div>
    );

  }
}

export default App;
