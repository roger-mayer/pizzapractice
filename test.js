src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"

// const getPizza = $.ajax("pizzapractice/package.json");

function hello (){
    console.log("hello world");
}

hello();

const getPizza = $.get("pizzapractice/package.json",
{
    limit: 20
}).done(function(data){


});

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.getJSON( "example.json", function() {
    console.log( "success" );
})
    .done(function() {
        console.log( "second success" );
    })
    .fail(function() {
        console.log( "error" );
    })
    .always(function() {
        console.log( "complete" );
    });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.always(function() {
    console.log( "second complete" );
});