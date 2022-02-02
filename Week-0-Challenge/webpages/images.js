let query = document.querySelector('.query');
        let button = document.querySelector('.button');

        button.onclick = function() {
            let url = 'https://www.google.com/search?q=' + query.value + '&tbm=isch';
            window.open(url);
        }
 
