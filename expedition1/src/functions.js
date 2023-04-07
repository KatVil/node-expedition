const fs = require('fs');
const PATH = './src';
const crew = fs.readFileSync(PATH + '/crew.txt', 'utf-8').split('\r\n').map((el) => el.split(', '))
const rovers = fs.readFileSync(PATH + '/equipment.txt', 'utf-8').split('\r\n').map((el) => el.split(', '))
const rockets = fs.readFileSync(PATH + '/rockets.txt', 'utf-8').split('\r\n').map((el) => el.split(', '))


//позволяет выбрать самого опытного капитана
function getRightCaptain() {
  //let mostExperiencedCrew = crew.filter((el) => el.includes('Капитан')).sort((a, b) => +b[3] - +a[3])
  //return mostExperiencedCrew[0].join(', ')
  const filtered = crew.filter(person => person[2] === 'Капитан')
        .sort((a, b) => +b[3] - +a[3]).map(el => el.join(', '));
  return filtered[0];
}

//позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {
  let mostExperiencedCrew = crew.filter((el) => el.includes('ж') && el.includes('Врач')).sort((a, b) => +b[3] - +a[3]);
  return mostExperiencedCrew[0].join(', ');
}

//позволяет выбрать всех бортмехаников
function getAllEngineer() {
  return crew.filter((el) => el.includes('Бортмеханик')).map((el) => el.join(', '));
}

//Позволяет отобрать все марсоходы
function getAllRover(){
  return rovers.filter((el) => el.includes('марсоход')).map((el) => el.join(', '));
}

//позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers(){
  let time = 3;
  return rovers.filter((el) => el.includes('марсоход') && el[2] > time).map((el) => el.join(', '));

}

//позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket(){
  return rockets.sort((a, b) => +b[2] - +a[2])[1].join(', ');
}


module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket
};
