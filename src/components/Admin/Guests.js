// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  addGuest,
  addGuestReset,
  editGuest,
  editGuestReset,
  deleteGuest,
  deleteGuestReset,
  addGroup,
  addGroupReset,
  editGroup,
  editGroupReset,
  deleteGroup,
  deleteGroupReset
} from '../../state/actions/groups';

// COMPONENTS
import Group from './Group';
import GroupAdd from './GroupAdd';

// ==========

class Guests extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: [],
      refresh: false,
      add: false
    };
  };

  select = id => {
    if (this.state.selected.find(existing => existing === id)) {
      this.setState({selected: this.state.selected.filter(existing => existing !== id)});
    } else {
      this.setState({selected: [...this.state.selected, id]});
    }
  };

  add = () => {
    this.props.addGroupReset();
    this.setState({add: !this.state.add});
  };

  editGuest = async action => {
    await this.state.selected.forEach(id => {
      switch (action) {
        case 'accept':
          this.props.editGuest({accepted: true}, id);
          break;
        case 'decline':
          this.props.editGuest({accepted: false}, id);
          break;
        case 'reset':
          this.props.editGuest({accepted: null}, id);
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
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Total</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Tweets</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Following</p>
              <p class="title">123</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Likes</p>
              <p class="title">789</p>
            </div>
          </div>
        </div>
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
          <span
            className="button is-info"
            onClick={() => this.editGuest('reset')}
            disabled={this.state.selected.length > 0 ? false : true}
          >
            <span className="icon">
              <i className="fa fas fa-redo"></i>
            </span>
            <span>Reset</span>
          </span>
          <span
            className="button is-primary"
            onClick={this.add}
          >
            <span className="icon">
              <i className="fa fas fa-plus"></i>
            </span>
            <span>Add Group</span>
          </span>
        </div>
        {
          this.state.add ? (
            <GroupAdd
              add={this.add}
              addGroup={this.props.addGroup}
              addGroupError={this.props.addGroupError}
            />
          ) : null
        }
        {
          this.props.addGuestError ? (
            <p className="help is-danger has-text-centered">
              Could not add guest.
              </p>
          ) : null
        }
        <ul>
          {
            groups.map((group, i) => {
              return (
                <Group
                  key={i}
                  group={group}
                  select={this.select}
                  addGuest={this.props.addGuest}
                  addGuestReset={this.props.addGuestReset}
                  addGuestError={this.props.addGuestError}
                  editGuest={this.props.editGuest}
                  editGuestReset={this.props.editGuestReset}
                  editGuestError={this.props.editGuestError}
                  deleteGuest={this.props.deleteGuest}
                  deleteGuestReset={this.props.deleteGuestReset}
                  deleteGuestError={this.props.deleteGuestError}
                  editGroup={this.props.editGroup}
                  editGroupReset={this.props.editGroupReset}
                  editGroupError={this.props.editGroupError}
                  deleteGroup={this.props.deleteGroup}
                  deleteGroupReset={this.props.deleteGroupReset}
                  deleteGroupError={this.props.deleteGroupError}
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
  addGuestError: state.groups.addGuestError,
  editGuestError: state.groups.editGuestError,
  deleteGuestError: state.groups.deleteGuestError,
  addGroupError: state.groups.addGroupError,
  editGroupError: state.groups.editGroupError,
  deleteGroupError: state.groups.deleteGroupError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addGuest,
  addGuestReset,
  editGuest,
  editGuestReset,
  deleteGuest,
  deleteGuestReset,
  addGroup,
  addGroupReset,
  editGroup,
  editGroupReset,
  deleteGroup,
  deleteGroupReset,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Guests);