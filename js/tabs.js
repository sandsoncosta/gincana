// Função para gerenciar as abas principais
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remover classe active de todos os botões e conteúdos
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
          
          // Adicionar classe active ao botão clicado
          this.classList.add('active');
          
          // Mostrar o conteúdo correspondente
          const tabId = this.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
      });
  });
  
  // Funções para as abas de categorias (serão ativadas quando essas abas forem criadas dinamicamente)
  function setupCategoryTabs() {
      const categoryButtons = document.querySelectorAll('.categoria-tab-button');
      const categoryContents = document.querySelectorAll('.categoria-tab-content');
      
      categoryButtons.forEach(button => {
          button.addEventListener('click', function() {
              // Encontrar o conjunto de abas ao qual este botão pertence
              const tabsGroup = this.closest('.categorias-tabs');
              const contentGroup = document.querySelector(
                  tabsGroup.getAttribute('data-content-group')
              );
              
              // Remover classe active apenas dos botões neste grupo
              tabsGroup.querySelectorAll('.categoria-tab-button').forEach(btn => {
                  btn.classList.remove('active');
              });
              
              // Remover classe active apenas dos conteúdos neste grupo
              if (contentGroup) {
                  contentGroup.querySelectorAll('.categoria-tab-content').forEach(content => {
                      content.classList.remove('active');
                  });
              }
              
              // Adicionar classe active ao botão clicado
              this.classList.add('active');
              
              // Mostrar o conteúdo correspondente
              const tabId = this.getAttribute('data-tab');
              const targetContent = document.getElementById(tabId);
              if (targetContent) {
                  targetContent.classList.add('active');
              }
          });
      });
  }
  
  // Expor a função para ser chamada após a criação dinâmica das abas de categoria
  window.setupCategoryTabs = setupCategoryTabs;
});