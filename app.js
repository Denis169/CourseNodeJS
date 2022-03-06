const displaySync = (data, callback) => {

  const randInt = Math.random() * (10-1) + 1;
  const err = randInt > 5 ? new Error('error process, randInt more then five') : null;

  setTimeout(() => callback(err, data), 0)
};

console.log('start program');

displaySync('data processing', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('end program');
