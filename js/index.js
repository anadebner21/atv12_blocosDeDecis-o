function validacao(){
    let nome = prompt ("Informe o nome");
    console.log(nome);
    let senha = prompt ("Senha por favor:");
    console.log(senha);
    if(nome == 'aluno' && senha == '123' || nome == 'professor' && senha == '456'){
        console.log('Login válido, prossiga!! =)');
        alert('Parabéns seu login está correto!!');
    }
    else{
        console.log('Login inválido. TENTE NOVAMENTE =(');
        alert('Inválido!! Tente Novamente!');
    }
}