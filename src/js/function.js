(function($){
  "use strict";
  $(document).ready(function() {

    $('.fa-facebook').removeClass('bg-blue-darken');
    $('.fa-facebook').addClass('bg-facebook');
    $('.fa-facebook').addClass('text-white');

  //load
  $(window).on('load',function(){
    $('#loader-wrapper').fadeIn();
    $('#loader-wrapper').fadeOut();
  })

  //pre loader
  // $('a').on('click', function(e){
  //   e.preventDefault();
  //   const destination = $(this).attr('href');
  //   const loader = $('#loader-wrapper');
  //   loader.show();
  //   setTimeout(function () {
  //       setTimeout(function () {
  //           window.location.href = destination;
  //           loader.hide();
  //       }, 1000);
  //   }, 1000);

  //   $($(this)[0].attributes).each(function() {
  //     if(this.name.indexOf('data-') == 0){
  //       loader.hide();
  //     }
  //   });
  // })

    //social links
    let locationTotal = location.href;
    let urlExtense = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    let base_url = window.location.origin;
    let host = window.location.host;
    let pathArray = window.location.pathname.split( '/' );
    let urlSpara = window.location.href.split('?')[0];
    console.log(pathArray);
    console.log(host);
    console.log(base_url);
    console.log(urlExtense);
    console.log(locationTotal);

    //if pra verificar url pra mudar imagem header
    if(pathArray[1] == ''){
      $('.linkPmf-nav').show();
      $('.linkLogo-principal').hide();
    }else{
      $('.linkPmf-nav').hide();
      $('.linkLogo-principal').show();;
    }

   let encodeHrf = encodeURIComponent(window.location.href);
   let encodeUri = encodeURIComponent(document.title);
   let urlTelegram =  `https://t.me/share/url?url='+${encodeHrf}+'&text='+${encodeUri}`

    let conteudo = encodeURIComponent(document.title + " " + window.location.href);
    $('#btnSocialwhatsapp').attr( 'href', "https://api.whatsapp.com/send?text=" + conteudo);
    $('#btnSocialTelegram').attr( 'href', urlTelegram);

    $('.colorContrast').click(function (event) {
      event.preventDefault();
      if($('body').hasClass('contrast')){
        $('.linkPmf-nav img').attr('src', '/base/assets/images/logo-branca.png');
      }else{
        $('.linkPmf-nav img').attr('src', '/base/assets/images/logo.png');
      }
    })



    const submitForm = () =>{
      $("form").on("submit", function(){
        $('#loader-wrapper').show();
      });
    }
    submitForm();
      // header menu
      $("ul li ul").parent("li").addClass("menu-item-has-children");

      // dropdown menu
      $('ul').parent().on('hover', function() {
          var menu = $(this).find("ul");
          var menupos = $(menu).offset();
          if (menupos.left + menu.width() > $(window).width()) {
              var newpos = -$(menu).width();
              menu.css({ left: newpos });
          }
      });

      // mobile menu responsive
      $(document).on('click','.header-bar',function(){
          $(".header-bar").toggleClass("close");
          $(".mobile-menu").toggleClass("open");
      });

      //mobile dropdown menu display
      $('.menu-item-has-children>a').on('click', function(e){
          event.preventDefault();
      });
      $('.mobile-menu-area ul li a, .shop-menu li a').on('click', function(e) {
          var element = $(this).parent('li');
          if (element.hasClass('open')) {
              element.removeClass('open');
              element.find('li').removeClass('open');
              element.find('ul').slideUp(1000,"swing");
          }
          else {
              element.addClass('open');
              element.children('ul').slideDown(1000,"swing");
              element.siblings('li').children('ul').slideUp(1000,"swing");
              element.siblings('li').removeClass('open');
              element.siblings('li').find('li').removeClass('open');
              element.siblings('li').find('ul').slideUp(1000,"swing");
          }
      });
      $(".search i, .search-close").on("click", function(){
          $(".search-area").toggleClass("open");
      });
      $(".header-right .bar-area span").on("click", function(){
          $(".sidemenubar, .bar-area").toggleClass("open");
      });
      $(".sidemenubar").on("click", function(){
          $(".sidemenubar, .bar-area").toggleClass("open");
      });

      //menu fixo
      var fixed_top = $(".header-area");
      $(window).on('scroll', function(){
          if( $(this).scrollTop() > 100 ){
              fixed_top.addClass("animated fadeInDown menu-fixed");
          }
          else{
              fixed_top.removeClass("animated fadeInDown menu-fixed");
          }
      });

      // scroll seta rolagem
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

      // // banner slider section
      // var swiper = new Swiper('.banner-slider', {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //     autoplay: {
      //         delay: 5000,
      //         disableOnInteraction: false,
      //     },
      //     pagination: {
      //         el: '.banner-pagination',
      //         clickable: true,
      //     },
      //     loop: true,
      // });

      //Testimonial Slider
      // var swiper = new Swiper('.testimonial-slider', {
      //     slidesPerView: 3,
      //     spaceBetween: 0,
      //     autoplay: {
      //         delay: 2000,
      //         disableOnInteraction: false,
      //     },
      //     breakpoints: {
      //         1024: {
      //             slidesPerView: 2,
      //         },
      //         767: {
      //             slidesPerView: 1,
      //         },
      //     },
      //     loop: true,
      // });

      // post-thumb-slider section
      // var swiper = new Swiper('.post-thumb-slider', {
      //     slidesPerView: 1,
      //     autoplay: {
      //         delay: 5000,
      //         disableOnInteraction: false,
      //     },
      //     navigation: {
      //         nextEl: '.post-thumb-slider-next',
      //         prevEl: '.post-thumb-slider-prev',
      //     },
      //     loop: true,
      // });

      // // countdown or date & time
      // $('#countdown').countdown({
      //     date: '10/22/2020 17:00:00',
      //     offset: +2,
      //     day: 'Day',
      //     days: 'Days'
      // });

      // counter up
      // $('.counter').counterUp({
      //     delay: 10,
      //     time: 2000
      // });

      // accordion start here
      // $('.accordion-item .active').slideDown();
      // $('.accordion-list').click(function (e){
      //     if($(this).next('.accordion-answer').css('display') != 'block'){
      //         $('.accordion-item .active').slideUp(500).removeClass('active');
      //         $('.accordion-list').removeClass('in');
      //         $(this).next('.accordion-answer').addClass('active').slideDown(500);
      //         $(this).addClass('in');
      //     }else{
      //         $('.accordion-item .active').slideUp(500).removeClass('active');
      //         $(this).removeClass('in');
      //     }
      // });

      // shop cart + - start here
      // var CartPlusMinus = $('.cart-plus-minus');
      // CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
      // CartPlusMinus.append('<div class="inc qtybutton">+</div>');
      // $(".qtybutton").on("click", function() {
      //     var $button = $(this);
      //     var oldValue = $button.parent().find("input").val();
      //     if ($button.text() === "+") {
      //         var newVal = parseFloat(oldValue) + 1;
      //     } else {
      //         if (oldValue > 0) {
      //             var newVal = parseFloat(oldValue) - 1;
      //         } else {
      //             newVal = 1;
      //         }
      //     }
      //     $button.parent().find("input").val(newVal);
      // });

      // //Isotope
      // $(window).on('load',function() {
      //     var $grid = $('.grid').isotope({
      //         itemSelector: '.port-item',
      //         masonry: {
      //             columnWidth: 0
      //         }
      //     });
      //     var filterFns = {
      //         numberGreaterThan50: function() {
      //             var number = $(this).find('.number').text();
      //             return parseInt( number, 10 ) > 50;
      //         },
      //         ium: function() {
      //             var name = $(this).find('.name').text();
      //             return name.match( /ium$/ );
      //         }
      //     };
      //     $('.port-filter').on( 'click', 'li', function() {
      //         var filterValue = $( this ).attr('data-filter');
      //         filterValue = filterFns[ filterValue ] || filterValue;
      //         $grid.isotope({ filter: filterValue });
      //     });
      //     $('.port-filter').each( function( i, buttonGroup ) {
      //         var $buttonGroup = $( buttonGroup );
      //             $buttonGroup.on( 'click', 'li', function() {
      //             $buttonGroup.find('.active').removeClass('active');
      //             $( this ).addClass('active');
      //         });
      //     });

      //     // skill bar or progress bar
      //     var skillLevel1 = jQuery('.first').data('percent');
      //     $('.first.circle').circleProgress({
      //         value:  '0.' + skillLevel1,
      //         fill: {gradient: ['#2dca73']}
      //     }).on('circle-animation-progress', function(event, progress) {
      //         $(this).find('strong').html(Math.round(skillLevel1 * progress) + '<i>%</i>');
      //     });
      //     //Circle ProgressBarTwo
      //     var skillLevel2 = jQuery('.second').data('percent');
      //     $('.second.circle').circleProgress({
      //         value:  '0.' + skillLevel2,
      //         fill: {gradient: ['#ff7d51']}
      //     }).on('circle-animation-progress', function(event, progress) {
      //         $(this).find('strong').html(Math.round(skillLevel2 * progress) + '<i>%</i>');
      //     });
      //     //Circle ProgressBarThree
      //     var skillLevel3 = jQuery('.third').data('percent');
      //     $('.third.circle').circleProgress({
      //         value:  '0.' + skillLevel3,
      //         fill: {gradient: ['#ffc212']}
      //     }).on('circle-animation-progress', function(event, progress) {
      //         $(this).find('strong').html(Math.round(skillLevel3 * progress) + '<i>%</i>');
      //     });
      // });

      // service single section start here
      // $(function(){
      //     var tabWrapper = $('.service-single .section-wrapper'),
      //     tabMnu = tabWrapper.find('.tab-menu  li'),
      //     tabContent = tabWrapper.find('.tab-cont > .tab-pane');
      //     tabContent.not(':first-child').hide();
      //     tabMnu.each(function(i){
      //         $(this).attr('data-tab','tab'+i);
      //     });
      //     tabContent.each(function(i){
      //         $(this).attr('data-tab','tab'+i);
      //     });

      //     tabMnu.on('click', function(){
      //         var tabData = $(this).data('tab');
      //         tabWrapper.find(tabContent).hide();
      //         tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show();
      //     });

      //     $('.tab-menu > li').on('click', function(){
      //         var before = $('.tab-menu li.active');
      //         before.removeClass('active');
      //         $(this).addClass('active');
      //     });
      // });

      // product view mode change js
      // $(function() {
      //     $('.product-view-mode').on('click', 'a', function (e) {
      //         e.preventDefault();
      //         var shopProductWrap = $('.shop-product-wrap');
      //         var viewMode = $(this).data('target');
      //         $('.product-view-mode a').removeClass('active');
      //         $(this).addClass('active');
      //         shopProductWrap.removeClass('grid list').addClass(viewMode);
      //     });
      // });


      // model option start here
      // $(function() {
      //     $('.view-modal').on('click', function () {
      //         $('.modal').addClass('show');
      //     });
      //     $('.close').on('click', function () {
      //         $('.modal').removeClass('show');
      //     });
      // });

      // $(function() {
      //     var galleryThumbs = new Swiper('.pro-single-thumbs', {
      //         spaceBetween: 10,
      //         slidesPerView: 3,
      //         loop: true,
      //         freeMode: true,
      //         loopedSlides: 5,
      //         watchSlidesVisibility: true,
      //         watchSlidesProgress: true,
      //         navigation: {
      //         nextEl: '.pro-single-next',
      //         prevEl: '.pro-single-prev',
      //         },
      //     });
      //     var galleryTop = new Swiper('.pro-single-top', {
      //         spaceBetween: 10,
      //         loop:true,
      //         loopedSlides: 5,
      //         thumbs: {
      //             swiper: galleryThumbs,
      //         },
      //     });
      // });

      //Review Tabs
      // $('ul.review-nav').on('click', 'li', function (e) {
      //     e.preventDefault();
      //     var reviewContent = $('.review-content');
      //     var viewRev = $(this).data('target');
      //     $('ul.review-nav li').removeClass('active');
      //     $(this).addClass('active');
      //     reviewContent.removeClass('review-content-show description-show').addClass(viewRev);
      // });

      // wow animation

      // $('#altocontraste').on('click', function(){
      //   $('#header').toggleClass('contrast');
      // })

      // const testUl = $('.organClass .pagination-wrapper ul');
      // const testList = $('.organClass .pagination-wrapper ul li a');
      // const testListLen = $('.organClass .pagination-wrapper ul li a').length;

      // const checkItens = () =>{
      //   testList.each(function(i, e){
      //     const novaUrl = `${urlSpara}?page=${i + 1}`;
      //     $(e).attr('href',novaUrl)
      //   })
      // }

      // checkItens ()

                 //contraste acessbilidade
      var Contrast = {
                  storage: 'contrastState',
                  cssClass: 'contrast',
                  currentState: null,
                  check: checkContrast,
                  getState: getContrastState,
                  setState: setContrastState,
                  toogle: toogleContrast,
                  updateView: updateViewContrast
            };

            window.toggleContrast = function () { Contrast.toogle(); };

            Contrast.check();

            function checkContrast() {
                  this.updateView();
            }

            function getContrastState() {
                  return localStorage.getItem(this.storage) === 'true';
            }

            function setContrastState(state) {
                  localStorage.setItem(this.storage, '' + state);
                  this.currentState = state;
                  this.updateView();
            }

            function updateViewContrast() {
                  var body = document.body;

                  if (this.currentState === null)
                  this.currentState = this.getState();

                  if (this.currentState)
                  body.classList.add(this.cssClass);
                  else
                  body.classList.remove(this.cssClass);
            }

            function toogleContrast() {
                  this.setState(!this.currentState);
            }
            //constraste

              // font
              $('.sizeMais').click(function (e) {
                e.preventDefault();
                var size = $('*').css('font-size');
                size = size.replace('px', '');
                size = parseInt(size) + 2;

                $("*").animate({ 'font-size': size + 'px' });
                return false;
              })

              $('.sizeMenos').click(function (e) {
                    e.preventDefault();
                    var size = $('*').css('font-size');
                    size = size.replace('px', '');
                    size = parseInt(size) - 2;

                    $('*').animate({ 'font-size': size + 'px' });
                    return false;
              })

              $('.sizePadrao').click(function (e) {
                    e.preventDefault();
                    var size = $('*').css('font-size');
                    size = size.replace('px', '');
                    $('*').animate({ 'font-size': 16 + 'px' });
                    return false;
              })

      // new window.VLibras.Widget('https://vlibras.gov.br/app');



  });
}(jQuery));


axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
delete axios.defaults.headers.common["X-Requested-With"];

var resultElement = document.getElementById('getResult1');

axios.interceptors.request.use(function(config) {
return config;
}, function(error) {
return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
// Do something with response data
let msgLoadGrupos = document.getElementById('msgShow');
if(msgLoadGrupos){
  msgLoadGrupos.style.display = "none";
}
return response;
}, function(error) {

return Promise.reject(error);
});


const locationStrong = 'https://dados.fortaleza.ce.gov.br'
const baseUrl = `${locationStrong}/api/3/action/`;
const urlDataSet = `${locationStrong}/dataset/`;

const appendToDOM = (users) => {
// const ul = document.querySelector('ul');
let idDataTable = document.getElementById('dataBody');
if(idDataTable){
  if(users.length > 0 ){
    var temp = '';
    var tmpArray = [];
    var teste = '';

    console.log(users);

    users.forEach((itemData, i) => {
      var resourceFormats = itemData.resources;

      var tmpResource = '';
      for (let i = 0; i < resourceFormats.length; i++) {
        const element = resourceFormats[i];   
        if(i < 1) tmpResource += `${element.format}`;
      }

      if(i < 5 ){
        var date = new Date(itemData.metadata_modified);
        var newDate =  date.toISOString().substring(0, 10);
        var newDateBr = date.toLocaleString();
        temp += `<td><a href="/dataset/${itemData.name}"><b>${itemData.title}</b></a></td>`;
        temp += "<td>" + newDateBr + "</td>";
        temp += "<td>" + itemData.organization.title + "</td>";
        temp += "<td>" + tmpResource + "</td></tr>";
      }

    });
    idDataTable.innerHTML = temp;
  }
}
};

const appendIconDOM = (icons) => {
// const ul = document.querySelector('ul');
let iconDataList = document.getElementById('iconListas');
if(iconDataList){
  if(icons.length > 0 ){
    var temp = '';
    icons.forEach((icon) => {
      temp += `
        <div class='col-lg-2 col-sm-6 col-6 text-center divGrupo-icon'>
          <a href="/dataset/?groups=${icon.name}">
            <!--<i class="demo-icon ${icon.name}icon-fol fa-3x icon-circle bg-yellow text-black mb-2 "></i>-->
            <img src="${icon.image_display_url}" alt="${icon.name}"  width="80" />
            <p>${icon.title}</p>
            <b>${icon.package_count}</b>
          </a>
        </div>
      `;
    });
    iconDataList.innerHTML = temp;
  }
}
};


const modifiedMetada = () =>{
axios.get(`${baseUrl}package_search?q=&sort=metadata_modified+desc`, {
  params: {
  },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"
  }
})
.then(function (response) {
  const resultData = response.data.result.results;
  appendToDOM(resultData);
})
.catch(function (error) {
  console.log(error);
})
}

modifiedMetada()

async function fetchGroups() {

try{

  const response = await axios.get(`${baseUrl}group_list`,{
    params: {
      all_fields: true
    },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        "Content-Type": "application/json;charset=UTF-8"
    }
  })
  .then(response => {
      const data = response.data.result;
      appendIconDOM(data);
  })

}catch{
  // console.error(error);
}
};

fetchGroups();

