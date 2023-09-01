document.getElementById('btnSubscribe').addEventListener('click', () => {
    const nameField = document.getElementById('txtName')
    const emailField = document.getElementById('txtEmail')
    const levelField = document.getElementById('txtLevel')
    const characterField = document.getElementById('txtCharacter')

    // Verifique se o campo 'nome' é alfanumérico
    if (!/^[A-Za-z0-9\s]+$/.test(nameField.value)) {
        alert('O campo "Nome" deve conter apenas caracteres alfanuméricos.');
        return;
    }

    // Verifique se o campo 'email' contém um '@'
    if (emailField.value.indexOf('@') === -1) {
        alert('O campo "E-mail" deve conter um "@".');
        return;
    }

    // Verifique se o campo 'level' contém apenas números
    if (!/^[0-9]+$/.test(levelField.value)) {
        alert('O campo "Level" deve conter apenas números.');
        return;
    }

    // Verifique se o campo 'personagem' é alfanumérico
    if (!/^[A-Za-z0-9\s]+$/.test(characterField.value)) {
        alert('O campo "Personagem" deve conter apenas caracteres alfanuméricos.');
        return;
    }

    // Se todas as validações passarem, você pode enviar o formulário ou executar outras ações aqui
    alert('Formulário válido. Enviando...');
})