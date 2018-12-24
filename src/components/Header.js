// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logout} from '../state/actions/auth';

// ==========

class Header extends React.Component {
  render () {
    const user = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name
    };
    return (
      <div>
        {
          this.props.authorized ? (
            <div>
              {user.first_name} {user.last_name}
              <span className="button" onClick={this.props.logout}>Log Out</span>
            </div>            
          ) : null
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);