import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css'

const Notification = ({message}) => {
    return(
        <p className={css.txt}>{message}</p>
    )
}

export default Notification

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}