const nomeBenef = document.getElementById('nome');
const nomeResp = document.getElementById('Responsavel');
const phone1 = document.getElementById('telefone1');
const phone2 = document.getElementById('telefone2');
const dataNascimento = document.getElementById('dtNascimento');
const botaoSalvar = document.getElementById("botao");

const dataISO = dataNascimento.value;
const [ano, mes, dia] = dataISO.split("-");
const dataFormatada = `${dia}/${mes}/${ano}`;
  
const URL = "http://localhost:3333/benefs";
  
function clearField(){
    nomeBenef.value = '';
    nomeResp.value = ''; 
    phone1.value = '';
    phone2.value = '';
    dataNascimento.value = '';
}

async function salvarBenef(localizacao){
    const beneficiario = {
    nome: nomeBenef.value,
    nome_responsavel: nomeResp.value,
    phone1: phone1.value,
    phone2: phone2.value,
    data_nascimento: dataNascimento.value,
    location: localizacao
    };

    try {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
        "Content-Type":"application/json"
        },
        body: JSON.stringify(beneficiario)
    });
    const data = await response.json();
    console.log("Resposta da API:", data);
    clearField();
    alert("Beneficiário criado!");

    }catch(error) {
        console.error("Erro ao criar beneficiário:", error);
    }
}
  
botaoSalvar.addEventListener("click", (evt) => {
    evt.preventDefault();
    const localizacao = {
    type: "Point",
    coordinates: [marker.getLatLng().lng, marker.getLatLng().lat],
    };
    salvarBenef(localizacao);
});
  