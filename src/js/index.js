document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

function doSomething(){  
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
  .addEventListener('click', doSomething);