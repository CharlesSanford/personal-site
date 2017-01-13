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
import s from './styles.css';
import { title, html } from './index.md';
import {Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content} from 'react-mdl';


class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader fixedTabs>
            <Header>
                <HeaderRow className={s.titleContainer}>
                  <label className={s.title}>
                  Charles Sanford
                  </label>
                </HeaderRow>
                <HeaderTabs ripple activeTab={0} onChange={(tabId) => {}}>
                    <Tab>About</Tab>
                    <Tab>Portfolio</Tab>
                    <Tab>Resume</Tab>
                </HeaderTabs>
            </Header>
            <Content>
                <div className="page-content">You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.</div>
            </Content>
        </Layout>
    </div>
    );
  }

}

export default HomePage;
