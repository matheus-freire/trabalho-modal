
document.getElementById('loginBtn').onclick = function() {
    document.getElementById('modal').style.display = 'flex';
};


document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};



document.getElementById('cadastroForm').onsubmit = function(event) {
    event.preventDefault();
   
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;


    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('senha', senha);


    alert('Seu cadastro foi realizado');
   
  
    window.location.href = 'perfil.html';
};


document.getElementById('telefone').addEventListener('input', function (event) {
    let input = event.target.value;
    input = input.replace(/\D/g, '');  
    if (input.length !== 11) {
       
    }
    const formatted = `(${input.slice(0, 2)}) ${input.slice(2, 3)} ${input.slice(3, 7)}-${input.slice(7, 11)}`;
    event.target.value = formatted;
});




document.getElementById('cpf').addEventListener('input', function (event) {
    let input = event.target.value;
    input = input.replace(/\D/g, '');
    if (input.length !== 11) {
     
    }
    const formatted = `${input.slice(0, 3)}.${input.slice(3, 6)}.${input.slice(6, 9)}-${input.slice(9, 11)}`;
    event.target.value = formatted;
});




