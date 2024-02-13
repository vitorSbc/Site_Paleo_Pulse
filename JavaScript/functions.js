$(function(){

    var quantD = document.querySelectorAll('.conteudoNoticia');

    document.getElementById('iconeMenuMobile').addEventListener('click', function(){
        $('#menuMobile').animate({
            height: 240
        });
    })
    document.getElementById('menuMobile').addEventListener("mouseleave",function(){
        setTimeout(function(){
            $('#menuMobile').animate({
                height: 0
            });
        }, 9000)
    })

    $('.menu #novidades').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#noticias').offset().top}, 2000)
        })

    $('#menuMobile #novidades').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#noticias').offset().top}, 2000)
        })    


    $("#noticias a").click(function(e){
        var noticia = $(this).data('noticia');
        $('#' + noticia).fadeIn();
        $('.blur-overlay').fadeIn();
        
    })
    var blur = $('.blur-overlay');
    $("#ConteudoDestaque a").click(function(e){
        var noticia = $(this).data('noticia');
        var noticiaSelecionada = $('#' + noticia);
        var display = $('.paleontologia').eq(1).css('display');
        if(display === "none"){
            $('.paleontologia').eq(1).css('display','block');
            $('.noticias').eq(3).css('display','none');
            noticiaSelecionada.fadeIn();
            blur.fadeIn(); 
        }
        else{
            noticiaSelecionada.fadeIn();
            blur.fadeIn(); 
        }

       
        $('.blur-overlay').click(function(){
            blur.fadeOut();
            noticiaSelecionada.fadeOut();
        })

    })
           
    $('.iconeFechar').click(function(){
        $('.conteudoNoticia').fadeOut();
        blur.fadeOut();
        $('html, body').animate({
            scrollTop: $('#noticias').offset().top}, 2000)
        
    })
   
    $('.blur-overlay').click(function(){
         blur.fadeOut();
        $('.conteudoNoticia').fadeOut();
        $('html, body').animate({
            scrollTop: $('#noticias').offset().top}, 2000)
    })
    
        /* Funcões para selecionar a Categoria */

        var quantD = document.querySelectorAll('.conteudoNoticia');

        function mostrarNoticia(id){
        var noticia = document.getElementById(id);
        noticia.style.display = 'block';
        }



    var elementos = document.querySelectorAll('#categorias .IconesCategorias');

    elementos[0].addEventListener('click', ()=>{

        var paleo = document.getElementsByClassName('paleontologia');
        var historia = document.getElementsByClassName('historia');
        var arque = document.getElementsByClassName('arqueologia');

        for(var i=0; i<paleo.length; i++){
            arque[i].style.display = 'block';
            paleo[i].style.display = 'none';
            historia[i].style.display = 'none';
        }

        if(elementos[1].classList.contains('selecionado') || elementos[2].classList.contains('selecionado') ){
            elementos[1].classList.remove('selecionado');
            elementos[2].classList.remove('selecionado');
        }
        
        if(elementos[0].classList.contains('selecionado')){
            for(var i=0; i<paleo.length; i++){
                paleo[i].style.display = 'block';
                historia[i].style.display = 'block';
            }
            elementos[0].classList.remove('selecionado');
        }
        else(
            elementos[0].classList.add('selecionado')
            
        )    

        $('html, body').animate({
            scrollTop: $('#noticias').offset().top}, 2000)
        

    })

    elementos[1].addEventListener('click', ()=>{
        
        var arque = document.getElementsByClassName('arqueologia');
        var historia = document.getElementsByClassName('historia');
        var paleo = document.getElementsByClassName('paleontologia');

        if($('.noticias').eq(3).css('display') === 'none'){
            $('.noticias').eq(3).css('display','block');
        }

        for(var i = 0; i<arque.length; i++){
            paleo[i].style.display = 'block';
            arque[i].style.display = 'none';
            historia[i].style.display = 'none';
        }

        if(elementos[0].classList.contains('selecionado') || elementos[2].classList.contains('selecionado') ){
            elementos[0].classList.remove('selecionado');
            elementos[2].classList.remove('selecionado');
        }


        if(elementos[1].classList.contains('selecionado')){
            elementos[1].classList.remove('selecionado');
            for(var i = 0; i<arque.length; i++){
                arque[i].style.display = 'block';
                historia[i].style.display = 'block';
            }

            }
            else(
                elementos[1].classList.add('selecionado')
            )  
            
            $('html, body').animate({
                scrollTop: $('#noticias').offset().top}, 2000)
    })

    elementos[2].addEventListener('click', ()=>{
        
        var paleo = document.getElementsByClassName('paleontologia');
        var historia = document.getElementsByClassName('historia');
        var arque = document.getElementsByClassName('arqueologia');

        for(var i=0; i<paleo.length; i++){
            arque[i].style.display = 'none';
            paleo[i].style.display = 'none';
            historia[i].style.display = 'block';
        }

        if(elementos[0].classList.contains('selecionado') || elementos[1].classList.contains('selecionado') ){
            elementos[0].classList.remove('selecionado');
            elementos[1].classList.remove('selecionado');
        }


        if(elementos[2].classList.contains('selecionado')){
            elementos[2].classList.remove('selecionado');
            for(var i = 0; i<arque.length; i++){
                arque[i].style.display = 'block';
                paleo[i].style.display = 'block';
            }

        }
        else(
            elementos[2].classList.add('selecionado')
        )   

        $('html, body').animate({
            scrollTop: $('#noticias').offset().top}, 2000)
    })

})


