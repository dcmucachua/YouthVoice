document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const fileUpload = document.getElementById('file-upload');
    const publishButton = document.getElementById('publish-button');
    const previewContainer = document.getElementById('preview-container');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const menuModal = document.getElementById('menu-modal');
    const publishOptions = document.getElementById('publish-options');
    const closeModalButtons = document.querySelectorAll('.modal .close');
    const openFormPosts = document.querySelectorAll('.openFormPost');

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

    publishButton.addEventListener('click', () => {
        publishOptions.style.display = 'block';
    });

    openFormPosts.forEach(button => {
        button.addEventListener('click', () => {
            const targetDiv = document.getElementById(button.id.replace('btn-', '').replace('principal', 'index'));
            const post = document.createElement('div');
            post.className = 'post';
            post.innerHTML = `<p>${textInput.value}</p>`;
            Array.from(fileUpload.files).forEach(file => {
                const media = document.createElement(file.type.startsWith('image') ? 'img' : 'video');
                media.src = URL.createObjectURL(file);
                media.controls = file.type.startsWith('video');
                post.appendChild(media);
            });
            targetDiv.appendChild(post);
            publishOptions.style.display = 'none';
            textInput.value = '';
            fileUpload.value = '';
            previewContainer.innerHTML = '';
            publishButton.style.display = 'none';
        });
    });

    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.style.display = 'none';
        });
    });

    menuToggle.addEventListener('click', () => {
        menuModal.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target == menuModal || event.target == publishOptions) {
            menuModal.style.display = 'none';
            publishOptions.style.display = 'none';
        }
    });

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    textInput.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});


const textInput = document.getElementById('text-input');
        const formContainer = document.getElementById('form-container');

        textInput.addEventListener('input', function() {
            // Aumentar a altura da área de texto automaticamente
            textInput.style.height = 'auto';
            textInput.style.height = textInput.scrollHeight + 'px';

            // Ajustar a posição do form-container para que fique acima do teclado
            const formContainerHeight = formContainer.offsetHeight;
            window.scrollTo(0, document.body.scrollHeight);
            formContainer.style.bottom = `${formContainerHeight}px`;
        });

        window.addEventListener('resize', function() {
            const formContainerHeight = formContainer.offsetHeight;
            formContainer.style.bottom = '0px';
        });
