// Aguarda até que o conteúdo do DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos do DOM
    const contactForm = document.getElementById('contact-form');
    const contactList = document.getElementById('contact-list');
    const errorMessage = document.getElementById('error-message');

    // Array para armazenar os contatos
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    // Renderiza os contatos ao carregar a página
    renderContacts();

    // Evento de submissão do formulário
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário

        // Obtém os valores dos campos de entrada
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();

        // Validações simples
        if (name === '' || phone === '') {
            showError('Both fields are required.');
            return;
        }
        // if (!/^\d{10}$/.test(phone)) {
        //     showError('Phone number must be 10 digits.');
        //     return;
        // }

        // Adiciona o contato à lista
        addContact(name, phone);

        // Limpa o formulário e a mensagem de erro
        contactForm.reset();
        clearError();
    });

    // Função para adicionar um contato
    function addContact(name, phone) {
        const contact = { name, phone }; // Cria um objeto de contato
        contacts.push(contact); // Adiciona o contato ao array
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Salva o array atualizado no LocalStorage
        renderContacts(); // Renderiza a lista de contatos
    }

    // Função para renderizar a lista de contatos
    function renderContacts() {
        contactList.innerHTML = ''; // Limpa a lista de contatos
        contacts.forEach((contact, index) => {
            const li = document.createElement('li'); // Cria um elemento de lista
            li.innerHTML = `
                <span>${contact.name} - ${contact.phone}</span>
                <button class="edit" onclick="editContact(${index})">Edit</button>
                <button class="delete" onclick="deleteContact(${index})">Delete</button>
            `;
            contactList.appendChild(li); // Adiciona o elemento à lista
        });
    }

    // Função para editar um contato
    window.editContact = function(index) {
        const contact = contacts[index]; // Obtém o contato pelo índice
        document.getElementById('name').value = contact.name; // Preenche o formulário com os dados do contato
        document.getElementById('phone').value = contact.phone;
        contacts.splice(index, 1); // Remove o contato do array
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Atualiza o LocalStorage
        renderContacts(); // Renderiza a lista de contatos
    };

    // Função para deletar um contato
    window.deleteContact = function(index) {
        contacts.splice(index, 1); // Remove o contato do array
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Atualiza o LocalStorage
        renderContacts(); // Renderiza a lista de contatos
    };

    // Função para mostrar mensagens de erro
    function showError(message) {
        errorMessage.textContent = message; // Define o texto da mensagem de erro
    }

    // Função para limpar mensagens de erro
    function clearError() {
        errorMessage.textContent = ''; // Limpa o texto da mensagem de erro
    }
});
