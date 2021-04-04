'use strict';

const dayHours =['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'];

const container= document.getElementById('STORE');

const tableEl=document.createElement('table');
container.appendChild(tableEl);

let totalOfDays =[0,0,0,0,0,0,0,0,0,0,0,0,0,0];

console.log(totalOfDays);

function totalOfTotal(){
  let tT=0;
  for(let i=0; i<totalOfDays.length; i++){
    tT= totalOfDays[i]+tT;
  }
  return tT;
}


function Sales(location,min,max,avg){
  this.storeLocation =location ;
  this.hrMin = min;
  this.hrMax = max;
  this.cookiespercostumerAvg = avg;
  this.costumerPerHrArr = [];
  this.perHrConsumeArr= [];
}

Sales.prototype.random = function(){

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  for(let i=0; i<dayHours.length; i++)
  {
    let x= random(this.hrMin,this.hrMax);
    this.costumerPerHrArr.push(x);
    let y= Math.ceil(x* this.cookiespercostumerAvg);
    this.perHrConsumeArr.push(y);
    totalOfDays[i]=totalOfDays[i]+y;
  }
};



Sales.prototype.cookiesTotal =function(){
  let total =0;
  for (let i=0; i<this.perHrConsumeArr.length; i++){
    total= this.perHrConsumeArr[i] + total;
  }
  return total;

};



function first(){

  const headerowEL=document.createElement('tr');
  tableEl.appendChild(headerowEL);

  let headerCells=document.createElement('th');
  headerowEL.appendChild(headerCells);
  headerCells.textContent = 'Time';

  for (let i=0; i< dayHours.length; i++)
  {
    let headerCells=document.createElement('th');
    headerowEL.appendChild(headerCells);
    headerCells.textContent = dayHours[i];
  }
  headerCells=document.createElement('th');
  headerowEL.appendChild(headerCells);
  headerCells.textContent = 'Daily total';

}


Sales.prototype.salesPrint =function(){

  const dataRaw=document.createElement('tr');
  tableEl.appendChild(dataRaw);


  let dataCells=document.createElement('td');
  dataRaw.appendChild(dataCells);
  dataCells.textContent = this.storeLocation;

  for (let i=0; i< dayHours.length; i++)
  {
    let dataCells=document.createElement('td');
    dataRaw.appendChild(dataCells);
    dataCells.textContent = this.perHrConsumeArr[i];

  }

  dataCells=document.createElement('td');
  dataRaw.appendChild(dataCells);
  dataCells.textContent = this.cookiesTotal();



};

function last(){

  const headerowEL=document.createElement('tr');
  tableEl.appendChild(headerowEL);

  let headerCells=document.createElement('th');
  headerowEL.appendChild(headerCells);
  headerCells.textContent = 'Total';

  for (let i=0; i< dayHours.length; i++)
  {
    let headerCells=document.createElement('th');
    headerowEL.appendChild(headerCells);
    headerCells.textContent = totalOfDays[i];
  }

  headerCells=document.createElement('th');
  headerowEL.appendChild(headerCells);
  headerCells.textContent = totalOfTotal();

}



const seattle = new Sales('Seattle',23,65,6.3);
const tokyo = new Sales('Tokyo',3,24,1.2);
const dubai = new Sales('Dubai',11,38,3.7);
const paris = new Sales('Paris',20,38,2.3);
const lima = new Sales('Lima',2,16,4.6);

//------------------------
first();



seattle.random();
seattle.salesPrint();


tokyo.random();
tokyo.salesPrint();


dubai.random();
dubai.salesPrint();


paris.random();
paris.salesPrint();


lima.random();
lima.salesPrint();

console.log(totalOfDays);

last();

