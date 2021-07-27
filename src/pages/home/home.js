import React from 'react';
import './home.less';
// import { getPermissions } from '@/store/actions'
import { connect } from 'react-redux'
import { getPermissions } from '@/store/actions'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount () {
        const { getPermissions } = this.props
        getPermissions()
    }
    render () {

        // this.props.getPermissions()
        return (
            <div className="welcome">
                Welcome
            </div>
        )
    }
}
function mapStateToProps (state) {
    debugger
    // console.log(state)
    // state.permission.then(res => {
    //     console.log('stateRes', res)
    // })
    return {
        menus: state.menus
    }
}
// function mapDispatchToProps (dispatch) {
//     return {
//         getMenus: getPermissions
//     }
// }
export default connect(mapStateToProps, { getPermissions })(HomePage)
// export default HomePage;
