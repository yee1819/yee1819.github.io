
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const jsonUrl = isMobile ? '../json/m_top_img.json' : '../json/top_img.json';

fetch(jsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('网络响应异常');
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
    console.error('获取数据时发生问题:', error);
  });

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



///以下是根据屏幕变化修改导航栏的 宽度


var screenWidth;
var screenHeight ;
  function updateScreenSize() {
    screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // document.getElementById('screenSizeOutput').textContent = `Screen Width: ${screenWidth}px, Screen Height: ${screenHeight}px`;
  }

  // Initial call to update screen size information
  updateScreenSize();

  // Event listener for window resize event
  window.addEventListener('resize', updateScreenSize);

  function updateScrollDistance() {
    const scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
    const kirari_box_nav = document.querySelectorAll('.kirari-nav-box');

  kirari_box_nav.forEach(function(element) {
    if (scrollDistance < screenHeight*7/10) {
      element.style.maxWidth = `${screenWidth}px`;
    } else {
      element.style.maxWidth = '1170px';
    }
  });
  }

  // Initial call to update scroll distance
  updateScrollDistance();

  // Event listener for scroll event
  window.addEventListener('scroll', updateScrollDistance);