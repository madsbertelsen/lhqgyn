console.log('hhejh');

alert('hje');
console.log('lkj');
fetch('http://localhost:1337/api/points/674')
  .then((response) => response.json())
  .then((data) => console.log(data));
