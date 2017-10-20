$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var classQuestionOne = $("select#classQuestionOne").val();
    var classQuestionTwo = $("select#classQuestionTwo").val();
    var classQuestionThree = $("select#classQuestionThree").val();
    var classQuestionFour = $("select#classQuestionFour").val();
    var classQuestionFive = $("select#classQuestionFive").val();


    if (classQuestionOne === 'cSharpOne' && classQuestionTwo === 'cSharpOne' && classQuestionThree === 'cSharpOne' && classQuestionFour === 'cSharpOne' && classQuestionFive === 'cSharpOne' || classQuestionOne === 'cSharpOne' && classQuestionFour === 'cSharpOne' && classQuestionFive === 'cSharpOne' || classQuestionFour === 'cSharpOne' && classQuestionFive === 'cSharpOne' && classQuestionTwo === 'cSharpOne') {
      $("#cSharp").show();
    } else if (classQuestionOne === 'javaOne' && classQuestionTwo === 'javaOne' && classQuestionThree === 'javaOne' && classQuestionFour === 'javaOne' && classQuestionFive === 'javaOne' || classQuestionOne === 'javaOne' && classQuestionFour === 'javaOne' && classQuestionFive === 'javaOne' || classQuestionFour === 'javaOne' && classQuestionFive === 'javaOne' && classQuestionTwo === 'javaOne') {
      $("#java").show();
    } else if (classQuestionOne === 'phpOne' && classQuestionTwo === 'phpOne' && classQuestionThree === 'phpOne' && classQuestionFour === 'phpOne' && classQuestionFive === 'phpOne' || classQuestionOne === 'phpOne' && classQuestionFour === 'phpOne' && classQuestionFive === 'phpOne' || classQuestionFour === 'phpOne' && classQuestionFive === 'phpOne' && classQuestionTwo === 'phpOne') {
      $("#php").show();
    }


    event.preventDefault();

  });
});
