  function toggleNavigation(x,target) {
    var targetElement= document.getElementById(target);
    console.log(target);
    targetElement.classList.toggle("change");

    x.classList.toggle("change");
  } 