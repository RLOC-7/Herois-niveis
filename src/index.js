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
