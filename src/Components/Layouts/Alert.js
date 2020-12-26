import React from 'react'
import { connect } from 'react-redux'

const Alert = ({ alerts }) =>

    alerts.map(alert =>
        (
            <div style={{ marginLeft: '20%', width: '50%', marginTop: '3%' }} key={alert.id}
                className={`alert alert-${alert.alertType} alert-dismissible fade show`} role="alert">
                <strong>
                    {alert.msg}
                </strong>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        ))

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert)