<h1>Falha</h1>
Previamente o programa não tinha forma alguma de manter log, com excessão do próprio Metamask, dito que a prória ferramenta tem essa função, no entanto, para maior comodidade do usuário e do dono da aplicação, é de suma importância que o Log seja implementado no BD.

<h2>Solução Implementada</h2>
Dentro do método handleFileSubmission foi adicionado um pequeno trecho de código que pega os dados do arquivo incluindo o URL do produto, id do mesmo e o id do usuário dentro do log que vai para a coleção "Log" no FireStore dentro do Firebase.

<h2>Alternativas</h2>
Fazer o log em um txt utilizando Node, porém tendo esse log no Banco de Dados facilita pra um mapping em algum dashboard de administrador no futuro, sendo também uma alternativa mais segura
