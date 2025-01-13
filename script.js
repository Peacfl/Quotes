const url = "https://api.quotable.io/quotes/random";

$(document).ready(function() {
    showQuote();
  });

async function fetchQuote() {
    const response = await fetch(url);

    if (!response.ok) {

        return response.status;

    } else {

        const quoteData = await response.json();

        return quoteData;

    }
}
    
$("button").on("click", showQuote)

async function showQuote() {

    var data = await fetchQuote();

    if (data === 404) {
        
        console.log("error");
        

    } else {
        
        var quote = data[0].content;
        var author = data[0].author;

        // console.log(quote);
        // console.log(author);
        
        $(".quote-text").html('"' + quote + '"');
        $(".author-name").html("- " + author);

    }

};
