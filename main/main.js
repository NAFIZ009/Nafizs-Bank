let depositeAmmount=document.getElementById('depositeAmmount');
let withdrawAmmount=document.getElementById('withdrawAmmount');
let mainAmmount=document.getElementById('mainAmmount');
let depositeInput=document.getElementById('depositeInput');
let withdrawInput=document.getElementById('withdrawInput');
let depBtn=document.getElementById('depBtn');
let withdBtn=document.getElementById('withdBtn');
let warningMoney=document.getElementById('warningMoney');
let warningText=document.getElementById('warningText');
let initValue=depositeInput.value;

depBtn.addEventListener('click', function(e) {
    if(!warningText.classList.contains('d-none')){
        warningText.classList.add('d-none');
    }
    if (parseInt(depositeInput.value)>0) {
        mainAmmount.innerText=parseInt(mainAmmount.innerText)+parseInt(depositeInput.value);
    depositeAmmount.innerText=parseInt(depositeInput.value);
    depositeInput.value=initValue;
    }else{
        mainAmmount.innerText=parseInt(mainAmmount.innerText)+0;
    depositeInput.value=initValue;
    }
    
});
withdBtn.addEventListener('click', function(e) {
    if (parseInt(withdrawInput.value)>parseInt(mainAmmount.innerText)) {
        if(parseInt(withdrawInput.value)>0){
            warningMoney.innerText=withdrawInput.value;
            warningText.classList.remove('d-none');
            withdrawInput.value=initValue;
        }else{
            withdrawInput.value=initValue;
        }

    }else{
        if(parseInt(withdrawInput.value)>0){
            mainAmmount.innerText=parseInt(mainAmmount.innerText)-parseInt(withdrawInput.value);
            withdrawAmmount.innerText=parseInt(withdrawInput.value);
            withdrawInput.value=initValue;
            warningText.classList.add('d-none'); 
        }else{
            withdrawInput.value=initValue;
            warningText.classList.add('d-none');
        }
    }

});