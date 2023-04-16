const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9012b9c622mshae751f941698645p1fdcb8jsncf3a03ee2ea0',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/statistics', options)
	.then(response => response.json())
    // .then(hasilRender => {
    //     const statistics = hasilRender.response[0];
    //     console.log(statistics)
    // })
	.then(hasilRender => console.log(hasilRender.response[0]))
	.catch(err => console.error(err));
    document.getElementById("activeCases").textContent=hasilRender.cases.active;
    document.getElementById("newCases").textContent=hasilRender.cases.new;
    document.getElementById("recoveredCases").textContent=hasilRender.cases.recovered;
    document.getElementById("totalCases").textContent=hasilRender.cases.total;
    document.getElementById("deathCases").textContent=hasilRender.deaths.total;
    document.getElementById("totalTest").textContent=hasilRender.test.total;

    // function(){
    //     document.getElementById("activeCases").textContent=hasilRender.cases.active;
    //     document.getElementById("newCases").textContent=hasilRender.cases.new;
    //     document.getElementById("recoveredCases").textContent=hasilRender.cases.recovered;
    //     document.getElementById("totalCases").textContent=hasilRender.cases.total;
    //     document.getElementById("deathCases").textContent=hasilRender.deaths.total;
    //     document.getElementById("totalTest").textContent=hasilRender.test.total;
    // }