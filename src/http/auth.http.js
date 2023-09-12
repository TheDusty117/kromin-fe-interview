import axios from './'

const AuthAPI = {
    loginUser: data => {
        const url = 'https://todoapp.backend.k-stage.dev/api/auth/login'
        return axios.post(url, data)
    },
    logoutUser: () => {
        const url = 'https://todoapp.backend.k-stage.dev/api/auth/logout'
        return axios.get(url)
    },
    signupUser: data => {
        const url = 'https://todoapp.backend.k-stage.dev/api/auth/signup'
        return axios.post(url, data)
    },
}

export default AuthAPI
