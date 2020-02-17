import React, { Component } from 'react'
import CustomRoute from './CustomRoute';
import {Provider} from 'react-redux'
import SigninStore from './redux/SigninStore'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Provider store={SigninStore}>
        <CustomRoute />
        </Provider>
      </React.Fragment>
    )
  }
}
