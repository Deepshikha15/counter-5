(function(){

    const buttons = document.querySelectorAll('.counterBtn');
    let count = 0

    buttons.forEach(function(button){
       button.addEventListener('click',function(){
           if (button.classList.contains('addCount')){
               count = count+1;
           }else if(button.classList.contains('lowerCount')){
                count = count-1;
           }
           const counter = document.querySelector('#counter');
            console.log(counter)
            counter.textContent = count;

            if(count < 0){
                counter.style.color = 'red'
            }else if (count > 0){
                counter.style.color = 'green'
            }else{
                counter.style.color = '#333333'
            }
       })
    })
  })()