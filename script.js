const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
let currentPage = 0;

function turnPage(direction) {
    if (direction === 'forward' && currentPage < totalPages - 1) {
        pages[currentPage].classList.add('flipped');
        currentPage++;
        updatePageVisibility1();
    } else if (direction === 'backward' && currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('flipped');
        updatePageVisibility();
    }
    //Solve Map Visibility on prev page
if(currentPage==2)
    {
        var image=document.getElementById("a")
        image.style.display="none";
    }
else{
    var image=document.getElementById("a")
    image.style.display="inline-block";
}  
     
}
 function updatePageVisibility() {
     pages.forEach((page, index) => {
         page.style.zIndex = index < currentPage ? index : totalPages - index;
         page.classList.toggle('flipped', index < currentPage);
     });
 }
  function updatePageVisibility1() {
      pages.forEach((page, index) => {
        page.style.zIndex = index+1 < currentPage ? index : totalPages - index;
          page.classList.toggle('flipped', index < currentPage);
      });
  }

book.addEventListener('click', (e) => {
    const rect = book.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    turnPage(clickX > rect.width / 2 ? 'forward' : 'backward');
});

updatePageVisibility();   