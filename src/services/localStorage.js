export default {

    salvarToken: (token) => {
        localStorage.setItem('token', token);
    },

    recuperarToken: () => {
        return localStorage.getItem('token');
    }

}