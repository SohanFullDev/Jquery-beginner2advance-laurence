console.log($('div').first());
const val = '<h1>Sohan Sujan</h1>';
$('div').first().html(val);
//$('div').last().html(val);
$('div').last().text(val);

$('div').click((e)=>{
    const $el = $(e.target);
    console.log($el);
    $el.html('clicked');
    $(e.target).text('Ready');
    $(e.target).hide('slow');

});

$('button').click((e)=>{
    $('div').show("fast");
    $('h1').show(4000);

});

function eleClicker(e){
    console.log(e);

}