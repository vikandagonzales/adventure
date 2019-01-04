// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editGuest, editGuestReset} from '../../state/actions/guests';

// COMPONENTS
import Group from './Group';

// ==========

class Guests extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: [],
      refresh: false
    };
  };

  select = id => {
    if (this.state.selected.find(existing => existing === id)) {
      this.setState({selected: this.state.selected.filter(existing => existing !== id)});
    } else {
      this.setState({selected: [...this.state.selected, id]});
    }
  };

  editGuest = async action => {
    await this.state.selected.forEach(id => {
      switch (action) {
        case 'accept':
          this.props.editGuest({accepted: true}, id, this.props.group.id);
          break;
        case 'decline':
          this.props.editGuest({accepted: false}, id, this.props.group.id);
          break;
        default:
          break;
      }
    });
    this.setState({selected: [], refresh: !this.state.refresh});
  };

  componentDidMount = () => {
    this.props.editGuestReset();
  };

  render () {
    const groups = this.props.groups;
    return (
      <div className="guests">
        <div className="buttons is-centered">
          <span
            className="button is-success"
            onClick={() => this.editGuest('accept')}
            disabled={this.state.selected.length > 0 ? false : true}
          >
            <span className="icon">
              <i className="fa fas fa-check"></i>
            </span>
            <span>Accept</span>
          </span>
          <span
            className="button is-danger"
            onClick={() => this.editGuest('decline')}
            disabled={this.state.selected.length > 0 ? false : true}
          >
            <span className="icon">
              <i className="fa fas fa-times"></i>
            </span>
            <span>Decline</span>
          </span>
          <span className="button is-info">
            <span className="icon">
              <i className="fa fas fa-redo"></i>
            </span>
            <span>Reset</span>
          </span>
          <span className="button is-primary">
            <span className="icon">
              <i className="fa fas fa-plus"></i>
            </span>
            <span>Add Group</span>
          </span>
        </div>
        <ul>
          {
            groups.map((group, i) => {
              return (
                <Group
                  key={i}
                  group={group}
                  select={this.select}
                  editGuest={this.props.editGuest}
                  editGuestReset={this.props.editGuestReset}
                  editGuestError={this.props.editGuestError}
                  refresh={this.state.refresh}
                />
              );
            })
          }
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  groups: state.admin.groups,
  addGuestError: state.admin.addGuestError,
  editGuestError: state.admin.editGuestError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editGuest,
  editGuestReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Guests);