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
import InnerContent from '../../components/Layout/InnerContent';


class HomePage extends React.Component {
  constructor(props) {
         super(props)
         this.state = { activeTab: 0,

         };
     }
  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div style={{height: '1000px', position: 'relative'}}>
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
              <InnerContent tab = {this.state.activeTab}/>
            </Content>
        </Layout>
    </div>
    );
  }

}

export default HomePage;
