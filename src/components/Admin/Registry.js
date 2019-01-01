// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// ==========

class Registry extends React.Component {
  render () {
    const registries = this.props.registries;
    return (
      <div className="columns details-container registry">
        {
          registries.map((registry, i) => {
            return (
              <div key={i} className="column is-4-tablet is-12-mobile">
                <figure className="image">
                  <a href={registry.url} target="_blank" rel="noopener noreferrer">
                    <img src={registry.logo} alt={registry.store} />
                  </a>
                </figure>
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