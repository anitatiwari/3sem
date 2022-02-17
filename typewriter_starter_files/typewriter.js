

 let i=0;
  let tag=document.getElementById('typewriter')
  let html=document.getElementById('typewriter').innerHTML;
 
      let attr = tag.setAttribute('data',html);
      let txt= tag.getAttribute('data');
  function typewriter(){
      if (i<=txt.length){
          document.getElementById('typewriter').innerHTML=txt.slice(0,i+1)
          i++;
          setTimeout(typewriter,170);
      }  } 
     

      typewriter();  