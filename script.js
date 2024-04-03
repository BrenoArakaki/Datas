function checkData() {
    let dia = document.forms["dados"]["dia"].value;
    let mes = document.forms["dados"]["mes"].value;
    let ano = document.forms["dados"]["ano"].value;

    let teste = mes + "-" + dia + "-" + ano;
    data = new Date(teste);

    if(data == "Invalid Date" || data.getMonth() + 1 != mes){
        document.getElementById("show").innerHTML = "<p class='red'>Data inválida";
    }
    else{
        document.getElementById("show").innerHTML = "<p class='green'>Data justa";
    }
}