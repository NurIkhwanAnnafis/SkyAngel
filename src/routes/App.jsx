/* eslint-disable import/no-cycle */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import cx from 'classnames';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened:
        document.documentElement.className.indexOf('nav-open') !== -1
    };
  }

  componentDidMount() {}

  toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };

  render() {
    const { route, app } = this.props;

    return (
      <div
        className={cx('container-scroller', {
          'sidebar-toggle': app.miniSidebar
        })}
      >
        <Header {...this.props} />
          <div className="container-fluid page-body-wrapper">
            <Sidebar {...this.props} />
            <div className="main-panel">{renderRoutes(route.routes)}</div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps, null)(App);
