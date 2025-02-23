

document.getElementById('toggle-icon').addEventListener('click', function() {
    // Alternar a classe do ícone entre 'fa-bars' e 'fa-check'
    this.classList.toggle('fa-bars');
    this.classList.toggle('fa-xmark');
});

// RESPONSIVIDADE //

var hamburger = document.querySelector('.hamburger');
var hamburgerIcon = hamburger.querySelector('i');
var sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', function(event) {
    event.stopPropagation(); // Evitar fechamento imediato ao clicar no ícone
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
             setTimeout(function() {
                sidebar.style.display = 'none';
        }, 500); // Espera o término da animação
            hamburgerIcon.classList.remove('fa-xmark');
            hamburgerIcon.classList.add('fa-bars');
        } else {
            sidebar.style.display = 'flex';
            setTimeout(function() {
                sidebar.classList.add('open');
        }, 10); // Pequeno delay para permitir a transição
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-xmark');
        }
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                setTimeout(function() {
                    sidebar.style.display = 'none';
                }, 500); // Espera o término da animação
                hamburgerIcon.classList.remove('fa-xmark');
                hamburgerIcon.classList.add('fa-bars');
            }
        }
    });







   /* document.getElementById('media1').addEventListener('change', (event) => {
        const files = event.target.files;
        const preview = document.getElementById('preview1');
        preview.innerHTML = '';

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const result = e.target.result;
                    if (file.type.startsWith('image/')) {
                        const img = document.createElement('img');
                        img.src = result;
                        preview.appendChild(img);
                    } else if (file.type.startsWith('video/')) {
                        const video = document.createElement('video');
                        video.src = result;
                        video.controls = true;
                        preview.appendChild(video);
                    } else {
                        console.error('Tipo de arquivo não suportado:', file.type);
                    }
                };
                reader.onerror = (err) => {
                    console.error('Erro ao ler o arquivo:', err);
                };
                reader.readAsDataURL(file);
            } else {
                console.error('Não foi possível ler o arquivo:', file);
            }
        }
    });
*/


// RESPONSIVE AREA //

/* let posts = [];

function openModal(modalNumber) {
    document.getElementById('win' + modalNumber).style.display = 'flex';
    setTimeout(function() {
        document.getElementById('win' + modalNumber).classList.add('show');
    }, 10);
    if (modalNumber === 2) {
        loadPostsSummary();
    }
}
function closeModal(modalNumber) {
    document.getElementById('win' + modalNumber).classList.remove('show');
    setTimeout(function() {
        document.getElementById('win' + modalNumber).style.display = 'none';
    }, 500);
}

function previewMedia() {
    var preview = document.getElementById('media-preview');
    var file = document.getElementById('media').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.innerHTML = '';
        if (file.type.startsWith('image/')) {
            var img = document.createElement('img');
            img.src = reader.result;
            img.style.maxHeight = '200px';
            preview.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            var video = document.createElement('video');
            video.src = reader.result;
            video.controls = true;
            video.style.maxHeight = '200px';
            preview.appendChild(video);
        }
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '';
    }
}

function publishContent() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var media = document.getElementById('media-preview').innerHTML;
    var post = { title: title, content: content, media: media };

    posts.push(post);
    renderPosts();
    closeModal(1);
}

function renderPosts() {
    var postsContainer = document.getElementById('index');
    postsContainer.innerHTML = '';

    posts.forEach(function(post, index) {
        var postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = '<h3>' + post.title + '</h3><div>' + post.media + '</div><p>' + post.content + '</p>';
        postsContainer.appendChild(postElement);
    });
}

function loadPostsSummary() {
    var summaryContainer = document.getElementById('posts-summary');
    summaryContainer.innerHTML = '';

    posts.forEach(function(post, index) {
        var postSummary = document.createElement('div');
        postSummary.className = 'post-summary';
        postSummary.innerHTML = '<h3>' + post.title + '</h3><p>' + post.content.substring(0, 100) + '...</p>';
        postSummary.onclick = function() {
            showPostDetail(index);
        };
        summaryContainer.appendChild(postSummary);
    });
}

function showPostDetail(index) {
    var post = posts[index];
    document.getElementById('post-title').innerText = post.title;
    document.getElementById('post-media').innerHTML = post.media;
    document.getElementById('post-content').value = post.content;

    var postDetail = document.getElementById('post-detail');
    postDetail.style.display = 'block';
    postDetail.dataset.index = index;
}

function saveEdit() {
    var index = document.getElementById('post-detail').dataset.index;
    posts[index].content = document.getElementById('post-content').value;
    renderPosts();
    loadPostsSummary();
    closeModal(2);
}

function deletePost() {
    var index = document.getElementById('post-detail').dataset.index;
    posts.splice(index, 1);
    renderPosts();
    loadPostsSummary();
    closeModal(2);
}






let post = JSON.parse(localStorage.getItem('posts')) || [];

function openModal(modalNumber) {
    document.getElementById('win' + modalNumber).style.display = 'flex';
    setTimeout(function() {
        document.getElementById('win' + modalNumber).classList.add('show');
    }, 10);
    if (modalNumber === 2) {
        loadPostsSummary();
    }
}

function closeModal(modalNumber) {
    document.getElementById('win' + modalNumber).classList.remove('show');
    setTimeout(function() {
        document.getElementById('win' + modalNumber).style.display = 'none';
    }, 500);
}

function previewMedia() {
    var preview = document.getElementById('media-preview');
    var files = document.getElementById('media').files;
    preview.innerHTML = '';

    Array.from(files).forEach(file => {
        var reader = new FileReader();
        reader.onloadend = function () {
            if (file.type.startsWith('image/')) {
                var img = document.createElement('img');
                img.src = reader.result;
                img.style.maxHeight = '200px';
                preview.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                var video = document.createElement('video');
                video.src = reader.result;
                video.controls = true;
                video.style.maxHeight = '200px';
                preview.appendChild(video);
            }
        };
        reader.readAsDataURL(file);
    });
}

function publishContent() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var mediaPreview = document.getElementById('media-preview').innerHTML;
    var post = { title: title, content: content, media: mediaPreview };

    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
    closeModal(1);

    // Exibir relatório de verificação
    var alertMessage = 'Conteúdo publicado com sucesso!<br>Título: ' + title + '<br>Conteúdo: ' + content.substring(0, 100) + '...';
    document.getElementById('alert-message').innerHTML = alertMessage;
    document.getElementById('alert-modal').style.display = 'block';
}

function renderPosts() {
    var postsContainer = document.getElementById('index');
    postsContainer.innerHTML = '';

    posts.forEach(function(post, index) {
        var postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = '<h3>' + post.title + '</h3><div>' + post.media + '</div><p>' + post.content + '</p>';
        postsContainer.appendChild(postElement);
    });
}

function loadPostsSummary() {
    var summaryContainer = document.getElementById('posts-summary');
    summaryContainer.innerHTML = '';

    posts.forEach(function(post, index) {
        var postSummary = document.createElement('div');
        postSummary.className = 'post-summary';
        postSummary.innerHTML = '<h3>' + post.title + '</h3><p>' + post.content.substring(0, 100) + '...</p>';
        postSummary.onclick = function() {
            showPostDetail(index);
        };
        summaryContainer.appendChild(postSummary);
    });
}

function showPostDetail(index) {
    var post = posts[index];
    document.getElementById('post-title').innerText = post.title;
    document.getElementById('post-media').innerHTML = post.media;
    document.getElementById('post-content').value = post.content;

    var postDetail = document.getElementById('post-detail');
    postDetail.style.display = 'block';
    postDetail.dataset.index = index;
}

function saveEdit() {
    var index = document.getElementById('post-detail').dataset.index;
    posts[index].content = document.getElementById('post-content').value;
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
    loadPostsSummary();
    closeModal(2);
}

function deletePost() {
    var index = document.getElementById('post-detail').dataset.index;
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
    loadPostsSummary();
    closeModal(2);
}

document.addEventListener('DOMContentLoaded', renderPosts);

function redirectToIndex() {
    window.location.href = 'index.html';
}

document.querySelector('.close-alert-btn').onclick = function() {
    document.getElementById('alert-modal').style.display = 'none';
};




window.onload = function() {
    const postContent = localStorage.getItem('post');
    console.log('Post Content:', postContent);  // Adicionando log para verificar o conteúdo
    if (postContent) {
        document.getElementById('post').innerHTML = `
            <div>${postContent}</div>
            <div class="comment-box">
                <textarea placeholder="Escreva seu comentário..."></textarea>
                <button class="post-comment">Publicar</button>
                <div class="comments"></div>
            </div>
        `;

        document.querySelector('.post-comment').addEventListener('click', function() {
            let commentText = document.querySelector('.comment-box textarea').value;
            console.log('Comment Text:', commentText);  // Adicionando log para verificar o texto do comentário
            if (commentText.trim() !== '') {
                let comment = document.createElement('div');
                comment.className = 'comment';
                comment.innerHTML = `
                    <p>${commentText}</p>
                    <div class="comment-actions">
                        <button class="react">👍 Reagir</button>
                        <button class="reply">Responder</button>
                        <button class="report">Denunciar</button>
                    </div>
                    <div class="replies"></div>
                `;
                document.querySelector('.comments').prepend(comment);
                document.querySelector('.comment-box textarea').value = '';

                // Event listeners para os botões de reagir, responder e denunciar
                comment.querySelector('.react').addEventListener('click', function() {
                    this.classList.toggle('active');
                });

                comment.querySelector('.reply').addEventListener('click', function() {
                    // Lógica para responder
                });

                comment.querySelector('.report').addEventListener('click', function() {
                    // Lógica para denunciar
                });
            }
        });
    }
}; */

/* PUBLICAÇÃO 1 */ 

/* function openModal(modalNumber) {
    document.getElementById('win' + modalNumber).style.display = 'flex';
    document.getElementById('win' + modalNumber).style.justifyContent = 'center';
    document.getElementById('win' + modalNumber).style.alignItems = 'center';
    setTimeout(function() {
        document.getElementById('win' + modalNumber).classList.add('show');
    }, 10);
}

function closeModal(modalNumber) {
    document.getElementById('win' + modalNumber).classList.remove('show');
    setTimeout(function() {
        document.getElementById('win' + modalNumber).style.display = 'none';
    }, 500);
} */




/*    const API_URL = 'http://mucachua-lyrics.local/wp-json/wp/v2/posts';
    const USERNAME = 'Dcmucachua';
    const PASSWORD = '5UJu ugf2 ZqJZ chps tg1e awqf';
    const AUTH_HEADER = 'Basic ' + btoa(`${USERNAME}:${PASSWORD}`);
    
    function publishContent(targetDiv) {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const media = document.getElementById('media').files[0];
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (media) {
            formData.append('media', media);
        }
    
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': AUTH_HEADER
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            displayPublication(data, targetDiv);
            addPublicationToAdmin(data);
        })
        .catch(error => console.error('Erro ao publicar:', error));
    }
    
    function displayPublication(data, targetDiv) {
        const targetElement = document.getElementById(targetDiv);
        const post = document.createElement('div');
        post.classList.add('post-item');
        post.innerHTML = `
            <h2>${data.title.rendered}</h2>
            <p>${data.content.rendered}</p>
            <div class="comments"></div>
        `;
        targetElement.appendChild(post);
    }
    
    function addPublicationToAdmin(data) {
        const adminPosts = document.getElementById('win2');
        const post = document.createElement('div');
        post.classList.add('post-item');
        post.innerHTML = `
            <h2>${data.title.rendered}</h2>
            <p>${data.content.rendered}</p>
            <button onclick="editPost(${data.id})">Editar</button>
            <button onclick="deletePost(${data.id})">Eliminar</button>
        `;
        adminPosts.appendChild(post);
    }
    
    function editPost(id) {
        // Código para editar publicação usando API do WordPress
    }
    
    function deletePost(id) {
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': AUTH_HEADER
            }
        })
        .then(() => {
            document.getElementById('win2').querySelector(`.post-item[data-id="${id}"]`).remove();
        })
        .catch(error => console.error('Erro ao eliminar publicação:', error));
    } */








 /*       const apiCredentials = {
            url: 'https://mucachua-lyrics.wordpress.com/wp-json/wp/v2',
            username: 'Dcmucachua',
            password: '5UJu ugf2 ZqJZ chps tg1e awqf',
        };
        
        const token = btoa(`${apiCredentials.username}:${apiCredentials.password}`);
        
        document.getElementById('openbutton1').addEventListener('click', function() {
            document.getElementById('win00').style.display = 'block';
        });
        
        document.getElementById('openEditButton').addEventListener('click', function() {
            document.getElementById('winEdit').style.display = 'block';
        });
        
        document.getElementById('openCommentsButton').addEventListener('click', function() {
            document.getElementById('win6').style.display = 'block';
        });
        
        const buttons = [
            { buttonId: 'principal', divId: 'post' },
            { buttonId: 'btn-post1', divId: 'firstWindow' },
            { buttonId: 'btn-post2', divId: 'secondWindow' },
            { buttonId: 'btn-post3', divId: 'thirdWindow' },
            { buttonId: 'btn-post4', divId: 'fourthWindow' },
            { buttonId: 'btn-post5', divId: 'fifthWindow' }
        ];
        
        buttons.forEach(({ buttonId, divId }) => {
            document.getElementById(buttonId).addEventListener('click', function() {
                const content = prompt("Digite o conteúdo da publicação:");
                if (content) {
                    document.getElementById(divId).innerHTML = `<p>${content}</p>`;
                    document.getElementById('win2').innerHTML += `<div class="post" id="index"><p>${content}</p></div>`;
                    
                    // Enviar dados para o WordPress
                    fetch(`${apiCredentials.url}/posts`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Basic ${token}`,
                        },
                        body: JSON.stringify({
                            title: 'Nova Publicação',
                            content: content,
                            status: 'publish'
                        }),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Publicação criada:', data);
                    })
                    .catch(error => {
                        console.error('Erro ao criar publicação:', error);
                    });
                }
            });
        }); */







    // OUTRA DIV1 //


   function openModal(modalId) {
        const modal = document.getElementById('win00');
        modal.style.display = 'block';
        document.body.classList.add('modal-open'); // Desativar eventos externos e rolagem
    }
    
    function closeModal() {
        const modal = document.getElementById('win00');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Reativar eventos externos e rolagem
    }


// NOVO SCRIPT DA PRIMEIRA JANELA DE POST //

/*const openBtn1 = document.getElementById('openbutton1');
const openBtns = document.querySelectorAll('.open-button');
const closeBtn = document.getElementById('closebutton1');
const backdropy = document.getElementById('backdrop1');
const modalWindow = document.getElementById('modalwindow1');

function openModal(e) {
    e.preventDefault();
    backdropy.style.display = 'block';
    setTimeout(() => {
        backdropy.classList.add('show');
        modalWindow.classList.add('show');
    }, 10);
}

openBtn1.addEventListener('click', openModal);

openBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', function() {
    backdropy.classList.remove('show');
    modalWindow.classList.remove('show');
    setTimeout(() => {
        backdropy.style.display = 'none';
    }, 500);
}); */

// PUBLICAÇÃO SCRIPT //


/*document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', publishPost);
});

function publishPost(event) {
    let content = document.getElementById('content').value;
    let mediaFiles = document.getElementById('media').files;
    let formData = new FormData();
    formData.append('content', content);
    formData.append('target', event.target.id);

    for (let i = 0; i < mediaFiles.length; i++) {
        formData.append('media', mediaFiles[i]);
    }

    fetch('/publish', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Publicação aprovada!');
        updateAdminPage(data);
    })
    .catch(error => console.error('Erro:', error));
}

function updateAdminPage(data) {
    let postEdtDiv = document.getElementById('post-edt');
    let newPost = document.createElement('div');
    newPost.innerHTML = `<p>${data.content}</p>`;
    data.mediaUrls.forEach(url => {
        newPost.innerHTML += `<img src="${url}" alt="Media">`;
    });
    newPost.innerHTML += `<button>Editar</button><button>Excluir</button>`;
    postEdtDiv.appendChild(newPost);
} */

/*document.addEventListener('DOMContentLoaded', function() {
    const buttons = [
        { id: 'principal', form: 'form-post0' },
        { id: 'btn-post1', form: 'form-post1' },
        { id: 'btn-post2', form: 'form-post2' },
        { id: 'btn-post3', form: 'form-post3' },
        { id: 'btn-post4', form: 'form-post4' },
        { id: 'btn-post5', form: 'form-post5' }
    ];

    buttons.forEach(button => {
        document.getElementById(button.id).addEventListener('click', function() {
            const form = document.getElementById(button.form);
            form.style.display = 'block';
            document.querySelector('.backdrop').style.display = 'none'; // Fechar a janela de class="backdrop"
        });
    });

    const commentButton = document.getElementById('openCommentsButton');
    commentButton.addEventListener('click', function() {
        const commentBox = document.getElementById('coment');
        commentBox.style.display = 'block';
        document.querySelector('.backdrop').classList.add('active');
    });

    const backButtons = document.querySelectorAll('.backButton');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const form = button.closest('.formPost');
            form.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const preview = document.getElementById('preview' + this.id.slice(-1));
            preview.innerHTML = '';
            Array.from(this.files).forEach((file, index) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const mediaElement = file.type.startsWith('video') ? 
                        document.createElement('video') : 
                        document.createElement('img');
                    mediaElement.src = e.target.result;
                    mediaElement.controls = true;

                    const removeButton = document.createElement('button');
                    removeButton.className = 'remove-file';
                    removeButton.innerHTML = 'x';
                    removeButton.addEventListener('click', () => {
                        mediaElement.remove();
                        removeButton.remove();
                        input.value = '';
                    });

                    const mediaContainer = document.createElement('div');
                    mediaContainer.appendChild(mediaElement);
                    mediaContainer.appendChild(removeButton);

                    preview.appendChild(mediaContainer);
                };
                reader.readAsDataURL(file);
            });
        });
    });
}); 








function publishTest(index) {
    console.log('Botão clicado');
    const content = document.getElementById(`content${index}`).value;
    const postEdtDiv = document.getElementById('post11');
    const newPost = document.createElement('div');
    newPost.innerHTML = `<p>${content}</p>`;
    postEdtDiv.appendChild(newPost);
}











function publishPost(index) {
    const content = document.getElementById(`content${index}`).value;
    const mediaFiles = document.getElementById(`media${index}`).files;
    const formData = new FormData();
    formData.append('content', content);
    formData.append('target', `index${index}`);

    for (let i = 0; i < mediaFiles.length; i++) {
        formData.append('media', mediaFiles[i]);
    }

    fetch('/publish', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Publicação aprovada!');
        updateAdminPage(data);
    })
    .catch(error => console.error('Erro:', error));
}

function updateAdminPage(data) {
    const postEdtDiv = document.getElementById('post11');
    const newPost = document.createElement('div');
    newPost.innerHTML = `<p>${data.content}</p>`;
    data.mediaUrls.forEach(url => {
        newPost.innerHTML += `<img src="${url}" alt="Media">`;
    });
    newPost.innerHTML += `<button>Editar</button><button>Excluir</button>`;
    postEdtDiv.appendChild(newPost);
}


// APENAS COMENTÁRIOS //

/* const openButton = document.getElementById('openCommentsButton'); 
 const postEdt = document.getElementById('post-edt'); 
const overlay0 = document.getElementById('overlay0');
/* const closeButton0 = document.getElementById('closeButton0'); */


/*openButton.addEventListener('click', () => {
    postEdt.style.display = 'block';
    overlay0.style.display = 'block';
});

closeButton0.addEventListener('click', () => {
    postEdt.style.display = 'none';
    overlay0.style.display = 'none';
}); 

overlay0.addEventListener('click', () => {
    postEdt.style.display = 'none';
    overlay0.style.display = 'none';
});


openButton.addEventListener('click', () => {
            commentBox.style.display = 'block';
            document.addEventListener('click', closeOnClickOutside);
        });

        /* closeButton0.addEventListener('click', () => {
            commentBox.style.display = 'none';
            document.removeEventListener('click', closeOnClickOutside);
        });

        function closeOnClickOutside(event) {
            if (!commentBox.contains(event.target) && event.target !== openButton && event.target !== backButton) {
                commentBox.style.display = 'none';
                document.removeEventListener('click', closeOnClickOutside);
            }
        } */

       /*     document.addEventListener('DOMContentLoaded', function() {
                const inputFile = document.getElementById('file-input');
          
                inputFile.addEventListener('change', function (event) {
                  for (let i = 0; i < 6; i++) {
                    const preview = document.getElementById('preview' + i);
                    preview.innerHTML = ''; // Limpa a pré-visualização atual
                  }
                  const files = event.target.files;
          
                  for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    if (file.type.startsWith('image/')) {
                      const reader = new FileReader();
                      reader.onload = function (e) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        const previewIndex = i % 6; // Distribui as imagens nas 6 divs
                        const preview = document.getElementById('preview' + previewIndex);
                        preview.appendChild(img);
                      };
                      reader.readAsDataURL(file);
                    }
                  }
                });
              }); */



            document.addEventListener('DOMContentLoaded', function() {
                const openButton = document.getElementById('openCommentsButton');
                const commentBoxk = document.getElementById('comentk');
                const closeButtonk = document.getElementById('closebuttonk');
    
                openButton.addEventListener('click', (event) => {
                    event.stopPropagation(); // Impede que outros eventos de clique interfiram
                    commentBoxk.style.display = 'block';
                    document.addEventListener('click', closeOnClickOutside);
                });
    
                closeButtonk.addEventListener('click', (event) => {
                    event.stopPropagation(); // Impede que outros eventos de clique interfiram
                    commentBoxk.style.display = 'none';
                    document.removeEventListener('click', closeOnClickOutside);
                });
    
                function closeOnClickOutside(event) {
                    if (!commentBoxk.contains(event.target) && event.target !== openButton && event.target !== closeButtonk) {
                        commentBoxk.style.display = 'none';
                        document.removeEventListener('click', closeOnClickOutside);
                    }
                }
    
                commentBoxk.addEventListener('click', (event) => {
                    event.stopPropagation(); // Impede que o clique dentro da caixa feche a janela
                });
            });


// POST EDT //

document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('win2');
    const openButon = document.getElementById('win22')
    const postEdt = document.getElementById('post-edt');
    const closeButton = document.getElementById('closePostEdt');

    openButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation(); // Impede que outros eventos de clique interfiram
        postEdt.style.display = 'block';
        document.addEventListener('click', closeOnClickOutside);
    });

    openButon.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation(); // Impede que outros eventos de clique interfiram
        postEdt.style.display = 'block';
        document.addEventListener('click', closeOnClickOutside);
    });

    closeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        postEdt.style.display = 'none';
        document.removeEventListener('click', closeOnClickOutside);
    });

    function closeOnClickOutside(event) {
        if (!postEdt.contains(event.target) && event.target !== openButton) {
            postEdt.style.display = 'none';
            document.removeEventListener('click', closeOnClickOutside);
        }
    }

    postEdt.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

// Seleciona todos os botões com a classe 'backButton'
/* document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.backButton').forEach(button => {
        button.addEventListener('click', function(event) {
            // Impede que outros eventos interfiram
            event.stopPropagation();
            event.preventDefault();
  
            // Encontra o elemento pai com a classe 'formPost' mais próximo
            const formPost = this.closest('.formPost');
            // Fecha o elemento (pode ajustar a ação conforme necessário)
            if (formPost) {
                formPost.style.display = 'none'; // Oculta a janela
            } else {
                console.error('Elemento .formPost não encontrado');
            }
        });
    });
  });


// TEXTAREA 1

const textareas = document.querySelectorAll('.contents');

textareas.forEach(textarea => {
  textarea.addEventListener('input', autoResize);
});

function autoResize() {
  this.style.height = 'auto'; // Redefine a altura
  this.style.height = this.scrollHeight + 'px'; // Ajusta a altura de acordo com o conteúdo
}

//TEXTAREA PUBL

function toggleButton() {
    for (let i = 0; i < 6; i++) {
        const contents = document.querySelectorAll('.contents')[i];
        const publ = document.getElementById('publ' + i);
        if (contents.value.trim() !== '') {
            publ.style.display = 'block';
        } else {
            publ.style.display = 'none';
        }
    }
}

// TECLA ENTER PARA SUBMETER

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona ouvintes de eventos para os campos de entrada e botoes de publicação
    for (let i = 0; i < 6; i++) {
        const contents = document.querySelectorAll('.contents')[i];
        const publ = document.getElementById('publ' + i);
        
        contents.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Impede o comportamento padrão
                publ.click(); // Clica no botão correspondente
            }
        });
    }

    // Adiciona um ouvinte de eventos para o botão "Esc" que aciona o clique de todos os botoes "backButton"
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            event.preventDefault(); // Impede o comportamento padrão
            const backButtons = document.querySelectorAll('.backButton');
            backButtons.forEach(button => button.click()); // Clica em todos os botões com a classe "backButton"
        }
    });
});


// Função para abrir a janela e fechar o backdrop
function openFormPost(formPostId) {
    const formPost = document.getElementById(formPostId);
    formPost.style.display = 'block';

    const backdrop1 = document.getElementById('backdrop1');
    backdrop1.style.display = 'none';
}

// Atribui a função a cada botão
document.getElementById('principal').addEventListener('click', function() {
    openFormPost('form-post0');
});
document.getElementById('btn-post1').addEventListener('click', function() {
    openFormPost('form-post1');
});
document.getElementById('btn-post2').addEventListener('click', function() {
    openFormPost('form-post2');
});
document.getElementById('btn-post3').addEventListener('click', function() {
    openFormPost('form-post3');
});
document.getElementById('btn-post4').addEventListener('click', function() {
    openFormPost('form-post4');
});
document.getElementById('btn-post5').addEventListener('click', function() {
    openFormPost('form-post5');
});


// PARA ABRIR MESMA JANELA //

// Função para abrir a janela e fechar o backdrop
function openFormPost(formPostId) {
    const formPost = document.getElementById(formPostId);
    formPost.style.display = 'block';

    const backdrop1 = document.getElementById('backdrop1');
    backdrop1.style.display = 'none';
}
*/
// Atribui a função aos botões
document.getElementById('win22').addEventListener('click', function() {
    openFormPost('post-edt');
});
/*document.getElementById('win2').addEventListener('click', function() {
    openFormPost('post-edt');
});*/


    




