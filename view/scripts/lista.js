import { getBeneficiarios, deletarBeneficiario } from "./api.js";
import { formatarData } from "./util.js";

const tbody = document.querySelector("#tabela-beneficiarios tbody");

async function carregar() {
  const { rows } = await getBeneficiarios();

  tbody.innerHTML = "";

  rows.forEach((b) => {
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = b.nome;

    const tdResp = document.createElement("td");
    tdResp.textContent = b.nome_responsavel;

    const tdData = document.createElement("td");
    tdData.textContent = formatarData(b.data_nascimento);

    const tdTel1 = document.createElement("td");
    tdTel1.textContent = b.telefone1 || "-";

    const tdTel2 = document.createElement("td");
    tdTel2.textContent = b.telefone2 || "-";

    const tdBtns = document.createElement("td");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => {
      localStorage.setItem("edit-id", b.uuid);
      window.location.href = "index.html";
    };

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = async () => {
      await deletarBeneficiario(b.uuid);
      carregar();
    };

    tdBtns.appendChild(btnEditar);
    tdBtns.appendChild(btnExcluir);

    tr.append(tdNome, tdResp, tdData, tdTel1, tdTel2, tdBtns);
    tbody.appendChild(tr);
  });
}

carregar();
