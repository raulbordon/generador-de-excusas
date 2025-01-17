let title= document.getElementById ("title");
let textExcuse = document.querySelector(".textExcuse")
let buttonGenerate = document.querySelector(."buttongnerate")
buttonGenerate.addEventListener('click',(){
 let artic = ['El', 'Mi']
 let who = ['perro', 'hamster', 'hermano', 'padre']
 let verb =['se comio', 'se meo', 'me rompio', 'me perdio']
 let obj =['mi casa', 'mis llaves de casa', 'el movil' 'los cuadernos']
 
 let numArtic=Math.floor(Math.random() * artic.length);
 let numWho=Math.floor(Math.random() *who.length);
 let numVerb=Math.floor(Math.random() *verb.length);
 let numObj=Math.floor(Math.random()*obj.length) 
 
 if (numArtic = 0) {
    if (numWho=1) {
        numArtic=1;
        
    }
}
textExcuse.innerText = `${artic[numArtic]}${who[numWho]} ${verb[numVerb]} ${obj[numObj]}`;
})