const clock = document.querySelector(".clock");

function getTime() {
  var date = new Date();
  var ampm = "AM";
  var hours = date.getHours();

  if (hours >= 12) ampm = "PM";
  if (hours > 12) hours = String(hours % 12).padStart(2, "0");

  var minutes = String(date.getMinutes()).padStart(2, "0");
  var seconds = String(date.getSeconds()).padStart(2, "0");
  var formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  clock.innerHTML = formattedTime;
}

getTime();
setInterval(getTime, 1000);

const QUOTE_LIST = "quotes";

function getQuotes() {
  const quotes = document.querySelector(".quotes");
  localStorage.clear();
  var quoteSaved = localStorage.getItem(QUOTE_LIST);
  if (!quoteSaved) {
    var quote_list = ["Do It Yourself", "Just Do It", "No Pain No Gain"];
    localStorage.setItem("quotes", JSON.stringify(quote_list));
    quoteSaved = localStorage.getItem(QUOTE_LIST);
  }
  var quoteParsed = JSON.parse(quoteSaved);
  quotes.innerText = quoteParsed[parseInt(Math.random() * quoteParsed.length)];
}

getQuotes();

function onClickNewQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");
  const newQuotesInput = document.querySelector(".new-quotes-input");

  console.log(newQuotesInput.value);

  if (newQuotesInput.value) {
    var savedQuotes = localStorage.getItem("quotes");
    var parsedQuotes = JSON.parse(savedQuotes);
    parsedQuotes.push(newQuotesInput.value);
    localStorage.setItem("quotes", JSON.stringify(parsedQuotes));

    quotes.innerText = newQuotesInput.value;
    newQuotesInput.value = "";
  }
  quotes.style.display = "block";
  newQuotes.style.display = "none";
}

function onClickQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");

  quotes.style.display = "none";
  newQuotes.style.display = "block";
}
