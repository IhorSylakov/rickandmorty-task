import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { loadList } from '../redux/actions';
import List from '../Components/List';

class Home extends React.Component {

  componentDidMount() {
    const { characters, nextPage } = this.props;
    if (characters.length === 0) {
      this.props.dispatch(loadList(nextPage))
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }

    const { nextPage } = this.props;
    this.props.dispatch(loadList(nextPage));
  }

  render() {
    const { characters } = this.props;

    return (
      <Fragment>
        <h1>A list of Rick and Morty's characters</h1>
        <List characters={characters} />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.data.characters,
    pages: state.data.pages,
    nextPage: state.data.nextPage
  }
}

export default connect(mapStateToProps)(Home)
