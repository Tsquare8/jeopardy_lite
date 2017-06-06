(function() {


    let score = $("#points-score");
    let category;
    let points;
    let question;
    let answerPoints;
    let answer;

    $("body").css({
      background: "blue",
      color: "white"
    });

    $("#categoryContent").css({
      "font-size": "16px",
      "font-weight": "normal"
    });

    //pull category, points and questions
    $.get("http://jservice.io/api/random", function(data) {

      $.each(data, function(index, value) {

        $("#categoryContent").html(value.category.title);
        $("#pointsContent").html(value.value);
        $("#questionContent").html(value.question);

        answer = value.answer;
        answerPoints = value.value
        console.log(answer)

      });

    });


    let submitButton = $("#submit-button");

    //get response entered
    function getText() {
      return $("#response").val();
    }

    //once submit button is clicked pull response entered on screen and compare to answer from api
    submitButton.click(function() {
        console.log("submit button clicked");
        if (getText() == answer) {

          //if reponse equals answer add points in api to score
          let finalScore = parseInt(score.html()) + answerPoints;
          score.html(finalScore);
        } else {
          let finalScore = parseInt(score.html()) - answerPoints;
          score.html(finalScore);
        };


        // console.log(answerPoints);
        // console.log(finalScore)

    });

  let nextButton = $("#next-question");

  nextButton.click(function() {

    console.log("next button clicked");
    //when the next question button is clicked clear the response input field
    $(document).ready(function() {
      $("#response").val("");
    });
    //And pull category, points and questions
    $.get("http://jservice.io/api/random", function(data) {

      $.each(data, function(index, value) {

        $("#categoryContent").html(value.category.title);
        $("#pointsContent").html(value.value);
        $("#questionContent").html(value.question);

        answer = value.answer;
        answerPoints = value.value
        console.log(answer)

      });

    });

  });

})();
