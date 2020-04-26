var q = ["Which built-in method adds one or more elements to the end of an array and returns the new length of the array?<br/><br/>",
    "Which of the following function of String object is used to match a regular expression against a string?<br/><br/>", 
    "Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?<br/><br/>", 
    "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?<br/><br/>", 
    "Which of the following function of Array object sorts the elements of an array?<br/><br/>"];

        var a1 = ["<button class=button777 onclick=q1c()>push()</button>",
                  "<button class=button777 onclick=q2c()>match()</button>",
                  "<button class=button777 onclick=q3c()>small()</button>",
                  "<button class=button777 onclick=q4i()>map()</button>",
                  "<button class=button777 onclick=q5i()>sort()</button>"];
             

        var a2 = ["<button class=button777 onclick=q1i()>last()</button>",
                  "<button class=button777 onclick=q2i()>concat()</button>",
                  "<button class=button777 onclick=q3i()>link()</button>",
                  "<button class=button777 onclick=q4c()>pop()</button>",
                  "<button class=button777 onclick=q5c()>toString()</button>"];
    

        var a3 = ["<button class=button777 onclick=q1i()>put()</button>",
                  "<button class=button777 onclick=q2i()>search()</button>",
                  "<button class=button777 onclick=q3i()>sup()</button>",
                  "<button class=button777 onclick=q4i()>join()</button>",
                  "<button class=button777 onclick=q5i()>toSource()</button>"];
             

        var a4 = ["<button class=button777 onclick=q1i()>None of the above.</button>",
                  "<button class=button777 onclick=q2i()>replace()</button>",
                  "<button class=button777 onclick=q3i()>sub()</button>",
                  "<button class=button777 onclick=q4i()>push()</button>",
                  "<button class=button777 onclick=q5i()>unshift()</button>"];
               

        var c = ["Correct", "Correct", "Correct", "Correct", "Correct"];
        var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

        var n = 0;
        n++;
        var s = 0;
        s++;

        function start() {
            disappear.innerHTML = "";
            msg1.innerHTML = "";
            question.innerHTML = q[0];
            answer1.innerHTML = a1[0];
            answer2.innerHTML = a2[0];
            answer3.innerHTML = a3[0];
            answer4.innerHTML = a4[0];
            questioncount.innerHTML = n++;
        }

        function q1c() {
            answer.innerHTML = "<div id=green001>" + c[0] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=new2()>Next</button>";
            score.innerHTML = s++;
        }

        function q1i() {
            answer.innerHTML = "<div id=red001>" + i[0] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=new2()>Next</button>";
        }

        function new2() {
            question.innerHTML = q[1];
            answer1.innerHTML = a1[1];
            answer2.innerHTML = a2[1];
            answer3.innerHTML = a3[1];
            answer4.innerHTML = a4[1];
            next.innerHTML = "";
            answer.innerHTML = "";
            questioncount.innerHTML = n++;
        }

        function q2c() {
            answer.innerHTML = "<div id=green001>" + c[1] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=new3()>Next</button>";
            score.innerHTML = s++;
        }

        function q2i() {
            answer.innerHTML = "<div id=red001>" + i[1] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=new3()>Next</button>";
        }

        function new3() {
            question.innerHTML = q[2];
            answer1.innerHTML = a1[2];
            answer2.innerHTML = a2[2];
            answer3.innerHTML = a3[2];
            answer4.innerHTML = a4[2];
            next.innerHTML = "";
            answer.innerHTML = "";
            questioncount.innerHTML = n++;
        }

        function q3c() {
            answer.innerHTML = "<div id=green001>" + c[2] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=new4()>Next</button>";
            score.innerHTML = s++;
        }

        function q3i() {
            answer.innerHTML = "<div id=red001>" + i[2] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=new4()>Next</button>";
        }

        function new4() {
            question.innerHTML = q[3];
            answer1.innerHTML = a1[3];
            answer2.innerHTML = a2[3];
            answer3.innerHTML = a3[3];
            answer4.innerHTML = a4[3];
            next.innerHTML = "";
            answer.innerHTML = "";
            questioncount.innerHTML = n++;
        }

        function q4c() {
            answer.innerHTML = "<div id=green001>" + c[3] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=new5()>Next</button>";
            score.innerHTML = s++;
        }

        function q4i() {
            answer.innerHTML = "<div id=red001>" + i[3] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=new5()>Next</button>";
        }

        function new5() {
            question.innerHTML = q[4];
            answer1.innerHTML = a1[4];
            answer2.innerHTML = a2[4];
            answer3.innerHTML = a3[4];
            answer4.innerHTML = a4[4];
            next.innerHTML = "";
            answer.innerHTML = "";
            questioncount.innerHTML = n++;
        }

        function q5c() {
            answer.innerHTML = "<div id=green001>" + c[4] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=end()>End of Quiz</button>";
            score.innerHTML = s++;
        }

        function q5i() {
            answer.innerHTML = "<div id=red001>" + i[4] + "</div>";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<button class=start-btn onclick=end()>End of Quiz</button>";
        }

       

        function end() {
            msg1.innerHTML = "End of Quiz.";
            question.innerHTML = "";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            next.innerHTML = "<div id=text1>" + "<button class=start-btn onclick=repeat()>Repeat</button>" + "</div>";
            answer.innerHTML = "";
        }

        function repeat() {
            location.reload();
        }