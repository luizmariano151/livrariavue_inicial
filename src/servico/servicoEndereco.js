import { http } from './configuracoes'

export default {
    listar: () => { 
        return http.get("/endereco-vue/listar") 
    },
    
}