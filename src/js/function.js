jQuery( document ).ready(function() {

    //load 
    $(window).on('load',function(){
      $('#loader-wrapper').fadeIn();
      $('#loader-wrapper').fadeOut();
    })  

    //pre loader
    $('a').on('click', function(e){
      e.preventDefault();
      const destination = $(this).attr('href');
      const loader = $('#loader-wrapper');
      loader.show();
      setTimeout(function () {
          setTimeout(function () {
                window.location.href = destination;
          }, 500);
      }, 1000);
      
      $($(this)[0].attributes).each(function() { 
        if(this.name.indexOf('data-') == 0){
          console.log($(this))
          loader.hide();
        }
        if(this.name.indexOf('href=') == 0){
          console.log($(this))
          loader.hide();
        }
      });      
    })
    
    //subit form
    const submitForm = () =>{
      $("form").on("submit", function(){
        $('#loader-wrapper').show();
      });
    }

    submitForm();    

    var current = location.pathname;
    $('.main-menu ul li a').each(function(){
        var $this = $(this);
        console.log($this.attr('href').indexOf(current));
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
 
    $(window).scroll(function(){
      $('.topnav').toggleClass('bg-white navbar-light shadow-sm scrollednav py-0', $(this).scrollTop() > 50);
    });

    $('#modal_newsletter').on('show.bs.modal', function () {
      $('.downloadzip')[0].click();
    }); 

    $(function(){
      $(window).scroll(function(){
          if ($(this).scrollTop() > 550) {
              $('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
          } else {
              $('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'})
          }
      });
      //Click event to scroll to top
      $('.scrollToTop').on('click', function(){
          $(this).css('cursor', 'pointer');
          $('html, body').animate({scrollTop : 0},600);
          return false;
      });
    });
});

AOS.init({
    duration: 700
});



(async () => {
  const response = await axios({
    url: 'https://dog.ceo/api/breeds/list/all',
    method: 'get'
  })

  console.log(response)
})()

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
delete axios.defaults.headers.common["X-Requested-With"];
axios.get('https://dados.fortaleza.ce.gov.br/api/3/action/group_list', {
  params: {
    all_fields: true
  },
    headers: {                  
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization", 
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"                   
  }  
},
)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
}); 


// document.querySelector('a').addEventListener('click', function (e) {

//   // Calling preventDefault will prevent the browser from navigating (prevents the default behavior)
//   e.preventDefault();

//   console.log(e);

//   // Our defined link, where we want to navigate to
//   const destination = this.getAttribute('href');

//   // Our loader div - we'll set to a const to reference later
//   const loader = document.querySelector('#loader-wrapper');

//   // On click, we immediately want to show our loading div.
//   // For this demo, we'll use style.display to override our CSS
//   loader.style.display = 'block';
  
//   // Set Timeout - We've defined a 1 second delay
//   setTimeout(function () {

//       // After 1 second, we want to hide the loader. Again, using style, we set to 'none'
//       loader.style.display = 'none';

//       // One additional set timeout - this allows the browser time to hide the loader. I've defined a half second
//       setTimeout(function () {

//             // This will set the URL to our href
//             window.location.href = destination;
//       }, 500);
//   }, 1000);
// }) 
// (async () => {
//   const response = await axios.get('https://dados.fortaleza.ce.gov.br/api/3/action/group_list?all_fields=true')
//   console.log(response)
// })()
