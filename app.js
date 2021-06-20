const btn = document.querySelector("#runBtn");
const resetBtn = document.querySelector("#resetBtn");
const p = document.querySelector(".warn");
const bar = document.querySelector("#bar");
let i = 0 ;
btn.addEventListener('click',()=>{
    if(i == 0){
        i = 1;       
        let width = 1;
        let id = setInterval(run,5);
        function run(){
            if(width>=100){
                clearInterval(id);
            } else {
                width++;
                bar.style.width = `${width}%`;
                console.log(width);
            }
        }
    } else {
        document.querySelector(".warn").textContent = "The task is completed!";
        p.classList.add("show");
        p.classList.remove("hide");
        setTimeout(()=>{
            p.classList.add("hide");
            p.classList.remove("show");
        },3000);

    }
});
resetBtn.addEventListener('click',()=>{
    i = 0;
    bar.style.width = '1%';
});
