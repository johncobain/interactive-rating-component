let rattingValue = 0;

function changeRatting(id){
    let ratting = document.querySelectorAll('.ratting');  
    ratting.forEach((e) => e.classList.remove('active'));
    let selected = document.getElementById(id);
    selected.classList.add('active');
    rattingValue = selected.value;
}

function submit(){
    if(rattingValue){   
        document.querySelector('.ratting-state').style.display = 'none';
        document.querySelector('.thank-you-state').style.display = 'block';

        document.querySelector('.show-selected span').innerHTML = rattingValue;
    }
}