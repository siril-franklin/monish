document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
        
            const formData = new FormData(form);
            const item = {
                itemName: formData.get('itemName'),
                category: formData.get('category'),
                description: formData.get('description'),
                location: formData.get('location'),
                date: formData.get('lostDate'),
                contactName: formData.get('contactName'),
                contactInfo: formData.get('contactInfo'),
                notes: formData.get('notes'),
                type: 'lost'
            };
            
            
            let lostItems = JSON.parse(localStorage.getItem('lostItems') || '[]');
            lostItems.push(item);
            localStorage.setItem('lostItems', JSON.stringify(lostItems));
            
            alert('Lost item reported successfully!');
            form.reset();
            showItems();
        });
    }
    
    function showItems() {
        const container = document.getElementById('lost-items');
        if(container) {
            const items = JSON.parse(localStorage.getItem('lostItems') || '[]');
            container.innerHTML = items.map(item => `
                <div style="border:1px solid #ccc; padding:10px; margin:10px;">
                    <h3>${item.itemName}</h3>
                    <p><strong>Category:</strong> ${item.category}</p>
                    <p><strong>Description:</strong> ${item.description}</p>
                    <p><strong>Location:</strong> ${item.location}</p>
                    <p><strong>Contact:</strong> ${item.contactName} - ${item.contactInfo}</p>
                </div>
            `).join('');
        }
    }
    
    showItems(); 
    
});
