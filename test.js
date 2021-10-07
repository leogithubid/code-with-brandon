var x = 2;
function outer(){
    x = 3;
    function inner(){
        x++;
        var x = 40;
        console.log(x);
    };
    inner();
};
outer();

