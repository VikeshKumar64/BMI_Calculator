const form = document.querySelector(`form`)
const inpu = document.querySelector(`#inpu`);
let validHeight = document.querySelector(`#valid-height`);
let validWeight = document.querySelector(`#valid-weight`);
const underMessage = document.querySelector(`#underMessage`);
const overMessage = document.querySelector(`#overMessage`);
const normalMessage = document.querySelector(`#normalMessage`);
    
form.addEventListener(`submit`, function(eventa){
    eventa.preventDefault(); // this helps to stop the action of GET and POST Method.
    const Height = parseInt(document.querySelector(`#height`).value); //convertin the string into a number 
    const Weight = parseInt(document.querySelector(`#weight`).value);//convertin the string into a number 
    const Calculated = document.querySelector(`#calculated`);

    validHeight.style.display = 'none';
    validWeight.style.display = 'none';
    underMessage.style.display = 'none';
    overMessage.style.display = 'none';
    normalMessage.style.display = 'none';
    
    
    
    if (isNaN(Height) || Height <= 0) {
        validHeight.style.display = 'block';
        // inpu.innerHTML = `Enter a Valid Height, (${Height})`;
    }
    else if (isNaN(Weight) || Weight <= 0) {
        validWeight.style.display = 'block';
        // inpu.innerHTML = `Enter a Valid Weight, (${Weight})`;
    }
    else{
       const answer =  (Weight / ((Height * Height)/10000)).toFixed(2); // Formula to Calculate BMI which gives upto two dacimal values.
       document.querySelector(`#calculated`).value = `${answer}`;
        if (answer < 16.6) {
            underMessage.style.display = 'block';
        } else if (answer > 24.9) {
            overMessage.style.display = 'block';
        } else {
            normalMessage.style.display = 'block';
        }
    }
});
/* Additional Features */
const phButton = document.querySelector(`.phButton`); 
phButton.addEventListener(`click`, ()=>{
    incriment(`height`);
})
const pwButton = document.querySelector(`.pwButton`); 
pwButton.addEventListener(`click`, ()=>{
    incriment(`weight`);
})

const mhButton = document.querySelector(`.mhButton`);
mhButton.addEventListener(`click`,()=>{
    decriment(`height`);
})

const mwButton = document.querySelector(`.mwButton`);
mwButton.addEventListener(`click`,()=>{
    decriment(`weight`);
})

//this function will Increment the input value by 1.
function incriment(inptId){
    let inputElement = document.querySelector(`#${inptId}`);
    let currentValue = parseInt(inputElement.value);
    if(!isNaN(currentValue)){
        currentValue++;
        inputElement.value = currentValue;
        return inputElement;
    }
}
//this function will dicriment the input value by 1.
function decriment(inputId){
    let inputElement = document.querySelector(`#${inputId}`);
    let currentValue = parseInt(inputElement.value);
    if(!isNaN(currentValue)){
        currentValue--;
        inputElement.value = currentValue;
        return inputElement;
    }
}

// when i Click Reset the inpu.innerHTML shold vanish.
let reset = document.querySelector(`#reset`);
reset.addEventListener(`click`, ()=>{
    inpu.innerHTML = ``;
})