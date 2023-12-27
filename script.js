let panelbg = document.getElementById('panelbg');
let navpanel = document.getElementById('navbarpanel');

let navbtns = document.querySelectorAll("#panel a");

navbtns.forEach(ele => {
    ele.addEventListener('click',()=>{
        panelclose();
    });
});

function panelclose(){
    panelbg.style.display = "none";
    navpanel.style.display = 'none';
}

function panelopen(){
    panelbg.style.display = 'block';
    navpanel.style.display = 'flex';
}