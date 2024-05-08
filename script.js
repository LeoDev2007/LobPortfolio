var swiper = new Swiper(".slide-content", { //Slider
    slidesPerView: 3, 
    spaceBetween: 30,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
      0: { 
          slidesPerView: 1,
       
      },

      600: {
          slidesPerView: 2,
          
      },

      1000: {
          slidesPerView: 3,

      },
    },

  });

  //Menu-Mobile

  const menuDiv = document.getElementById('menu-mobile')
  const btn = document.getElementById('btn-menu')

  function animar(){
    menuDiv.classList.toggle('abrir')
    btn.classList.toggle('ativar')
  }





  //Validação de Formulário

  const form = document.getElementById('form-content');
  const campo = document.querySelectorAll('.required');
  const spans = document.querySelectorAll('.span-required');
  const emailVali =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  form.addEventListener( 'submit', (event) => {
      event.preventDefault()
      nameValidate();
      emailValidate();
  });

  function setError(index){
      campo[index].style.border = '3px solid #e63636'
      spans[index].style.display ='block';
  }

  function removeError(index){
      campo[index].style.border = ''
      spans[index].style.display ='none';
  }

  function nameValidate(){
      if(campo[0].value.length < 3){
          setError(0);
      }
      else{
          removeError(0)
      }
  }

  function emailValidate(){
      if(!emailVali.test(campo[1].value)){
          setError(1)
      }
      else{
          removeError(1)
      }
  }



