import React from 'react';
import { Tooltip } from 'antd'

class CEllipsis extends React.Component {
    ellipsis (v, len) {
        if (!v) return ""
        if (v.length > len) {
            return v.slice(0, len) + '...'
        }
        return v
    }
    render () {
        return (
            <Tooltip title={this.props.title}>
                <span>{this.ellipsis(this.props.title, this.props.len)}</span>
            </Tooltip>
        )
    }
}
export default CEllipsis