async function getUsers() {
try {
    const response = await fetch('http://localhost:3000/users');

    if(!response.ok) {
        const data = await response.json();

        console.log(`
             Código de Erro: ${response.status}
             Messagem: ${data.message}

        `);
        return;
    }

    const data = await response.json();
    console.log(data);

} catch (error) {
    console.log('Algo deu errado no servidor!');
}
}

getUsers();
