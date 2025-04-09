// footer.js
window.onload = function() {
    const HSUHeaderHTML = `
    <link rel="stylesheet" href="styles.css">

    <body>
    <div class="header">
        <a href="index.html" style="flex:2"><img src="Pictures/HKU_StudentUnion_Logo.png" alt="Hsu Logo" Width="100%" Height="100%"></a>
        <a target="_blank"href= articles.html>articles</a>
      <!--  <a target="_blank"href=vrienden.html>About</a> 
        <a target="_blank"href= UTAlinks.html>Calendar</a>
        <a target="_blank"href= UTAwerk.html>Become a Member</a>
        <a target="_blank"href="Muziek/DenkenaanPage/denkenaan.html">Reach out!</a> 
 -->       </div>
        
        </body>
        `
        document.body.insertAdjacentHTML('beforebegin', HSUHeaderHTML);
    }
    
