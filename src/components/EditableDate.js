import React, { Component, PropTypes } from 'react'
import editable from '../HOC/editable'
import DayPicker from "react-day-picker"
import moment from 'moment'
import { dateFormat } from '../settings'

import "react-day-picker/lib/style.css"

class EditableDate extends Component {
    static propTypes = {
        editable: PropTypes.bool,
        date: PropTypes.object.isRequired,
        makeEditable: PropTypes.func.isRequired,
        blur: PropTypes.func.isRequired
    };

    render() {
        const { editable } = this.props
        return editable ? this.getEditable() : this.getRegular()
    }

    getEditable() {
        return <div className="datepicker-block"><DayPicker onDayClick={ (e, day) => this.props.blur(day)() } /></div>

    }

    handleChange = date => this.props.blur(date)

    getRegular() {
        const { date, makeEditable } = this.props
        return (
            <div onClick = {makeEditable}>{moment(date).format('MMM Do YY')}</div>
        )
    }
}

export default editable(EditableDate)