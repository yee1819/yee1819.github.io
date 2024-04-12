
fetch('../json/output.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    var img_length_top = data.links.length;
    var random_img_top =  getRandomInt(0,img_length_top);
    var img_top = document.getElementById("page-header");
    var imgDivTopUrl = data.links[random_img_top]; 
    
    img_top.style.backgroundImage = 'url(' + imgDivTopUrl + ')';

    console.log(imgDivTopUrl);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

  function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}