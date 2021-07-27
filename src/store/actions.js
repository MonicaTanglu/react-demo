import { getPermissionList } from '@/api/api.js'
export const getPermissions = () => {

    debugger
    return async dispatch => {
        try {
            let res = await getPermissionList()
            debugger
            dispatch({
                type: 'GET_MENU',
                menus: res.result.menu
            })
        } catch (err) {
            console.log('getPeimissions', err)
        }

        // return {
        //     type: 'GET_MENU',
        //     menus: res.result.menu
        // }
    }
    // return {
    //     type: 'GET_MENU',
    //     menus: res.result.menu
    // }
}