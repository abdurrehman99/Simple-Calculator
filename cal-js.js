var exp=''; 
var answer='';

$('.btn-id').on('click', function()
{
        exp+=$(this).attr('data');
        $('#input-box').text(exp);
        
}
)

$('.btn-equal').on('click',function () 
{
    let oldExp = $('#input-box').text();
    let newExp = oldExp.replace(/x/g,'*').replace(/÷/g,'/');
    let ans = eval(newExp);
    $('#ans-box').text(ans);
    
})


$('.btn-ac').on('click',function () {
    $('#input-box').text('0');
    $('#ans-box').text('_');
    exp = "";
    
})

$('.btn-backspace').on('click', ()=>
{
    console.log(exp.length);
    if(exp.length > 1)
    {
        exp= exp.slice(0,-1);
        // console.log(exp);
        $('#input-box').text(exp);
        
    }
    else if(exp.length == 1)
    {
        $('#input-box').text(0);
        exp = '';
    }
})

$('.btn-square').on('click', ()=>
{
    let squareRoot =  Math.sqrt(exp);
    $('#ans-box').text(squareRoot);
})

$('.btn-percentage').on('click', ()=>
{   
    let oldExp = $('#input-box').text();
    let newExp = oldExp.replace(/x/g,'*').replace(/÷/g,'/');
    let ans = eval(newExp) * 100 ;
    $('#ans-box').text(ans);
    exp = '';
})

