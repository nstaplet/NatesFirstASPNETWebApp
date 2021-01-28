$("#submitbutton").click(function () {
    var assignments = parseInt($("#assignments").val())
    var groupproject = parseInt($("#groupproject").val())
    var quizzes = parseInt($("#quizzes").val())
    var exams = parseInt($("#exams").val())
    var intex = parseInt($("#intex").val())

    var finalgrade = assignments*.5 + groupproject*.1 + quizzes*.1 + exams*.2 + intex*.1

    if (finalgrade >= 94) {
        alert("your final grade was " + finalgrade + "% which is an A.")
    }

    else if (finalgrade >= 90) {
        alert("your final grade was " + finalgrade + "% which is an A-.")
    }

    else if (finalgrade >= 87) {
        alert("your final grade was " + finalgrade + "% which is a B+.")
    }

    else if (finalgrade >= 84) {
        alert("your final grade was " + finalgrade + "% which is a B.")
    }

    else if (finalgrade >= 80) {
        alert("your final grade was " + finalgrade + "% which is a B-.")
    }

    else if (finalgrade >= 77) {
        alert("your final grade was " + finalgrade + "% which is a C+.")
    }

    else if (finalgrade >= 74) {
        alert("your final grade was " + finalgrade + "% which is a C.")
    }

    else if (finalgrade >= 70) {
        alert("your final grade was " + finalgrade + "% which is a C-.")
    }

    else if (finalgrade >= 67) {
        alert("your final grade was " + finalgrade + "% which is a D+.")
    }

    else if (finalgrade >= 64) {
        alert("your final grade was " + finalgrade + "% which is a D.")
    }

    else if (finalgrade >= 60) {
        alert("your final grade was " + finalgrade + "% which is a D-.")
    }

    else {
        alert("your final grade was " + finalgrade + "% which is an E.")
    }

});