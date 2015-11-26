  var afterSubmitHeadline = false;
  var afterSubmitFooter = false;
  //Документация: http://api.jquery.com/jquery.ajax/
  $(".form__deadline").submit(function(event) {
    afterSubmitHeadline = true;
    if($('.mail').val() != '' && $('.name').val() != '' && $('.tel').val() != ''){
        var patternTel = /^[1-9][0-9]{3,15}$/;
        var patternMail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(patternMail.test($('.mail').val()) && patternTel.test($('.tel').val())){
          $.ajax({
            type: "GET",
            url: "mail.php",
            data: $(".form").serialize()
          }).done(function() {
            alert("Thank you. Message sent.");
          });
          return false;
      } else {
        event.preventDefault();
      }
    } else {
        event.preventDefault();
    }
     if($('.input-mail').val() != '') {
         var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
         if(pattern.test($('.input-mail').val())){
             $('.input-mail').css({'border' : '3px solid #32C24D', 'background':'#fff'});
              $('.valid_mail_footer').text('');
         } else {
             $('.input-mail').css({
               'border' : '3px solid #F60000',
               'background':'#F6E5E5'
             });
             $('.valid_mail').text('Invalid mail');
         }
     } else {
             $('.input-mail').css({
               'border' : '3px solid #F60000',
               'background':'#F6E5E5'
             });
            $('.valid_mail').text('This field should not be empty');
     }


    if($('.input-tel').val() != '') {
        var pattern = /^[1-9][0-9]{3,15}$/;
        if(pattern.test($('.input-tel').val())){
            $('.input-tel').css({'border' : '3px solid #32C24D', 'background':'#fff'});
             $('.valid_tel').text('');
        } else {
            $('.input-tel').css({
             'border' : '3px solid #F60000',
             'background':'#F6E5E5'
            });
            $('.valid_tel').text('Invalid number');
        }
    } else {
           $('.input-tel').css({
             'border' : '3px solid #F60000',
             'background':'#F6E5E5'
           });
         $('.valid_tel').text("This field should not be empty");
    }

    
      if($('.input-name').val() != '') {
             $('.input-name').css({'border' : '3px solid #32C24D', 'background':'#fff'});
             $('.valid_name').text('');
      } 
      else {
            $('.input-name').css({
              'border' : '3px solid #F60000',
              'background':'#F6E5E5'
            });
          $('.valid_name').text("This field should not be empty");
     }
  });


  $(".form_footer").submit(function(event) {
    afterSubmitFooter = true;
    if($('.mail_footer').val() != '' && $('.name_footer').val() != '' && $('.tel_footer').val() != ''){
        var patternTel = /^[0-9]{3,15}$/;
        var patternMail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(patternMail.test($('.mail_footer').val()) && patternTel.test($('.tel_footer').val())){
          $.ajax({
            type: "GET",
            url: "mail_footer.php",
            data: $(".form").serialize()
          }).done(function() {
            window.alert("Thank you. Message sent.");
          });
          return false;
      } else {
        event.preventDefault();
      }
    } else {
        event.preventDefault();
    }

         if($('.input-mail_footer').val() != '') {
             var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
             if(pattern.test($('.input-mail_footer').val())){
                 $('.input-mail_footer').css({'border' : '3px solid #32C24D', 'background':'#fff'});
                 $('.valid_mail_footer').text('');
             } else {
                 $('.input-mail_footer').css({
                   'border' : '3px solid #F60000',
                   'background':'#F6E5E5'
                 });
                 $('.valid_mail_footer').text('Invalid mail');
             }
         } else {
                 $('.input-mail_footer').css({
                   'border' : '3px solid #F60000',
                   'background':'#F6E5E5'
                 });
                $('.valid_mail_footer').text('This field should not be empty');
         }


        if($('.input-tel_footer').val() != '') {
            var pattern = /^[1-9][0-9]{3,15}$/;
            if(pattern.test($('.input-tel_footer').val())){
                $('.input-tel_footer').css({'border' : '3px solid #32C24D', 'background':'#fff'});
                $('.valid_tel_footer').text('');
            } else {
                $('.input-tel_footer').css({
                 'border' : '3px solid #F60000',
                 'background':'#F6E5E5'
                });
                $('.valid_tel_footer').text('Invalid number');
            }
        } else {
               $('.input-tel_footer').css({
                 'border' : '3px solid #F60000',
                 'background':'#F6E5E5'
               });
             $('.valid_tel_footer').text("This field should not be empty");
        }

         if($('.input-name_footer').val() != ''){
                $('.input-name_footer').css({'border' : '3px solid #32C24D', 'background':'#fff'});
                $('.valid_name_footer').text('');
         } 
         else {
               $('.input-name_footer').css({
                 'border' : '3px solid #F60000',
                 'background':'#F6E5E5'
               });
             $('.valid_name_footer').text("This field should not be empty");
        }
  });




   $('.input-mail').blur(function() {

    if(afterSubmitHeadline){
       if($('.input-mail').val() != '') {
           var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
           if(pattern.test($('.input-mail').val())){
               $('.input-mail').css({'border' : '3px solid #32C24D', 'background':'#fff'});
                $('.valid_mail').text('');
           } else {
               $('.input-mail').css({
                 'border' : '3px solid #F60000',
                 'background':'#F6E5E5'
               });
               $('.valid_mail').text('Invalid mail');
           }
       } else {
               $(this).css({
                 'border' : '3px solid #F60000',
                 'background':'#F6E5E5'
               });
              $('.valid_mail').text('This field should not be empty');
       }
     }
   });
  $('.input-tel').blur(function() {
      if(afterSubmitHeadline){
      if($(this).val() != '') {
          var pattern = /^[1-9][0-9]{3,15}$/;
          if(pattern.test($(this).val())){
              $(this).css({'border' : '3px solid #32C24D', 'background':'#fff'});
               $('.valid_tel').text('');
          } else {
              $(this).css({
               'border' : '3px solid #F60000',
               'background':'#F6E5E5'
              });
              $('.valid_tel').text('Invalid number');
          }
      } else {
             $(this).css({
               'border' : '3px solid #F60000',
               'background':'#F6E5E5'
             });
           $('.valid_tel').text("This field should not be empty");
      }
    }
  });
   $('.input-name').blur(function() {
    if(afterSubmitHeadline){
        if($(this).val() != '') {
               $(this).css({'border' : '3px solid #32C24D', 'background':'#fff'});
               $('.valid_name').text('');
        } 
        else {
              $(this).css({
                'border' : '3px solid #F60000',
                'background':'#F6E5E5'
              });
            $('.valid_name').text("This field should not be empty");
       }
     }
   });




          $('.input-mail_footer').blur(function() {
            if(afterSubmitFooter){
              if($(this).val() != '') {
                  var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                  if(pattern.test($(this).val())){
                      $(this).css({'border' : '3px solid #32C24D', 'background':'#fff'});
                       $('.valid_mail_footer').text('');
                  } else {
                      $(this).css({
                        'border' : '3px solid #F60000',
                        'background':'#F6E5E5'
                      });
                      $('.valid_mail_footer').text('Invalid mail');
                  }
              } else {
                      $(this).css({
                        'border' : '3px solid #F60000',
                        'background':'#F6E5E5'
                      });
                     $('.valid_mail_footer').text('This field should not be empty');
              }
            }
          });
         $('.input-tel_footer').blur(function() {
          if(afterSubmitFooter){
             if($(this).val() != '') {
                 var pattern = /^[1-9][0-9]{3,15}$/;
                 if(pattern.test($(this).val())){
                     $(this).css({'border' : '3px solid #32C24D', 'background':'#fff'});
                      $('.valid_tel_footer').text('');
                 } else {
                     $(this).css({
                      'border' : '3px solid #F60000',
                      'background':'#F6E5E5'
                     });
                     $('.valid_tel_footer').text('Invalid number');
                 }
             } else {
                    $(this).css({
                      'border' : '3px solid #F60000',
                      'background':'#F6E5E5'
                    });
                  $('.valid_tel_footer').text("This field should not be empty");
             }
           }
         });
          $('.input-name_footer').blur(function() {
            if(afterSubmitFooter){
               if($(this).val() != ''){
                      $(this).css({'border' : '3px solid #32C24D', 'background':'#fff'});
                      $('.valid_name_footer').text('');
               } 
               else {
                     $(this).css({
                       'border' : '3px solid #F60000',
                       'background':'#F6E5E5'
                     });
                   $('.valid_name_footer').text("This field should not be empty");
              }
            }
          });