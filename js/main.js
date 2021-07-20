var about = ["Programmer", "Developer", "Designer", "Sportsman"];
var k = 0, i = 0, b = false;

function change(){
    if(i < about[k%4].length && !b){
        i++;
        setTimeout(change, 50);
    } else{
        b = true;
        if(i == about[k%4].length){
            i--;
            setTimeout(change, 1500);
        } else if(i >= 0){
            i--;
            setTimeout(change, 50);
        } else{
            k++;
            b = false;
            setTimeout(change, 50);
        }
    }
    document.getElementById("flex").innerHTML = about[k%4].slice(0, i+1);
}

change();