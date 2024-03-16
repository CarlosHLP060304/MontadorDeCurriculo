function adicionaIdioma(nome,nivel,dados_usuario) {
    dados_usuario.idiomas.push({
        "nome":nome,
        "nivel":nivel
    })
}

function adicionaFormacao(nome,data_inicio,data_termino,dados_usuario) {
    dados_usuario.formacao.push({
        "nome":nome,
        "data_inicio":data_inicio,
        "data_termino":data_termino
    })
}


