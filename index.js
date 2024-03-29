document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  const searchIcon = document.querySelector('.search i');

  // Adiciona um ouvinte de evento de clique ao ícone de pesquisa
  searchIcon.addEventListener('click', () => {
      // Ativa o campo de pesquisa quando o ícone é clicado
      searchInput.focus();
      // Esconde o ícone de pesquisa quando clicado
      searchIcon.style.display = 'none';
  });

  // Adiciona um ouvinte de evento de foco ao campo de pesquisa
  searchInput.addEventListener('focus', () => {
      // Esconde o ícone de pesquisa quando o campo de pesquisa está em foco
      searchIcon.style.display = 'none';
  });

  // Adiciona um ouvinte de evento de desfoque ao campo de pesquisa
  searchInput.addEventListener('blur', () => {
      // Verifica se o campo de pesquisa está vazio
      if (searchInput.value.trim() === '') {
          // Mostra o ícone de pesquisa quando o campo de pesquisa perde o foco e está vazio
          searchIcon.style.display = 'block';
      }
  });
});
