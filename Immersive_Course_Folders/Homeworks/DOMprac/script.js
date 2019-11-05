document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants
  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });


  // adding SF places as list items
  const addPlace = (evnt) => {
    evnt.preventDefault();

    const inp = document.querySelector('.favorite-input');
    const inpVal = inp.value;
    inp.value = "";

    const li = document.createElement('li');
    li.textContent = inpVal;

    const ul = document.getElementById("sf-places");
    ul.appendChild(li);
  }; 

  const submitBtn = document.querySelector(".favorite-submit");
  submitBtn.addEventListener("click", addPlace);
  

  // adding new photos
   const handleClLogic = (evnt) => {
    const wntCont = document.querySelector('.photo-form-container');

     if (wntCont.className === "photo-form-container") {
        wntCont.className = "photo-form-container hidden";
     } else {
       wntCont.className = "photo-form-container";
     }
  };
  
  const phoBtn = document.querySelector('.photo-show-button');
  phoBtn.addEventListener('click', handleClLogic);

  const addPicToLi = (evt) => {
    evt.preventDefault();

    const img = document.createElement('img');
    img.src = document.querySelector('.photo-url-input').value;
    document.querySelector('.photo-url-input').value = "";

    const li = document.createElement('li');
    li.appendChild(img);
    
    const wntUl = document.querySelector('.dog-photos');
    wntUl.appendChild(li);
  };

  const phtSubBtn = document.querySelector('.photo-url-submit');
  phtSubBtn.addEventListener('click', addPicToLi);
});
