import { http } from './configuracoes'


export default {
    lista: () => { return http.get("autor/listar") },
    adiciona: (autor) => { return http.post("autores/protegido/adicionaAutor", autor) }
}
