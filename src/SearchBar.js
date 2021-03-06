import React from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'

class SearchBar extends React.Component {
  state ={
    term: ''
  };

  handleTermChange = (event) => {
    this.setState({
      term: event.target.value
    })
  };

  search= () => {
    this.props.onSearch(this.state.term)
    this.setState({
      term: ''
    })
  };

  render() {
    return (
      <div>
        <Input
          // value={this.state.term}
          // icon={{
          //   name: 'search',
          //   circular: true,
          //   link: true,
          //   onClick: this.search}}
          // placeholder='Type to search...'
          // onChange={this.handleTermChange}

        >
          <Input
            className="search"
            value={this.state.term}
            icon={{
              name: 'search',
              circular: true,
              link: true,
              onClick: this.search}}
            placeholder='Type to search...'
            onChange={this.handleTermChange}/>
          <Button
            className="clear"
            type="icon"
            onClick={this.props.handleClearTerm}
          >X</Button>
      </Input>

      </div>
  )
  }
}

export default SearchBar;