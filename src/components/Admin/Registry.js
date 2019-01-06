// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addRegistry, addRegistryReset} from '../../state/actions/registries';

// COMPONENTS
import RegistryAdd from './RegistryAdd';

// ==========

class Registry extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      add: false
    };
  };

  add = () => {
    this.props.addRegistryReset();
    this.setState({add: !this.state.add});
  };

  render () {
    const registries = this.props.registries;
    const leftColumn = "column is-3";
    const rightColumn = "column is-9";
    return (
      <div className="registry">
        <div className="buttons is-centered">
          <span className="button is-primary" onClick={this.add}>
            <span className="icon">
              <i className="fa fas fa-plus"></i>
            </span>
            <span>Add Registry</span>
          </span>
        </div>
        {
          this.state.add ? (
            <RegistryAdd
              add={this.add}
              addRegistry={this.props.addRegistry}
              addRegistryError={this.props.addRegistryError}
            />
          ) : null
        }  
        {
          registries.map((registry, i) => {
            return (
              <div key={i}>
                <div className="columns">
                  <div className={leftColumn}>
                    <figure className="image">
                      <img src={registry.logo} alt={registry.store} />
                    </figure>
                  </div>
                  <div className={rightColumn}>
                    <ul>
                      <li>
                        <i className="fa fas fa-store"></i>
                        {registry.store}
                      </li>
                      <li>
                        <i className="fa fas fa-image"></i>
                        <a href={registry.logo} target="_blank" rel="noopener noreferrer">
                          {registry.logo.length > 30 ? registry.logo.substring(0, 30) + '...' : registry.logo}
                        </a>
                      </li>
                      <li>
                        <i className="fa fas fa-link"></i>
                        <a href={registry.url} target="_blank" rel="noopener noreferrer">
                          {registry.url.length > 30 ? registry.url.substring(0, 30) + '...' : registry.url}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="buttons is-right">
                  <span className="button is-primary is-small">
                    <span className="icon">
                      <i className="fa fas fa-pen"></i>
                    </span>
                  </span>
                  <span className="button is-danger is-small">
                    <span className="icon">
                      <i className="fa fas fa-trash-alt"></i>
                    </span>
                  </span>
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
  addRegistryError: state.registries.addRegistryError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addRegistry,
  addRegistryReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registry);