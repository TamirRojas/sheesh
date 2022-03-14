let animals=["frog","chicken","cow","fox"];
let food=["flys","wheat","grass","rats"];

console.log(mergetable(animals,food));

function mergetable(){
    let table1=[];
    let table2=[];
    let mix_table=[];

    for(i=0;i<animals.length;i++){
        table1.push(animals[i]);
    }
    for(i=0;i<food.length;i++){
        table2.push(food[i]);
    }
    
    for (i=0, j=0; i<table1.length && j<table2.length; i++, j++){
        mix_table.push(table1[i],table2[j])
    }

    return mix_table;
}


console.log("exo2")

// increment en diagonal
let origen_x = 5;
let origen_y = 3;
console.log("this is a test" + mouvement_test(origen_x, origen_y))
function mouvement_test(line, column){
let position = [];

    for (i=line, j=column ;i<=(line+10) && j<=(column+10); i++, j++){
    position.push([i],[j])
    }
return position;
}
