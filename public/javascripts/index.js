$(document).ready(function () {
    $('.save').on('click', function(){
        var real = $('.real-url').val()
        var short = $('.short-url').val()
        $.post('/create-url', {real: real, short: short}, function(){
            $('.real-url').val('')
            $('.short-url').val('')
        })
    })
})