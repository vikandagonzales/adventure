// REACT
import React from 'react';

// ROUTER
import {Link} from 'react-router-dom';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// ==========

class Main extends React.Component {
  render () {
    return (
      <div>
        this is main
        <Link to="/invitation">
          link to invitation
        </Link>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);