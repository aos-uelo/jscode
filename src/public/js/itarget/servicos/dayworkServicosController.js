//var j = $


// Ready function
   //Head inject
j(document).ready(async  function()
{

    j('head').append(j('<script>', {src:'https://kit.fontawesome.com/a076d05399.js',crossorigin :'anonymous'}))
    
    j('head').append(j('<script>', {src:'https://adrieloli.sslblindado.com/static/js/itarget/servicos/dayworkServicosFunctions.js'}))
    j('head').append(j('<script>', {src:'https://adrieloli.sslblindado.com/static/js/itarget/servicos/dayworkServicosView.js'}))
    j('head').append(j('<script>', {src:'https://adrieloli.sslblindado.com/static/js/itarget/servicos/dayworkServicosModel.js'}))
    
    j('head').append(j('<link>', {href:'https://adrieloli.sslblindado.com/static/css/itarget/dayWorkServicos.css', rel :'stylesheet'}))

})

var myInterval = setInterval(boot, 200);
function boot(){
    if(typeof div == 'function' && typeof jsonTarefas == 'function')
    {
        let main = div({class:'newMain'})  
        let tarefas = jsonTarefas(j('.tipoServico').parent().parent())
    
        main.append(viewMenu(), viewDashTarefas(tarefas))
        
        
        j('#box-dialog').before(main)
        j('.roundcontAll').css({'background-color':'initial'})
        j('#sobreMenu').hide()

        clearInterval(myInterval)
        console.log('Painel Inserido!')
        window.scrollTo(0, 0);
        return true
    }
    console.log('Panel resource not found...')
    //j('#VGL').hide().after().hide()
}