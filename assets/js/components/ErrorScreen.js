import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class ErrorScreen extends Component {
    render() {
        return (
            <div className="error-screen__container">
                <p className="error-screen__message">Couldn't find selected charity</p>
            </div>
        )
    }
}