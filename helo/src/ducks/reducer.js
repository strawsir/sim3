const initialState={
    username: 'NO USERNAME FOUND',
    id: 0,
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thu…/58/Shiba_inu_taiki.jpg/220px-Shiba_inu_taiki.jpg"
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(id, username, profilePic){
    return {
        type: UPDATE_USER,
        payload:{
            id: id,
            username: username,
            img: profilePic
        }
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USER:
            return Object.assign({}, state, {
                id: action.payload.id,
                username: action.payload.username,
                img: action.payload.profilePic
            })
        default:
        return state;
    }
}