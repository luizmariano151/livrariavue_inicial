import localStorage from '../services/localStorage';

export default {

    adiciona_endereco : (estado, valor) => {
        estado.enderecos.push(valor)
    },
    
    loginSucesso(state, {profile, token}){
        state.logado = true;
        state.profile = profile;
        localStorage.salvarToken(token);
    },
    
    loginFailure(state){
        state.logado = false
        state.usuario = null;
    },

    logout(state){
        state.logado = false;
        state.user = null;
    }
}
