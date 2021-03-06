module.exports= function(app){ 
  app.factory('GlobalVariable', function(){
    return {
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      hideModal: function (selector) {
        $(selector).modal('hide')
      },
      showModal: function (selector) {
        $(selector).modal('show')
      }  
    }
  });
}