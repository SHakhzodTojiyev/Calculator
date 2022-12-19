// console.log(window); // All HTML page
window.addEventListener("load", () => {
  // console.log("Finished...");
  // document.querySelector("body").innerText = "Loading..."

  // HTML DOM Elements
  const resultBtn = document.getElementById("result-btn");
  // Start JS coding
  resultBtn.addEventListener("click", () => {
    // HTML DOM Elements
    let numberOne = document.getElementById("number_one").value;
    let numberTwo = document.getElementById("number_two").value;
    let expression = document.getElementById("expression").value;
    let result = document.getElementById("result");

    // console.log(typeof(numberOne)); // String
    // console.log(typeof(numberTwo)); // String

    let numberOneIsEmpity = numberOne.trim().length === 0;
    let NumberTwoIsNumber = isNaN(numberOne) && isNaN(numberTwo);

    if(numberOneIsEmpity || NumberTwoIsNumber){
      alert("Son yo'q!")
    }

    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    // console.log(typeof(numberOne)); // Number
    // console.log(typeof(numberTwo)); // Number

    result.innerText = Function(`return ${numberOne} ${expression} ${numberTwo}`)();
  });
});
