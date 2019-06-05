function Calculator(){
    this.savedOperations =[];
    this.mainDisplay = [];
    this.addValue = function(val){
    this.mainDisplay.push(val);

    }
    this.removeValue = function(){
        this.mainDisplay.pop();
    }
    this.checkDisplay = function(){
        return parseInt(this.mainDisplay.join(""));
    }
}

this.hendleClick = function(val){
    if(typeof val === "number"){
        this.addValue(val);
        }else{
            if(this.mainDisplay.lenght === 1){
                this.addValue(0);
                this.mainDisplay.shift();
            }else{
                this.removeValue();
            }
        }
}

function Renderer(calc){
    this.calculator = calc;
    this.renderAll = function(){

    }
}

function main(){
    var calc = new Calculator();
    var render = new Render(calc);
    render.renderAll();
    //da se povika intefejsot;
}




function eventCallback(event){
    calculator.addValue(event.target.id);
    var displayValue = calculator.checkDisplay();
    $("#mainDisplay").html(displayValue);
} blehton.on("click", eventCallback);




$(".calculator-keys").click(function(event){
    var thingClicked = this.innerHTML;
    console.log("you clicked: ", thingClicked);
     $("#currentValue").html(thingClicked);
   });
   

   // const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null,
//   };
  
//   function updateDisplay() {
//     const display = document.querySelector('.calculator-screen');
//     display.value = calculator.displayValue;
//   }
//   updateDisplay();
