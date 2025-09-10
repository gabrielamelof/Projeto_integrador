const cpfInput = document.getElementById("cpf");

    cpfInput.addEventListener("input", () => {
        let value = cpfInput.value.replace(/\D/g, ""); 
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpfInput.value = value;     
    });
    function validarSenhas() {
      let senha = document.getElementById("senha").value;
      let confirmasenha = document.getElementById("confirmaSenha").value;
      let msg = document.getElementById("mensagem");

      if(senha === confirmasenha && senha !== ""){
        msg.style.color = "green";
        msg.textContent = "AS SENHAS CORRESPONDEM!!";
      } else {
        msg.style.color = "red";
        msg.textContent = "AS SENHAS NÃO COINCIDEM!!";
      }
}
