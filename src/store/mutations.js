export default {
    adiciona_endereco : (estado, valor) => {
        estado.enderecos.push(valor)
    },
    loginSucesso(state, {profile,token}){
        state.logado = true;
        state.profile = profile;
        state.token = token;
    },
    
    loginFailure(state){
        state.logado = false
        state.usuario = null;
        state.token = null;
    },

    logout(state){
        state.logado = false;
        state.user = null;
        state.token = null;
    }
}
