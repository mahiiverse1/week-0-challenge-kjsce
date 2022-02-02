let query1 = document.querySelector('.query1');
        let query2 = document.querySelector('.query2');
        let query3 = document.querySelector('.query3');
        let query4 = document.querySelector('.query4');
        let adv_button = document.querySelector('.adv_button');

        adv_button.onclick = function() {
            let url = 'https://www.google.co.in/search?as_q=' + query1.value + '&as_epq=' + query2.value + '&as_oq=' + query3.value + '&as_eq=' + query4.value + '&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&safe=images&as_filetype=&tbs=';
            window.open(url);
        }
