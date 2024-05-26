import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styles from "./layout.module.css";

import { loadHero } from '../redux/actions';

class Character extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(loadHero(+id));
  }

  render() {
    const { hero } = this.props;
    const {
      image,
      name,
      status,
      gender,
      species,
    } = hero;

    return (
      <Fragment>
        <h1>{name}</h1>
        <div className={styles.content}>
          <img src={image} className={styles.contentImage} alt={name} />
          <div className={styles.contentDescription}>
            <dl>
              <dt>status:</dt>
              <dd>{status}</dd>
              <dt>gender:</dt>
              <dd>{gender}</dd>
              <dt>species:</dt>
              <dd>{species}</dd>
            </dl>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur minus optio facilis. Cumque exercitationem odit, tempore accusantium, enim iste omnis optio deleniti, repellat fugit labore quidem eveniet quasi quae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur minus optio facilis. Cumque exercitationem odit, tempore accusantium, enim iste omnis optio deleniti, repellat fugit labore quidem eveniet quasi quae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur minus optio facilis. Cumque exercitationem odit, tempore accusantium, enim iste omnis optio deleniti, repellat fugit labore quidem eveniet quasi quae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur minus optio facilis. Cumque exercitationem odit, tempore accusantium, enim iste omnis optio deleniti, repellat fugit labore quidem eveniet quasi quae.</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  hero: state.data.hero
})

export default connect(mapStateToProps)(Character)
