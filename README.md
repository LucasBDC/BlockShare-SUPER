<!-- Título Principal -->
<h1 align="center">Correção de Bug - FIX011</h1>


<!-- Seção do Problema -->
<h2>Falha</h2>

<p>
  Anteriormente, o programa não possuía nenhum método para manter registros, exceto pelo próprio Metamask. Embora a ferramenta ofereça essa funcionalidade, é de extrema importância para a comodidade do usuário e do proprietário da aplicação que os registros sejam implementados no banco de dados.
</p>

<!-- Seção da Solução -->
<h2>Solução Implementada</h2>

<p>
  No método `handleFileSubmission`, foi acrescentado um trecho de código para capturar os dados do arquivo, incluindo o URL do produto, o ID do produto e o ID do usuário. Esses dados são então registrados no log, que é armazenado na coleção "Log" no Firestore dentro do Firebase.
</p>

<!-- Seção de Alternativas Consideradas -->
<h2>Alternativas</h2>

<p>
  Considerou-se a possibilidade de fazer o log em um arquivo de texto utilizando o Node. No entanto, optou-se por armazenar esse log no banco de dados para facilitar futuros mapeamentos em um painel de administração. Essa abordagem também é considerada mais segura.
</p>

<!-- Seção de Notas Adicionais -->
<h2>Notas Adicionais</h2>

<p>
  Não há notas adicionais relevantes a serem consideradas neste momento. A implementação do log no banco de dados visa melhorar a rastreabilidade e oferecer suporte a recursos futuros de administração.
</p>

<hr>

``` const logCollectionRef = collection(db, "Log");
        const user = auth.currentUser
        const logDocRef = doc(logCollectionRef);
        await setDoc(logDocRef, {
          ticketId: logDocRef.id,
          userId: user.uid,
          imgHash : fileHashURL
        });
```

<hr>
<br>
``` try {
        const fileResponse = await uploadFileToIPFS(selectedFile);
        const fileHashURL = `https://gateway.pinata.cloud/ipfs/${fileResponse.data.IpfsHash}`;
        contract.add(account, fileHashURL);
        alert("O arquivo foi enviado com sucesso");
      } catch (error) {
        alert("Não foi possível enviar o arquivo!");
      } finally {
        setSelectedFileName("Não selecionado");
        setSelectedFile(null);
      }```

