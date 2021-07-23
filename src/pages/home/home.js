import React from 'react';
import './home.less'; 
import { getPermissions } from '@/store/actions'
import { connect } from 'react-redux'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        // this.props.getPermissions()
        return (
            <div className="welcome">
                Welcome
            </div>
        )
    }
}
export default connect(null,{getPermissions})(HomePage)
// export default HomePage;
