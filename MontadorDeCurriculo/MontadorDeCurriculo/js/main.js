const dadosUsuario = document.querySelectorAll(".dados_usuario")
const preview = document.querySelector("#preview")
let dados_usuario_json = {
    "nome": "Carlos Henrique Lins Ponchirolli",
    "area_desejada": "Desenvolvimento de Software",
    "descricao_pessoal": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, illum hic. Possimus ullam, dolores enim eveniet quaerat tempora saepe, accusamus nisi non delectus quae omnis inventore sint culpa harum quibusdam!",
    "contatos": [email ="carlosponchirolli655@gmail.com", "(11) 95465-7283", "Belém, São Paulo/SP", "github.com/CarlosHLP060304", "linkedin.com/in/carlos-ponchirolli"],
    "projetos": [{
            "nome": "Projeto Análise de Vendas",
            "descricao": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam obcaecati soluta esse velit nesciunt libero provident maiores blanditiis at molestiae quamvoluptas reprehenderit beatae eum adipisci, veniam voluptates quas, nostrum vitae"
        },
        {
            "nome": "Projeto Análise de Vendas",
            "descricao": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam obcaecati soluta esse velit nesciunt libero provident maiores blanditiis at molestiae quamvoluptas reprehenderit beatae eum adipisci, veniam voluptates quas, nostrum vitae"
        },
        {
            "nome": "Projeto Análise de Vendas",
            "descricao": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam obcaecati soluta esse velit nesciunt libero provident maiores blanditiis at molestiae quamvoluptas reprehenderit beatae eum adipisci, veniam voluptates quas, nostrum vitae"
        }
    ],
    "formacao": [],
    "soft_skills": [],
    "hard_skills": [],
    "cursos_adicionais": [],
    "idiomas": []
}


function mudaTextoHTML(dados_usuario) {
    let textoDocumentoHTML = `
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
                <li>${dados_usuario_json.contatos[0]}</li>
                <li>${dados_usuario_json.contatos[1]}</li>
                <li>${dados_usuario_json.contatos[2]}</li>
                <li>${dados_usuario_json.contatos[3]}</li>
                <li>${dados_usuario_json.contatos[4]}</li>
            </ul>
        </div>
        <div>
            <h3>Idiomas</h3>
            <ul>
                <li>carlosponchirolli655@gmail.com</li>
                <li>(11) 95465-7283</li>
                <li>Belém, São Paulo/SP</li>
            </ul>
        </div>
        <div>
            <h3>Competências</h3>
            <ul>
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
            <ul>
                <h3>Formação Acadêmica</h3>
                <li>
                    <h4>FIAP</h4>
                    <h5>Período: mar2022 até dez2025</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam obcaecati
                        soluta esse velit nesciunt libero provident maiores blanditiis at molestiae quam
                        voluptas reprehenderit beatae eum adipisci.</p>
                </li>
            </ul>
            
        </div>
    </div>
    </div>
    `
    return textoDocumentoHTML
}

preview.innerHTML = mudaTextoHTML(dados_usuario_json)


//coloca dinâmicamente os dados do currículo no dicionário dados_usuario_json
dadosUsuario.forEach(
    dado => dado.addEventListener("blur", () => {
        array_nome_do_campo = dado.getAttribute("class").split(" ")
        nome_do_campo = array_nome_do_campo[array_nome_do_campo.length-1]
        dados_usuario_json[nome_do_campo] = dado.value
        dados_usuario_json[nome_do_campo]
        console.log(nome_do_campo)
        preview.innerHTML = mudaTextoHTML(dados_usuario_json)
    })
)