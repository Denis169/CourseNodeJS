const morning = require('./Morning');
const evening = require('./Evening');

module.exports = {
  getMorningMessage : () => console.log(morning),
  getEveningMessage : () => console.log(evening),
}