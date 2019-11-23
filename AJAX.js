var APIKey = "wTrHMya0f2l2GLIaUklGBV3JTJkJR6A5";

var queryURL =
  "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  "elections" + //searchInput
  "&begin_date=" +
  "2018" + //beginYear
  "0101&end_date=" +
  "2019" + //endYear
  "1231&api-key=" +
  APIKey;
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  var searchInput = $("<input>").val();
  var selectNumber = $("<input>").val();
  var beginYear = $("<input>").val();
  var endYear = $("<input>").val();

  var articleInfo = response.docs;
  console.log(response.docs);

  for (var i; articleInfo.length; i++) {
    $("#searchResults").append(articleInfo[i]);
  }
});
