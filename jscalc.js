let billAmount = document.getElementsByClassName('inputBill')[0];
    let peopleAmount = document.getElementsByClassName('inputPeopleNumber')[0];
    let service = document.getElementsByClassName('selectService')[0];
    let result = document.getElementsByClassName('getResult')[0];
    let selectedservice = service.selectedIndex;
    

function calculateAmount(){
    let finalAmount = billAmount.value/peopleAmount.value;
    if (service.selectedIndex == 1) {
        finalAmount = (finalAmount*0.20)+finalAmount;
       console.log(finalAmount)
    }else if (service.selected == '40') {
        finalAmount = (finalAmount*0.40)+finalAmount;
    }
    result.innerHTML= '<h3>final amount : </h3>'+ '<p>' + finalAmount + '</p>';
}