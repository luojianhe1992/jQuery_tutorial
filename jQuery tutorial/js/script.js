/**
 * Created by jianheluo on 3/12/16.
 */

var username = "";

function get_username (){
    var message = "What is your name?";
    send_message(message);
}

function send_message(message){

    var prevState = $('#container').html();

    if (prevState.length > 6){
        prevState = prevState + "<br>";
    }

    $('#container').html(prevState + "<span class='current_message'>" + "<span class='bot'>Chatbot: </span>" + message + "</span>");

    $('.current_message').hide();

    $('.current_message').delay(500).fadeIn();

    $('.current_message').removeClass('current_message');

}

function ai(message){
    if (username.length < 6){
        username = message;
        send_message("Nice to meet you " + username + ", how are you doing?")
    }


    if (message.indexOf("how are you") >= 0){
        send_message("Thanks, I am good!");
    }

    if (message.indexOf("time") >= 0){

        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();

        send_message("Current time is: " + hour + ":" + minute);
    }

    if (message.indexOf("date") >= 0){
        var date = new Date();

        current_date = date.getDate();
        current_month = date.getMonth();
        current_year = date.getYear();

        send_message("Current date is: " + current_month + "/" + current_date + "/" + current_year);
    }
}


$(function(){

    get_username()

    $('#textbox').keypress(function(event){

        if (event.which == 13){
            if($('#enter').prop('checked')){
                $('#send').click();
                event.preventDefault();
            }
        }
    });

    $('#send').click(function(){

        var username = "<span class='username'>You: </span>"

        var newMessage = $('#textbox').val();
        $('#textbox').val('');

        var prevState = $('#container').html();

        if (prevState.length > 6){
            prevState = prevState + "<br>";
        }

        $('#container').html(prevState + username + newMessage)

        $('#container').scrollTop($('#container').prop("scrollHeight"));

        ai(newMessage);

    });


});