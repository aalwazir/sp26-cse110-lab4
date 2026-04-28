for(let property in statistics){
    if(property.startsWith('r') || statistics[property] % 2 == 1){
        console.log(statistics[property]);
    }
}