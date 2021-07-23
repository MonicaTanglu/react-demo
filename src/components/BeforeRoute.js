import { React } from 'react'

class BeforeRoute extends React.Component {
    whiteList = ['/login']
    getPermissions() {
        
    }
    // render () {
    //     const { routes } = this.props
    //     const token = sessionStorage.getItem('token')
    //     const pathname = location.pathname 
    //     if(token) {
            
    //     } else {
    //         if(this.whiteList.indexOf(pathname) > -1) {
    //             return <Route></Route>
    //         }
    //     }
    // }

}

export default BeforeRoute