import { http } from './API';
import localStorage from '../services/localStorage';

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.recuperarToken()}`
    }
};

export default {

    cadastrar: (endereco) => {
        return http.post('/endereco/cadastrar', endereco, config);
    },

    atualizar: (endereco) => {
        return http.put('/endereco/atualizar', endereco, config);
    },

    deletar: (id) => {
        return http.delete(`/endereco/deletar/${id}`, config);
    },

    listar: () => { 
        return http.get("/endereco/consultar", config);
    },
    
}