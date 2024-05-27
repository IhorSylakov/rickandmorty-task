import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { loadList } from '../redux/actions';
import List from '../Components/List';

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetchedData: false
    };
    this.handleScroll = debounce(this.handleScroll.bind(this), 200);
  }

  componentDidMount() {
    const { characters, nextPage } = this.props;
    if (characters.length === 0 && !this.hasFetchedData) {
      this.props.dispatch(loadList(nextPage));
      this.hasFetchedData = true;
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const threshold = 20;
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - threshold) {
      const { nextPage } = this.props;
      console.log('handlescoll')
      this.props.dispatch(loadList(nextPage));
    }
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
