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
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader fixedTabs>
            <Header>
                <HeaderRow title="Charles Sanford" />
                <HeaderTabs ripple activeTab={0} onChange={(tabId) => {}}>
                    <Tab>About</Tab>
                    <Tab>Portfolio</Tab>
                    <Tab>Resume</Tab>
                </HeaderTabs>
            </Header>
            <Drawer title="Charles Sanford" />
            <Content>
                <div className="page-content">You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.</div>
            </Content>
        </Layout>
    </div>
  )}
}

export default Layout;
