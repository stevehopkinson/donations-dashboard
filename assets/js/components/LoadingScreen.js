import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class LoadingScreen extends Component {
    render() {
        return (
            <div className="loading-screen__container">
                <p className="loading-screen__message">Loading charity…</p>
            </div>
        )
    }
}