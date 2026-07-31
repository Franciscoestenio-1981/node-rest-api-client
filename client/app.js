const imputId = document.queryselector('button');
const botaoBuscar = document.queryselector('input');
const resultado = document.querySelector('p');

button.addEventListener('click', async () => {

    const inputVlaue = Number(input.value);

    const data = await getuser();

    const user = data.find(user => user.id === inputValue);

    if (!user) {

        return paragraph.textContent = `Usuário de id ${inputValue} não encontrado`;
    }
    paragraph.textContent = `Usuário ${user.name} encontrado`;
    
    });
    
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

