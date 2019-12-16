import React from "react"

class SearchBar extends React.Component {
  state= {
    searchTerm: ""
  }

  onInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    //console.log(this.state.searchTerm)
    this.props.onSearchSubmit(this.state.searchTerm)
    
  }

  render(){
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.searchTerm} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar