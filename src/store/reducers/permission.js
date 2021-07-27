// import { } from '../state'
const initialState = {
    menus: []
}

export const menus = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case 'GET_MENU':
            const menus = action.menus;
            console.log('action.menu', menus)
            return {
                ...state,
                menus: menus
            }

        default:
            return state

    }
}
// export default permission