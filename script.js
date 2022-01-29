
async function covid(){

    try{ 
    var cese= document.getElementById('cname').value;
    var state= document.getElementById('sname').value;

    let ces= await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${cese}`);

    let res= await ces.json();
    console.log(res);
    console.log(res);
    document.getElementById('sname').value=cese;
    document.getElementById('pop').value=res.All.population;
    document.getElementById('life').value=res.All.life_expectancy;
    document.getElementById('confirm').value= res.All.confirmed;
    document.getElementById('recover').value= res.All.recovered;
    document.getElementById('dead').value= res.All.deaths;
    document.getElementById('confirme').value= res.confirmed;
    document.getElementById('recovere').value= res.recovered;
    document.getElementById('death').value= res.deaths;

}catch(error){
    console.log("data not found");
}

}