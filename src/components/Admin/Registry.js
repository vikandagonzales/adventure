// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// ==========

class Registry extends React.Component {
  render () {
    const registries = this.props.registries;
    const leftColumn = "column is-3";
    const rightColumn = "column is-9";
    return (
      <div className="registry">
        {
          registries.map((registry, i) => {
            return (
              <div key={i} className="columns">
                <div className={leftColumn}>
                  <figure className="image">
                    <img src={registry.logo} alt={registry.store} />
                  </figure>
                </div>
                <div className={rightColumn}>
                  <ul>
                    <li><i className="fa fas fa-store"></i>{registry.store}</li>
                    <li><i className="fa fas fa-link"></i><a href={registry.url} target="_blank" rel="noopener noreferrer">{registry.url}</a></li>
                  </ul>
                </div>             
              </div>
            );
          })
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registry);