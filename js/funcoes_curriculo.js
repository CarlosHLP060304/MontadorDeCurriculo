function mudaCurriculo(preview,dados_usuario) {
    preview.innerHTML =  `
    <div>
    <h1>${dados_usuario.nome}</h1>
    <h2>${dados_usuario.area_desejada}</h2>
    <div class="preview_divisoria"></div>
    </div>
    <div class="mt-2">
    <h3>Perfil pessoal</h3>
    <p>${dados_usuario.descricao_pessoal}</p>
    </div>
    <div class="d-flex">
    <div>
        <div>
            <h3>Contato</h3>
            <ul>
                <li>${dados_usuario.email}</li>
                <li>${dados_usuario.telefone}</li>
                <li>${dados_usuario.linkedin}</li>
                <li>${dados_usuario.github}</li>
                <li>${dados_usuario.endereco}</li>
            </ul>
        </div>
        <div>
            <h3>Idiomas</h3>
            <ul id="lista_idiomas">
                <li>${dados_usuario.idiomas[0].nome} - ${dados_usuario.idiomas[0].nivel}</li>
                <li>${dados_usuario.idiomas[1].nome} - ${dados_usuario.idiomas[1].nivel}</li>
            </ul>
        </div>
        <div>
            <h3>Competências</h3>
            <ul id="lista_competencias">
                <li>Java</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </div>
    
    </div>
    <div>
        <div>
            <ul class="list-unstyled px-3">
                <h3>Projetos</h3>
                <li>
                    <h4>${dados_usuario.projetos[0].nome}</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam obcaecati
                        soluta esse velit nesciunt libero provident maiores blanditiis at molestiae quam
                        voluptas reprehenderit beatae eum adipisci, veniam voluptates quas, nostrum vitae
                       </p>
                </li>
                <li>
                    <h4>Projeto Conta-aí</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam obcaecati
                        soluta esse velit nesciunt libero provident maiores blanditiis at molestiae quam
                        voluptas reprehenderit beatae eum adipisci, veniam voluptates quas, nostrum vitae
                      </p>
                </li>
                <li>
                    <h4>Projeto 123</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam obcaecati
                        soluta esse velit nesciunt libero provident maiores blanditiis at molestiae quam
                        voluptas reprehenderit beatae eum adipisci.</p>
                </li>
            </ul>
        </div>
    
        <div>
            <ul id = "lista_formacoes">
                <h3>Formação Acadêmica</h3>
                <li>
                    <h4> ${dados_usuario.formacao[0].nomeInstituicao}</h4>
                    <p>${dados_usuario.formacao[0].nomeCurso}</p>
                    <p>Período: ${dados_usuario.formacao[0].data_inicio} até ${dados_usuario.formacao[0].data_termino}</p>
                </li>
            </ul>
            
        </div>
    </div>
    </div>
    `

}


function adicionaElementosCurriculo(btns_adicionar,sub_divs_dados_usuario,dados_usuario){
    btns_adicionar.forEach(
        btn_adicionar => btn_adicionar.addEventListener("click",()=>{
            sub_divs_dados_usuario.forEach(
                sub_div_dados_usuario => { 
                    final_div_id = sub_div_dados_usuario.id.split("sub_div_")[1]
                    final_btn_id = btn_adicionar.id.split("btn_adicionar_")[1]
                    if(final_div_id === final_btn_id){
                        switch (final_div_id) {
                            case "idiomas":
                                adicionaIdiomaCurriculo(dados_usuario)  
                                break;
                            case "formacao":
                                adicionaFormacaoCurriculo(dados_usuario)
                                break;
                            default:
                                break;
                        }

                        sub_div_dados_usuario.querySelectorAll("input").forEach(
                            input=>input.value = ""
                        )
                        
                    }
                }
            )
        })
    )
}



function adicionaIdiomaJson(nome,nivel,dados_usuario) {
    dados_usuario.idiomas.push({
        "nome":nome,
        "nivel":nivel
    })
}

function adicionaFormacaoJson(nome_instituicao,nome_curso,data_inicio,data_termino,dados_usuario) {
    dados_usuario.formacao.push({
        "nomeInstituicao":nome_instituicao,
        "nomeCurso": nome_curso,
        "data_inicio": data_inicio,
        "data_termino": data_termino
    })
}



function adicionaIdiomaCurriculo(dados_usuario) {
    const nome_idioma = document.getElementById("nome_idioma").value
    const nivel =  document.querySelector("#nivel").value
    const lista_idiomas = document.getElementById("lista_idiomas")
    adicionaIdiomaJson(nome_idioma,nivel,dados_usuario)
    console.log(dados_usuario.idiomas)
    lista_idiomas.innerHTML += `
        <li> ${dados_usuario.idiomas[dados_usuario.idiomas.length-1].nome} - ${dados_usuario.idiomas[dados_usuario.idiomas.length-1].nivel}</li>
    `    
}

function adicionaFormacaoCurriculo(dados_usuario) {
    const nome_instituicao = document.getElementById("nome_instituicao").value
    const nome_curso =  document.querySelector("#nome_curso").value
    const data_inicio = document.getElementById("data_inicio").value
    const data_termino = document.getElementById("data_termino").value
    const lista_formacoes = document.getElementById("lista_formacoes")
    adicionaFormacaoJson(nome_instituicao,nome_curso,data_inicio,data_termino,dados_usuario)
    numeroDeFormacoesMenos1 = dados_usuario.formacao.length -1
    lista_formacoes.innerHTML += `
    <li>
    <h4> ${dados_usuario.formacao[numeroDeFormacoesMenos1].nomeInstituicao}</h4>
                    <p>${dados_usuario.formacao[numeroDeFormacoesMenos1].nomeCurso}</p>
                    <p>Período: ${dados_usuario.formacao[numeroDeFormacoesMenos1].data_inicio} até ${dados_usuario.formacao[numeroDeFormacoesMenos1].data_termino}</p>
    </li>
    `    
}

