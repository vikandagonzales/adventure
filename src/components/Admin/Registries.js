// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  addRegistry,
  addRegistryReset,
  editRegistry,
  editRegistryReset,
  deleteRegistry,
  deleteRegistryReset
} from '../../state/actions/registries';

// COMPONENTS
import Registry from './Registry';
import RegistryAdd from './RegistryAdd';

// ==========

class Registries extends React.Component {
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
    return (
      <div className="registries">
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
          this.props.editRegistryError ? (
            <p className="help is-danger has-text-centered">
              Could not edit registry.
                </p>
          ) : null
        }
        {
          registries.map((registry, i) => {
            return (
              <Registry
                key={i}
                editRegistry={this.props.editRegistry}
                editRegistryReset={this.props.editRegistryReset}
                editegistryError={this.props.editRegistryError}
                deleteRegistry={this.props.deleteRegistry}
                deleteRegistryReset={this.props.deleteRegistryReset}
                deleteRegistryError={this.props.deleteRegistryError}
                registry={registry}
              />
            );
          })
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  addRegistryError: state.registries.addRegistryError,
  editRegistryError: state.registries.editRegistryError,
  deleteRegistryError: state.registries.deleteRegistryError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addRegistry,
  addRegistryReset,
  editRegistry,
  editRegistryReset,
  deleteRegistry,
  deleteRegistryReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registries);