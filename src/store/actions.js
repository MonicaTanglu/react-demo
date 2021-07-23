import { getPermissionList } from '@/api/api.js'
export const getPermissions = async () => {
    let res = await getPermissionList()
    return {
        type: 'GET_MENU',
        menus: res.result.menus
    }
}