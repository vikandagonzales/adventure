// REACT
import React from 'react';

// ==========

class Registry extends React.Component {
  render () {
    const registries = this.props.registries;
    return (
      <div className="columns details-container">
        {
          registries.map((registry, i) => {
            return (
              <div key={i} className="column is-3">
                <figure className="image">
                  <a href={registry.url} target="_blank" rel="noopener noreferrer">
                    <img src={registry.logo} alt={registry.store} />
                  </a>
                </figure>
              </div>
            );
          })
        }
        {
          registries.map((registry, i) => {
            return (
              <div key={i} className="column is-3">
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

export default Registry;