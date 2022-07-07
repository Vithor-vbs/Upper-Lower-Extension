document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#btn').addEventListener('click', function(){
        let text = document.querySelector('#text').value;
        document.querySelector('#result').innerHTML = upper(text);
    })

    document.querySelector('#btn2').addEventListener('click', function(){
        let text = document.querySelector('#text').value;
        document.querySelector('#result').innerHTML = lower(text);
    })

    function lower(text){
        return text.toLowerCase();
    }

    function upper(text){
        return text.toUpperCase();
    }
})
