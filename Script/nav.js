
const navHtml = '<nav>' + 
                '<div id=\"navDiv\">' + 
                '<ul>' + 
                '<li><a href=\"index.html\">Home</a></li>' + 
                '<li><a href=\"page2.html\">Page 2</a></li>' + 
                '<li><a href=\"page3.html\">Page 3</a></li>' + 
                '</ul>' + 
                '</div>' + 
                '</nav>';

const body = document.getElementsByTagName('body');

body[0].insertAdjacentHTML('afterbegin', navHtml);

            
            
            
        
