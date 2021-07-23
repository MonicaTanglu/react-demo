// import { } from '../state'
const initialState = {
    menus: []
}

async function permission (state = initialState, action) {
    switch (action.type) {
        case 'GET_MENU':
            const menus = action.menus;
            return {
                ...state,
                menus: menus
            }

        default:
            return state

    }
}
export default permission