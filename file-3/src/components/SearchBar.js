import React from "react";

class SearchBar extends React.Component {
  //   uncontrolled ie. at any instant value of input is with DOM
  onInputChange(event) {
    console.log(event.target.value);
  }
  // controlled ie. at any instant value of input is with react
  state = { term: "" };

  // either use arrow function here or in the jsx (this is to appoint the correct value of 'this')
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.toReturnValue(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {
              <input
                type="text"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              /* onChange={this.onInputChange}*/
            }
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
