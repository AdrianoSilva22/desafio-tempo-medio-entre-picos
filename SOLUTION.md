#Cálculo do Tempo Médio entre Picos

Esse desafio da empresa Improvess tive que criar um algoritomo, optei por utilizar JavaScript, para calcular o tempo médio entre picos e retornar em minutos e segundos.

##Implementação

Eu comecei definindo uma variável chamada "mensagemErro" para armazenar mensagens de erro e ajudar nos retornos. Em seguida, criei a função mostrarTempoMedioEntrePicos, que é responsável por realizar o cálculo do tempo médio entre os picos.

A lógica nesta função foi da seguinte maneira: 
-tempoEntrePicosEmSegundos: um array para armazenar os tempos entre os picos.
-tempoMedioEntrePicosEmSegundos: uma variável para armazenar o tempo médio entre os picos em segundos.
-contador: uma variável para somar os tempos entre os picos.

Utilizei um loop for para percorrer o array tempoEntrePicosEmSegundos. Dentro do loop, verifiquei se havia pelo menos dois picos para calcular o tempo médio. Se não houvesse, uma mensagem de erro é retornada, caso contrário, somei os tempos entre os picos à variável contador.

Após o loop, calculei o tempo médio dividindo o valor de contador pelo comprimento do array tempoEntrePicosEmSegundos.

Dessa forma, chamei a função formatarMininutoESegundo para formatar o tempo médio em minutos e segundos e exibir o resultado.

##Função de Formatação (Mininutos e Segundos)

A função formatarMininutoESegundo é responsável por formatar o tempo em minutos e segundos: 

Verifico se tempoEmSegundos existe e não está vazio, retorno uma mensagem de erro se estiver vazio, Converto o tempo para minutos e segundos, formato a saída para dois dígitos em minutos e segundos, Retorno o resultado formatado.

##Dados 

Gerei dados em diversos cenários simulando um gráfico, para que independente da situação o algorítimo continue calculando.

##Exemplos de entradas 

Preencher o array  tempoEntrePicosEmSegundos a exemplo:
entrada: [25, 26, 30, 58, 24, 45]
saída esperada : `00:35`

##Maiores Dificuldades 
Escolher a melhor forma possível de como solucionar, sendo objetivo.
Porém, a maior dificuldade foi interpretar o problema proposto.

##Como executar a solução
É necessario ter um simples ambiente de execução Javascript, logo é necessário do Nodejs.
Caso não possua instale em : https://nodejs.org/en/download