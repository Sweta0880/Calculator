
// function buttonClicked(number) {
  let result = document.getElementById("input");
  console.log(result)
  let clickonbutton = (number) => {
    result.value += number;     
  }

let Result = () => {
  try {
    result.value = eval(result.value);
  }
  catch (err) {
    alert("Enter the valid Input");
  }
 }
function clr() {
  result.value =" ";
}

function del(){
  result.value = result.value.slice(0, -1);
}
jzx-zggr-ibw