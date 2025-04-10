// footer.js
window.onload = function() {
    const HSUHeaderHTML = `
    <link rel="stylesheet" href="styles.css">

    <body>
    <div class="header">
        <a href="index.html" style="flex:2"><img src="Pictures/HKU_StudentUnion_Logo.png" alt="Hsu Logo" Width="100%" Height="100%"></a>
        <a href= articles.html>articles</a>
   <!--   <a href= gallery.html>gallery</a> -->
        <a href=join.html>join</a> 
        <a href="contact.html">contact</a> 
        </div>
        
        </body>
        `
        document.body.insertAdjacentHTML('beforebegin', HSUHeaderHTML);
    }
    
