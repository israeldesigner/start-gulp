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



// (async () => {
//   const response = await axios({
//     url: 'https://dog.ceo/api/breeds/list/all',
//     method: 'get'
//   })

//   console.log(response)
// })()

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
delete axios.defaults.headers.common["X-Requested-With"];

axios.interceptors.request.use(function(config) {
  // Do something before request is sent
  console.log('Start Ajax Call');
  return config;
}, function(error) {
  // Do something with request error
  console.log('Error');
  return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
  // Do something with response data
  let msgLoadGrupos = document.getElementById('msgShow');
  if(msgLoadGrupos){
    msgLoadGrupos.style.display = "none";
  }
  console.log('Done with Ajax call');

  return response;
}, function(error) {
  // Do something with response error
  console.log('Error fetching the data');
  return Promise.reject(error);
});

var resultElement = document.getElementById('getResult1');

const baseUrl = 'https://dados.fortaleza.ce.gov.br/api/3/action/';
const urlDataSet = 'https://dados.fortaleza.ce.gov.br/dataset/'

const appendToDOM = (users) => {
  // const ul = document.querySelector('ul');
  let idDataTable = document.getElementById('dataBody');
  if(idDataTable){
    if(users.length > 0 ){
      var temp = '';
      users.forEach((itemData, i) => {
        var resourceFormats = itemData.resources;
        var tmpResource = '';
        for (let i = 0; i < resourceFormats.length; i++) {
          const element = resourceFormats[i];
          tmpResource += element.format;
        }
        if(i < 5){
          var date = new Date(itemData.metadata_modified);
          var newDate =  date.toISOString().substring(0, 10);
          var newDateBr = date.toLocaleString();
          temp += `<td><a href="/dataset/${itemData.name}">${itemData.title}</a></td>`;
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
            <a href="/group/${icon.name}">
              <i class="demo-icon ${icon.name}icon-fol fa-3x icon-circle bg-iconGrad-2 text-white mb-2 "></i>
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
    console.error(error);
  }
};

fetchGroups();


document.querySelector('a').addEventListener('click', function (e) {

  // Calling preventDefault will prevent the browser from navigating (prevents the default behavior)
  e.preventDefault();

  console.log(e);

  return

  // Our defined link, where we want to navigate to
  const destination = this.getAttribute('href');

  // Our loader div - we'll set to a const to reference later
  const loader = document.querySelector('#loader-wrapper');

  // On click, we immediately want to show our loading div.
  // For this demo, we'll use style.display to override our CSS
  loader.style.display = 'block';
  
  // Set Timeout - We've defined a 1 second delay
  setTimeout(function () {

      // After 1 second, we want to hide the loader. Again, using style, we set to 'none'
      loader.style.display = 'none';

      // One additional set timeout - this allows the browser time to hide the loader. I've defined a half second
      setTimeout(function () {

            // This will set the URL to our href
            window.location.href = destination;
      }, 500);
  }, 1000);
}) 
// (async () => {
//   const response = await axios.get('https://dados.fortaleza.ce.gov.br/api/3/action/group_list?all_fields=true')
//   console.log(response)
// })()
