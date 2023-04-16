function inputCountry() {
  const searchCountry = document.getElementById('inputCountry').value;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9012b9c622mshae751f941698645p1fdcb8jsncf3a03ee2ea0',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
  };

  fetch('https://covid-193.p.rapidapi.com/statistics?country=' + searchCountry, options)
    .then((response) => response.json())

    .then((hasilRender) => {
        
      const statistics = hasilRender.response[0];
      console.log(statistics);

      const activeCases = statistics.cases.active >= 1 ? (document.getElementById('activeCases').textContent = statistics.cases.active) : (document.getElementById('activeCases').innerHTML = '---');

      const newCases = statistics.cases.new >= 1 ? (document.getElementById('newCases').textContent = statistics.cases.active) : (document.getElementById('newCases').innerHTML = '---');

      const recover3edCases = statistics.cases.recovered >= 1 ? (document.getElementById('recoveredCases').textContent = statistics.cases.recovered) : (document.getElementById('recoveredCases').innerHTML = '---');

      const totalCases = statistics.cases.total >= 1 ? (document.getElementById('totalCases').textContent = statistics.cases.total) : (document.getElementById('totalCases').innerHTML = '---');

      const deathCases = statistics.deaths.total >= 1 ? (document.getElementById('deathCases').textContent = statistics.deaths.total) : (document.getElementById('deathCases').innerHTML = '---');

      const totalTest = statistics.tests.total >= 1 ? (document.getElementById('totalTest').textContent = statistics.tests.total) : (document.getElementById('totalTest').innerHTML = '---');
        

    
    })
    .catch((error) => {
      console.error(err);
      alert('Data tidak dapat ditampilkan!!');
    });
}
