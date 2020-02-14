
// Get input el
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get val of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get names ul
    let ul = document.getElementById('names');
    
    // Get items
    let li = ul.querySelectorAll('li.list-group-item');

    // Loop through items li
    for(let i = 0;i < li.length;i++) {
        let a = li[i].getElementsByTagName('a')[0];
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}