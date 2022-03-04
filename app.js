const os = require('os');
const greeting = require('./greeting');
const User = require('./User');
const welcome = require('./Welcome');

greeting.name = 'Denis';
console.log(greeting.name);

welcome.getMorningMessage();
welcome.getEveningMessage();

let userName = os.userInfo().username;

let man = new User(userName, 32)

man.sayHi();