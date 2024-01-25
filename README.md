<!-- Título Principal -->
<h1 align="center">Correção de Bug - FIX003</h1>

<!-- Seção do Problema -->
<h2>Problema</h2>

<p>
  Foi identificada a presença de informações altamente sensíveis no código, incluindo a chave da API e dados relacionados ao GitHub, representando uma potencial vulnerabilidade.
</p>

<!-- Seção da Solução -->
<h2>Solução</h2>

<p>
  A abordagem adotada consistiu em transferir essas informações sensíveis para um arquivo de configuração (.env) e adicioná-lo ao arquivo .gitignore. Dessa forma, tais informações não ficam visíveis no repositório, contribuindo para a segurança do código.
</p>

<!-- Seção de Alternativas Consideradas -->
<h2>Alternativas</h2>

<p>
  Durante o processo de correção, nenhuma alternativa tão prática e eficiente foi identificada. A estratégia escolhida foi considerada a mais segura e alinhada às boas práticas de segurança.
</p>

<!-- Seção de Notas Adicionais -->
<h2>Notas Adicionais</h2>

<p>
  Não há notas adicionais relevantes a serem consideradas. A implementação da solução foi direta e não gerou impactos significativos em outros aspectos do projeto.
</p>

<hr>
