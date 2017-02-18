/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
//import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';
import {Header, HeaderRow, HeaderTabs, Tab, Drawer, Content} from 'react-mdl';

class Layout extends React.Component {



  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <Layout fixedHeader fixedTabs>
          <Header>
              <HeaderRow className={s.titleContainer}>
                <label className={s.title}>
                Charles Sanford
                </label>
              </HeaderRow>
              <HeaderTabs ripple activeTab={0} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                  <Tab>About</Tab>
                  <Tab>Portfolio</Tab>
                  <Tab>Resume</Tab>
              </HeaderTabs>
          </Header>
          <Content>
              <div className="page-content">Yo.</div>
          </Content>
      </Layout>
      )}
}

export default Layout;
