/* function setMenuType(){ */


   
    

    function toggleFields(boxId,checkboxId) {
        var checkbox = document.getElementById(checkboxId);
        var box = document.getElementById(boxId);
        checkbox.onclick = function() {
          console.log(this);
          if (this.checked) {
            box.style['display'] = 'block';
          } else {
            box.style['display'] = 'none';
          }
        };
      }
      toggleFields("steak","beef_menu");
      toggleFields("chicken","chicken_menu");
      toggleFields("vegetarian","vegetarian_menu");
      toggleFields("seafood","seafood_menu");
