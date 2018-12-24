// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {archiveStaff, archiveStaffReset} from '../../../../../../../../state/actions/staff';
//import {logout} from '../../../../../../../../state/actions/auth';

// COMPONENTS
import GuestDelete from './GuestDelete';

// ==========

class Guest extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      edit: false,
      modal: false,
      modalClasses: 'modal',
      first_name: this.props.guest.first_name,
      last_name: this.props.guest.last_name
    };
  };

  edit = () => {
    this.setState({edit: !this.state.edit});
  };

  toggle = () => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  deleteStaff = async event => {
    event.preventDefault();
    // await this.props.archiveStaff(this.props.staff.id);
    // if (!this.props.archiveStaffError) {
    //   this.props.toggle();
    //   if (this.props.staff.id === this.props.user.id) this.props.logout();
    // }
  };

  componentDidMount () {
    //    this.props.archiveStaffReset();
  };

  render () {
    const guest = this.props.guest;
    return (
      <li>        
        <form onSubmit={this.login}>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <p className="control">
                  (checkbox)
                </p>
              </div>
              <div className="field">
                <p className="control">
                  {
                    (() => {
                      switch (guest.accepted) {
                        case true:
                          return 'yes';
                        case false:
                          return 'no';
                        default:
                          return '?';
                      }
                    })()
                  }
                </p>
              </div>
              <div className="field">
                <p className="control">
                  {
                    !this.state.edit ? (
                      <span>
                        {guest.first_name}
                      </span>
                    ) : (
                      <input
                        className="input"
                        type="text"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={event => this.setState({first_name: event.target.value})}
                        required
                      />
                    )
                  }                 
                </p>
              </div>
              <div className="field">
                <p className="control">
                  {
                    !this.state.edit ? (
                      <span>
                        {guest.last_name}
                      </span>
                    ) : (
                      <input
                        className="input"
                        type="text"
                        placeholder="Last Name"
                        value={this.state.last_name}
                        onChange={event => this.setState({last_name: event.target.value})}
                        required
                      />
                    )
                  }
                </p>
              </div>
            </div>
            <div className="field">
              <div className="buttons">
                {
                  !this.state.edit ? (
                    <span className="button" onClick={this.edit}>Edit</span>
                  ) : (
                    <div>
                      <button className="button">Save</button>
                      <span className="button" onClick={this.edit}>Cancel</span>
                      {guest.plus_one ? <span className="button" onClick={this.toggle}>Delete</span> : null}
                    </div>                    
                  )
                }                
              </div>
            </div>
          </div>
          {
            this.props.addGuestError ? (
              <p className="help is-danger">
                Could not add guest.
              </p>
            ) : null
          }
        </form>       
        <GuestDelete modalClasses={this.state.modalClasses} toggle={this.toggle} guest={guest} />
      </li>
    );
  };
};

const mapStateToProps = state => ({
  // user: state.auth.user,
  // staffs: state.staff.staffs,
  // archiveStaffError: state.staff.archiveStaffError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // archiveStaff,
  // archiveStaffReset,
  // logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Guest);