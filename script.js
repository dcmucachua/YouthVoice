document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.window').forEach(window => {
        window.style.display = 'none';
      });
      const windowId = button.getAttribute('data-window');
      document.getElementById(windowId).style.display = 'block';
    });
  });
  
  document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
      button.parentElement.style.display = 'none';
    });
  });



  document.getElementById('firstWindowButton').addEventListener('click', function() {
    document.getElementById('firstWindow').style.display = 'block';
});
document.getElementById('secondWindowButton').addEventListener('click', function() {
    document.getElementById('secondWindow').style.display = 'block';
});
document.getElementById('thirdWindowButton').addEventListener('click', function() {
    document.getElementById('thirdWindow').style.display = 'block';
});
document.getElementById('fourthWindowButton').addEventListener('click', function() {
    document.getElementById('fourthWindow').style.display = 'block';
});
document.getElementById('fifthWindowButton').addEventListener('click', function() {
    document.getElementById('fifthWindow').style.display = 'block';
});



document.querySelector('.hamburger').addEventListener('click', function() {
  // Alternar a barra lateral
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
});

function openWindow(windowId) {
  // Fechar todas as janelas abertas
  const windows = document.querySelectorAll('.window');
  windows.forEach(window => window.style.display = 'none');

  // Abrir a janela desejada
  const windowToOpen = document.getElementById(windowId);
  windowToOpen.style.display = 'block';
}

document.getElementById('firstWindowButton').addEventListener('click', () => openWindow('firstWindow'));
document.getElementById('secondWindowButton').addEventListener('click', () => openWindow('secondWindow'));
document.getElementById('thirdWindowButton').addEventListener('click', () => openWindow('thirdWindow'));
document.getElementById('fourthWindowButton').addEventListener('click', () => openWindow('fourthWindow'));
document.getElementById('fifthWindowButton').addEventListener('click', () => openWindow('fifthWindow'));

  // INTERRATIVIDADE //

  function highlightButton(number) { 
    var buttons = document.querySelectorAll('.menu-button'); 
    
    // Remove a classe active de todos os botões 
    buttons.forEach(function(button) { 
      button.classList.remove('active'); 
    }); 
    
    // Adiciona a classe active ao botão clicado 
    buttons[number - 1].classList.add('active'); 
  }


 /* document.getElementById('search').addEventListener('focus', function() {
    this.classList.add('focus-visible');
  });
  
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-box')) {
      document.getElementById('search').classList.remove('focus-visible');
    }
  });*/


  
  /*document.getElementById('search').addEventListener('focus', function() { 
    document.querySelector('i').style.display = 'block'; 
  }); 
  
  document.addEventListener('click', function(event) { 
    if (!event.target.closest('.search-box')) { 
      document.querySelector('i').style.display = 'none'; 
    } 
  }); 
  
  function adjustIconPosition() { 
    const searchInput = document.getElementById('search'); 
    const i = document.querySelector('i'); 
    const inputRightPadding = parseInt(getComputedStyle(searchInput).paddingRight); 
    i.style.right = inputRightPadding + 'px'; 
  } 
  
  adjustIconPosition(); 
  window.addEventListener('resize', adjustIconPosition); */

  /* BARRA DE PESQUISAS */

  function expandSearch() { 
    const searchContainer = document.querySelector('.search-container'); 
    searchContainer.classList.add('focus'); 
  } 
  
  function shrinkSearch() { 
    const searchContainer = document.querySelector('.search-container'); 
    searchContainer.classList.remove('focus'); 
  }

  // HEADER PAGES //

  let header = document.getElementById('header'); 
  let windows = document.querySelectorAll('.window'); 
  let menuButtons = document.querySelectorAll('.menu-button'); 
  
  window.addEventListener('scroll', 
    function() { if (window.scrollY > 50) { 
      header.classList.add('header-small'); 
    } else { header.classList.remove('header-small'); 

    } 
    adjustWindowPosition(); 
  }); 
  
  menuButtons.forEach(button => { 
    button.addEventListener('click', function() { 
      let windowId = this.getAttribute('data-window'); 
      openWindow(windowId); 
    }); 
  }); 
  
  function adjustWindowPosition() { 
    let headerHeight = header.offsetHeight; 
    for (let i = 0; i < windows.length; i++) { 
      windows[i].style.top = headerHeight + 'px'; 
    } 
  } 
  
  function openWindow(windowId) { 
    closeAllWindows(); 
    document.getElementById(windowId).classList.add('open'); 
    adjustWindowPosition(); 
  } 
  
  function closeAllWindows() { 
    for (let i = 0; i < windows.length; i++) { 
      windows[i].classList.remove('open'); 
    } 
  } 
  
  // Ajustar as posições das janelas inicialmente caso a página seja carregada com uma posição de rolagem adjustWindowPosition();

  //ACCOUNT //

 document.getElementById("account").onclick = function() {
    document.getElementById("loginModal").style.display = "block";
};

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("loginModal").style.display = "none";
};

document.getElementById("loginBtn").onclick = function() {
    document.getElementById("loginModal").style.display = "none";
};

// Remove the click event on the window to prevent closing the modal by clicking outside

document.querySelector('.account').addEventListener('click', function() {
  // Desativa o scroll na tela principal
  document.body.style.overflow = 'hidden';
});

document.querySelector('#loginBtn').addEventListener('click', function() {
  // Ativa o scroll na tela principal
  document.body.style.overflow = '';
});

document.querySelector('.close').addEventListener('click', function() {
  // Ativa o scroll na tela principal
  document.body.style.overflow = '';
}); 

/* CONTATOS 
document.querySelector('.btn-contato').addEventListener('click', function() {
  document.body.style.overflow = 'hidden';
  document.getElementById('overlay-contato').classList.add('open');
});

document.querySelector('.close1').addEventListener('click', function() {
  document.body.style.overflow = '';
  document.getElementById('overlay-contato').classList.remove('open');
}); */


document.querySelector('.contato').addEventListener('click', function() {
  document.body.style.overflow = 'hidden';
  document.getElementById('overlay-contato').classList.add('open');
});


document.querySelectorAll('.close1').forEach(function(button) {
  button.addEventListener('click', function() {
    document.body.style.overflow = '';
    document.getElementById('overlay-contato').classList.remove('open');
  });
});

// DESATIVAR LINKEDIN //

window.onload = function() {
  // Identificar o link
  var linkedinLink = document.getElementById('linkedin-link');

  // Obfuscate the link to prevent recognition
  var originalHref = linkedinLink.href;
  linkedinLink.href = 'javascript:void(0);';

  // Replace the href after a short delay
  setTimeout(function() {
      linkedinLink.href = originalHref;
  }, 1000);
};

// RESPONSIVIDADE //

/*document.getElementById('toggle-icon').addEventListener('click', function() {
  // Alternar a classe do ícone entre 'fa-bars' e 'fa-check'
  this.classList.toggle('fa-bars');
  this.classList.toggle('fa-xmark icon'); 
}); */

function toggleIcon() {
  var iconSpan = document.getElementById("icon");
  if (iconSpan.innerHTML.includes("fa-bars icon")) {
    iconSpan.innerHTML = '<i class="fas fa-xmark icon"></i>';
  } else {
    iconSpan.innerHTML = '<i class="fa-solid fa-bars icon"></i>';
  }
}


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




// SEARCH 2 //

document.getElementById('searchbt').addEventListener('click', function() {
  document.getElementById('search-window').classList.remove('oculto');
});

document.getElementById('close-window').addEventListener('click', function() {
  document.getElementById('search-window').classList.add('oculto');
}); /*

document.getElementById('search-button').addEventListener('click', function() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const posts = document.querySelectorAll('.post');
  const results = document.getElementById('search-results');
  results.innerHTML = '';

  posts.forEach(function(post) {
      if (post.textContent.toLowerCase().includes(query)) {
          const resultItem = document.createElement('div');
          resultItem.textContent = post.textContent;
          results.appendChild(resultItem);
      }
  });

  if (query === '') {
      results.innerHTML = ''; // Limpa os resultados quando a barra de pesquisa está vazia
  }
}); */

/* function search() {
  const query = document.getElementById('search-bar1').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Limpar resultados anteriores

  const posts = document.querySelectorAll('.post');
  const results = {};

  posts.forEach(win => {
      if (win.textContent.toLowerCase().includes(query)) {
          const theme = win.getAttribute('data-theme');
          if (!results[theme]) {
              results[theme] = [];
          }
          results[theme].push(win.textContent);
      }
  });

  for (const theme in results) {
      const themeDiv = document.createElement('div');
      themeDiv.innerHTML = `<h2>${theme}</h2>`;
      results[theme].forEach(content => {
          const contentDiv = document.createElement('div');
          contentDiv.textContent = content;
          themeDiv.appendChild(contentDiv);
      });
      resultsDiv.appendChild(themeDiv);
  }
}

document.getElementById('search-button').addEventListener('click', search); */

document.getElementById('search-button').addEventListener('click', search);

        function search() {
            const query = document.getElementById('search-bar1').value.toLowerCase();
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Limpar resultados anteriores

            const posts = document.querySelectorAll('.post');
            const results = {};

            posts.forEach(win => {
                if (win.textContent.toLowerCase().includes(query)) {
                    const theme = win.getAttribute('data-theme');
                    if (!results[theme]) {
                        results[theme] = [];
                    }
                    results[theme].push(win);
                }
            });

            for (const theme in results) {
                const themeDiv = document.createElement('div');
                themeDiv.innerHTML = `<h2>${theme}</h2>`;
                results[theme].forEach(win => {
                    const contentDiv = document.createElement('div');
                    contentDiv.textContent = win.textContent;
                    contentDiv.addEventListener('click', () => {
                        window.location.href = win.getAttribute('data-url');
                    });
                    themeDiv.appendChild(contentDiv);
                });
                resultsDiv.appendChild(themeDiv);
            }
        }


// ROLAGEM WINDOW //


// Função que desativa a rolagem da página
function disableScroll() {
  document.body.style.overflow = 'hidden';
}

// Função que reativa a rolagem da página
function enableScroll() {
  document.body.style.overflow = 'auto';
}

// Selecionar todos os botões com a classe 'menu-button'
var Buttons = document.querySelectorAll('.menu-button');

// Adicionar o evento de clique a cada botão para desativar a rolagem
menuButtons.forEach(function(button) {
  button.addEventListener('click', disableScroll);
});

// Selecionar todos os botões com a classe 'close-button'
var closeButtons = document.querySelectorAll('.close-button');

// Adicionar o evento de clique a cada botão para reativar a rolagem
closeButtons.forEach(function(button) {
  button.addEventListener('click', enableScroll);
});


// HEADER 1.1 //
// scripts.js
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.innerWidth <= 600) {
      if (window.scrollY > 50) { // Ajuste o valor conforme necessário
          header.classList.add('header-alterado');
      } else {
          header.classList.remove('header-alterado');
      }
  } else {
      header.classList.remove('header-alterado'); // Garante que a classe seja removida em telas maiores
  }
});


// POST //

// Lógica para receber e exibir as publicações
/*function receivePost(data) {
  const targetDiv = document.getElementById(data.target);
  const newPost = document.createElement('div');
  newPost.classList.add('post');
  newPost.innerHTML = `<p>${data.content}</p>`;
  data.mediaUrls.forEach(url => {
      newPost.innerHTML += `<img src="${url}" alt="Media">`;
  });
  newPost.innerHTML += `
      <div class="comments">
          <textarea placeholder="Escreva um comentário..."></textarea>
          <button>Comentar</button>
          <div class="comment-section"></div>
      </div>`;
  targetDiv.appendChild(newPost);
}

fetch('/get_posts')
.then(response => response.json())
.then(posts => {
  posts.forEach(post => receivePost(post));
});






function publishTest(index) {
  const content = document.getElementById(`content${index}`).value;
  const formData = new FormData();
  formData.append('content', content);

  fetch('/test_publish', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
      alert(data.message);
  })
  .catch(error => console.error('Erro:', error));
} */

// CAIXA DE COMENTÁRIOS //

/*document.addEventListener('DOMContentLoaded', function() {
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
}); */

/* document.addEventListener('DOMContentLoaded', function() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post';
      postDiv.textContent = post.content;
      document.getElementById(post.target).appendChild(postDiv);
  });

  const media = JSON.parse(localStorage.getItem('media')) || [];
  media.forEach(mediaElement => {
      const mediaDiv = document.createElement('div');
      mediaDiv.className = 'media';
      mediaDiv.innerHTML = `<img src="${mediaElement.src}" alt="uploaded media">`;
      document.getElementById('post').appendChild(mediaDiv);
  });
}); */