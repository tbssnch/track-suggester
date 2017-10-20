$(document).ready(function() {
  var cSharp = 0;
  var java = 0;
  var php = 0;

  $("form#formQuestionOne").submit(funtion(event)) {
    var classQuestionOne = $("select#classQuestionOne").val();

    console.log(classQuestionOne)
    if (classQuestionOne === 'cSharp') {
      cSharp += 1;
    } else if (classQuestionOne === 'java') {
      java += 1;
    } else if (classQuestionOne === 'php') {
      php += 1;
    }

    if (cSharp < 0){
      $("#cSharp").show();
    }

    event.preventDefault();

  }
});
