    /*
        PLZ CHECK OUT THE SAMPLE FILE!!!!! the js is pretty heavily css reliant so it wont work well without. HTML is pretty simple you can just read the HTML notes and see the class names and itll work out 
    */

    /*
    CSS NOTES

    (optional) add borders on .dropdown, .dropdown-tail, .btn if you want to see the container size
    (optional) any changes other than height to dropdown:hover &  .dropdown:hover .dropdown-tail //note: this is specific because this effect only applies on dropdown hover
    all top,left, components are just to control the position, you can move the elements around andit wont impact the code. Colours as well. add a border radius if you want elements rounded etc etc for other stuff just look up a css tut or something idk
    */

    /*
    HTML NOTES
    honestly pretty clear, just create a dropdown clas and insert button classes with class btn, and optional tail with reorder button (u can put elsewhere if you want as long as its in the dropdown class)
    */
    //make sure to import sortable JS in ur html or this wont work
    
    // this script 
    document.querySelectorAll('.dropdown').forEach(dropdown => {
    const buttonCount = dropdown.querySelectorAll('.btn').length;
    dropdown.style.setProperty('--btn-count', buttonCount);

    const reorderBtn = dropdown.querySelector('.reorder-btn');
    const sortable = new Sortable(dropdown, {
        animation: 150,
        disabled: true,
    });

    reorderBtn.addEventListener('click', function(e) {
        sortable.option("disabled", !sortable.option("disabled"));
        reorderBtn.classList.toggle('highlighted');
        e.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
        sortable.option("disabled", true);
        reorderBtn.classList.remove('highlighted');
        }
    });
    });
