exemplo("teste");

function exemplo(param){
this.param=param;
alert(param);

}


//act list
taskList=[];
paramList=[];
taskList[0]=[];
taskList[0][0]=exemplo;
paramList[0]=[];
paramList[0][0]=1;

addTask();
addTask();
function addTask(){
taskList.splice(taskList.length,0, exemplo);
paramList.splice(paramList.length,1)
console.log(taskList);
}

runAct(0);//testar se funciona
function runAct(n){
this.n=n;
for (i=0;i<taskList[n].length;i++){
taskList[n][i](paramList[n][i]);
}
}

