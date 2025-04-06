// let heroes=['spiderman','batman','iron man'];
// for (let hero of heroes){
//     console.log(hero);
// }
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }
// let sum=0;
// let marks=[2,3,1,2,3];
// for(let mark of marks){
//     sum=sum+mark;
// }
// sum=sum/marks.length;
// console.log(`the average marks is ${sum}`);
let items=[650,50,654,450,41];
for(let i=0;i<items.length;i++){
    items[i]=items[i]-items[i]*0.1;
}
console.log(items)