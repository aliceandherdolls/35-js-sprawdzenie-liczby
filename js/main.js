let number = 7;

function actions(par1) {
    let compare = 100 < par1 && par1 < 200;

    if (100 < par1 && par1 < 200) {
        console.log("Liczba nie znajduje się w przedziale");
    } else {
        console.log("Liczba znajduje się w przedziale");
    }

}

actions(7);