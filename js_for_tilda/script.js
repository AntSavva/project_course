// Раскрытие блоков для тильда

document.addEventListener("DOMContentLoaded", function(){
(function () {
let shmoreArr = [ '#showmore' , 'uc-showmore' ];
let anchor = true; 
let hideBtn = false; 
let hideBlk = false; 
let shmoreBtn = document.querySelectorAll('[href="'+shmoreArr[0]+'"]');
let shmoreBlock = document.querySelectorAll('.'+shmoreArr[1]);
shmoreBlock.forEach(i => i.classList.add("tabshide"));
for (let i = 0; i < shmoreBtn.length; i++) {
    shmoreBtn[i].addEventListener('click', function(event) { 
        this.classList.toggle('more-btn-active');
        if(!anchor) event.preventDefault(); 
        if(hideBtn) this.classList.add('tabshide');
        if(hideBlk) this.closest('.r').classList.add('tabshide');
        shmoreBlock.forEach(i => i.classList.toggle("tabshide"));
        window.dispatchEvent(new Event('resize'));
   });
};
})();

});


