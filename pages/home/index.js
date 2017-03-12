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
import {Layout, Header, HeaderRow, Content} from 'react-mdl';
import InnerContent from '../../components/Layout/InnerContent';


class HomePage extends React.Component {
  constructor(props) {
         super(props)
         this.state = {};
  }
  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
        <Layout className={s.main} fixedHeader>
            <header className={s.header}>
                  <label className={s.title}>
                  Charles Sanford
                  </label>
            </header>
            <InnerContent/>
        </Layout>
    );
  }

}

export default HomePage;
