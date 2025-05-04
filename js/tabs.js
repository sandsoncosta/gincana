document.addEventListener('DOMContentLoaded', function() {
    // Obter todos os botões da aba
    const tabButtons = document.querySelectorAll('.tab-button');
    
    // Adicionar evento de clique a cada botão
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remover classe 'active' de todos os botões
        tabButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Adicionar classe 'active' ao botão clicado
        this.classList.add('active');
        
        // Obter o ID do conteúdo da aba a ser exibida
        const tabId = this.getAttribute('data-tab');
        
        // Esconder todos os conteúdos de aba
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Mostrar o conteúdo da aba selecionada
        document.getElementById(tabId).classList.add('active');
        
        // Recalcular e redimensionar os gráficos quando uma aba for selecionada
        // para garantir que sejam exibidos corretamente
        if (window.Chart) {
          window.dispatchEvent(new Event('resize'));
        }
        
        // Salvar a aba ativa no localStorage para persistência
        localStorage.setItem('activeTab', tabId);
      });
    });
    
    // Verificar se há uma aba salva no localStorage
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      // Ativar a aba salva
      const savedButton = document.querySelector(`.tab-button[data-tab="${savedTab}"]`);
      if (savedButton) {
        savedButton.click();
      }
    }
  });