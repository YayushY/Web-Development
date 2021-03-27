let task = document.querySelector('input');
let list = document.querySelector('ul');

let btn = document.querySelector('.inp_btn')

//<i class="far fa-check-square"></i>

btn.addEventListener('click', function(){
    let li = document.createElement('li');
    let btn_del = document.createElement('button');
    let btn_imp = document.createElement('button');
    btn_del.classList.add('btn_del');
    btn_imp.classList.add('btn_imp');

    btn_del.innerText = "Done";
    btn_imp.innerText = "Mark As Imp";

    btn_imp.onclick = function(){
        li.classList.toggle('unmark');
    }

    // li.classList.add('task');
    let col = pickColor();
    //li.style.backgroundColor = col;
    let val = task.value;
    li.innerHTML = '<i class="bi bi-check"></i>' + val;
    
    list.appendChild(li);
    list.append(btn_del);
    list.append(btn_imp);

    btn_del.onclick = function(){
        list.removeChild(li);
        list.removeChild(btn_imp);
        list.removeChild(btn_del);
    }
   
    task.value = "";
})

function pickColor() {       
    // Array containing colors
    let colors = [
        '#fcd5ce', '#e9c46a', '#f1faee','#ade8f4', '#e6ccb2','#ffafcc','#f9dcc4','#90be6d','#74c69d','#aed9e0','#6b705c','#ffea00','#e7c6ff'
    ];
      
    // selecting random color
    let random_color = colors[Math.floor(
            Math.random() * colors.length)];
    return random_color;
} 


