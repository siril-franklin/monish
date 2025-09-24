
DELETE FUNCTION TO REMOVE THE DATA IN LOST LIST 

 function deleteItem(itemId) {
        if(confirm('Are you sure you want to delete this item?')) {
            let lostItems = JSON.parse(localStorage.getItem('lostItems') || '[]');
            lostItems = lostItems.filter(item => item.id !== itemId);
            localStorage.setItem('lostItems', JSON.stringify(lostItems));
            showItems();
        }


    DELETE FUNCTION TO REMOVE THE DATA IN FOUND LIST         

    function deleteItem(itemId) {
        if(confirm('Are you sure you want to delete this item?')) {
            let foundItems = JSON.parse(localStorage.getItem('foundItems') || '[]');
            foundItems = foundItems.filter(item => item.id !== itemId);
            localStorage.setItem('foundItems', JSON.stringify(foundItems));
            showItems();
        }