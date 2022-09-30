$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`
            <div>
                <a href="#">${novaTarefa}</a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).click(function(){
            $('ul li a').css("text-decoration", "line-through")
        })
    })
})