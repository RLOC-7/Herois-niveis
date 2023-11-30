# 1️⃣ Desafio Classificador de nível de Herói #Dio


# Herois e Níveis
Um simples script em JavaScript que avalia o nível de heróis com base em suas experiências (XP). Cada herói tem um nome associado e uma quantidade específica de XP, determinando seu nível de poder.

***Código javascript***

````
const herois = [
  { nome: "Superman", xp: 5000 },
  { nome: "Batman", xp: 8000 },
  { nome: "Mulher Maravilha", xp: 3000 },
  { nome: "Flash", xp: 6000 },
  { nome: "Aquaman", xp: 7500 },
];

for (let i = 0; i < herois.length; i++) {
  let heroi = herois[i];
  let nivel;

  if (heroi.xp < 1000) {
    nivel = "Ferro";
  } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    nivel = "Bronze";
  } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    nivel = "Prata";
  } else if (heroi.xp >= 6001 && heroi.xp <= 7000) {
    nivel = "Ouro";
  } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
    nivel = "Platina";
  } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    nivel = "Ascendente";
  } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  // Exibe a mensagem final dentro do loop para cada herói
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}

````

# Níveis
- ***Ferro***: 
    - XP: **1000**
- ***Bronze***:
    - XP: **1001 à 2000**
- ***Prata***: 
    - XP: **2001 à 5000**
- ***Ouro***: 
    - XP: **6001 à 7000**
- ***Platina***: 
    - XP: **7001 à 8000**
- ***Ascendente***: 
    - XP: **8001 à 9000**
- ***Imortal***: 
    - XP: **9001 à 10000**
- ***Radiante***: 
    - XP: **10001**
## Como Executar
O arquivo **package.json** contém um script mais facil para execução basta digitar o código abaixo em seu console

bash:

``node start``

**Certifique-se de ter o Node.js instalado em seu sistema.**