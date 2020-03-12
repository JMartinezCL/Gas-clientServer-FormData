document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});   
  });

function getData(){  
  console.log("works!");
  let first_name = document.getElementById('first_name').value;
  let last_name = document.getElementById('last_name').value;
  let address = document.getElementById('address').value;
  let email = document.getElementById('email').value;
  let psw = document.getElementById('password').value;
  let data = '{"first_name": "'+first_name+'", "last_name":"'+last_name+'", "address":"'+address+'", "email":"'+email+'", "psw":"'+psw+'"}';
  let obj = JSON.parse(data);
  google.script.run.getFormData(obj);
}


document.getElementById('btn-send')
  .addEventListener('click', getData);

function  dataTable(data){

  let user = JSON.parse(data); 
  let table = document.getElementById('body-table');
  table.innerHTML = "";  
  let index = 0;

  user.forEach(element => {   
    if(index > 0){
      const tr = document.createElement('tr'); 
      tr.innerHTML=
      '<td>'+element.first_name+'</td>'+
      '<td>'+element.last_name+'</td>'+
      '<td>'+element.address+'</td>'+
      '<td>'+element.email+'</td>';
      table.appendChild(tr);
    }    
    index++;
  });
}

document.getElementById('btn-load')
  .addEventListener('click', ()=>{
    google.script.run.withSuccessHandler(dataTable)
      .dataSheet();
  });