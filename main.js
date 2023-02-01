

// let input = document.getElementById('input')
let button = document.getElementById('submit')
let para = document.getElementById('para')
let inputs = document.querySelectorAll('input')

button.addEventListener('click',(()=>{

if(inputs[0].value=="")
{
  alert("Name is empty")
}
else
{document.write(`<div style="text-align:center;color:green;"><h1>Your Form has been Submitted</h1><button id="hi">View</button><h1 id="para"></h1></div>`)
document.getElementById('hi').addEventListener('click', function(){
 document.getElementById('para').textContent=inputs[0].value +" " + inputs[1].value
 document.querySelector('h1').style.display="none"
 document.getElementById('hi').style.display="none"
})}
}))