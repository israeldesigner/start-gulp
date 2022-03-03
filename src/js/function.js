jQuery( document ).ready(function() {
 
    $(window).scroll(function(){
    $('.topnav').toggleClass('bg-white navbar-light shadow-sm scrollednav py-0', $(this).scrollTop() > 50);
    });

    $('#modal_newsletter').on('show.bs.modal', function () {
      $('.downloadzip')[0].click();
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
// (async () => {
//   const response = await axios.get('https://dados.fortaleza.ce.gov.br/api/3/action/group_list?all_fields=true')
//   console.log(response)
// })()
