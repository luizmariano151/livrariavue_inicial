import { http } from './API'

export default {

    signIn: (auth) => {
        return http.post("/user/autenticar", auth);
    },

    signUp: (user) => {
        return http.post("/user/cadastrar", user);
    }

}