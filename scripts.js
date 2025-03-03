// Inicialização do Formulário
    document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const fileUpload = document.getElementById('file-upload');
    const publishButton = document.getElementById('publish-button');
    const previewContainer = document.getElementById('preview-container');

    initFormEvents(textInput, fileUpload, publishButton, previewContainer);
    initDarkModeToggle();
    initMenuToggle();
    initModalEvents();
    initPublishOptions();
});



// Função para Eventos do Formulário:

function initFormEvents(textInput, fileUpload, publishButton, previewContainer) {
    textInput.addEventListener('input', () => {
        if (textInput.value.trim() !== "" || fileUpload.files.length > 0) {
            publishButton.style.display = 'inline-block';
        } else {
            publishButton.style.display = 'none';
        }
        textInput.style.height = '40px';
        textInput.style.height = (textInput.scrollHeight) + 'px';
    });

    fileUpload.addEventListener('change', () => {
        previewContainer.innerHTML = '';
        Array.from(fileUpload.files).forEach(file => {
            const preview = document.createElement(file.type.startsWith('image') ? 'img' : 'video');
            preview.src = URL.createObjectURL(file);
            preview.controls = file.type.startsWith('video');
            previewContainer.appendChild(preview);

            const removeButton = document.createElement('button');
            removeButton.className = 'preview-remove';
            removeButton.innerHTML = '&times;';
            preview.appendChild(removeButton);

            removeButton.addEventListener('click', () => {
                previewContainer.removeChild(preview);
                if (previewContainer.innerHTML === '' && textInput.value.trim() === '') {
                    publishButton.style.display = 'none';
                }
            });
        });
    });

    textInput.addEventListener('focus', () => {
        setTimeout(() => {
            textInput.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 300);
    });

    textInput.addEventListener('input', () => {
        if (textInput.scrollHeight > textInput.clientHeight) {
            textInput.style.height = textInput.scrollHeight + 'px';
        }
    });

    publishButton.addEventListener('click', () => {
        const textInputContent = document.getElementById('text-input').value;
        const selectedPostId = 'index'; // Por padrão, publicando na seção principal
        fetch('/add-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: textInputContent, id: selectedPostId })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Post Added: ", data);
            // Aqui você pode adicionar lógica para atualizar a interface ou redirecionar o usuário
        });
    });
}


// Função para Alternar o Modo Escuro: 

function initDarkModeToggle() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
    });
}

// Função para Alternar o Menu:

function initMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuModal = document.getElementById('menu-modal');
    menuToggle.addEventListener('click', () => {
        menuModal.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target == menuModal) {
            menuModal.style.display = 'none';
        }
    });
}

// Função para Eventos do Modal:

function initModalEvents() {
    const closeModalButtons = document.querySelectorAll('.modal .close');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.style.display = 'none';
        });
    });
}

// Função para Opções de Publicação:

const socket = io();

        document.getElementById('publish-button').addEventListener('click', () => {
            const form = document.getElementById('publish-form');
            const formData = new FormData(form);

            document.querySelectorAll('.openFormPost').forEach(button => {
                button.addEventListener('click', () => {
                    const targetId = button.id;
                    formData.append('targetId', targetId);

                    // Emitir evento via Socket.io
                    socket.emit('publish', { text: formData.get('text'), file: formData.get('file'), targetId });

                    // Enviar dados para o servidor
                    fetch('/publish', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(result => {
                        if (result.message === 'Publicação armazenada e enviada com sucesso') {
                            customAlert(result.message);
                        } else {
                            customAlert('Erro ao publicar.');
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao publicar:', error);
                        customAlert('Erro ao publicar.');
                    });
                });
            });
        });

// Função para Custom Alert:

function customAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.innerText = message;
    document.body.appendChild(alertBox);
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}


