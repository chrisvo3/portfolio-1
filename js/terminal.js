document.addEventListener('DOMContentLoaded', function() {

    document.getElementsByTagName('form')[0].onsubmit = function (evt) {
        evt.preventDefault(); //Preventing the form from submitting
        checkWord();
    };

    // Getting the text from the input
    var txtInput = document.getElementById('cmd-input').value.trim();

    //Getting the text from the results div
    var textResultsValue = document.getElementById('cmd-output').innerHTML;

    // Clear text input
    var clearInput = function () {
        document.getElementById('cmd-input').value = "";
        document.getElementById('cmd-output').focus(); //focus on output
    };

    // Scroll to the bottom of the results div
    var scrollToBottomOfResults = function () {
        var terminalResultsDiv = document.getElementById('cmd-output');
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    };

    // Scroll to the bottom of the results
    scrollToBottomOfResults();

    // Add text to the results div
    var addTextToResults = function(textToAdd){
        document.getElementById('cmd-output').innerHTML += textToAdd;
        scrollToBottomOfResults();
    }

    var breakline = "<br/>";

    // Getting the list of keywords for help & posting it to the screen
    var postHelpList = function(){
        // array of list into table <table class='table borderless'>
        var helpKeyWords = "<p class='cmd-answer'> > &quot;There are still some more keys for you to explore!&quot;</p>";
        helpKeyWords += "<p class='cmd-answer'>	&nbsp;&nbsp;&quot;Please type one of these following keys:&quot; <p><p class='cmd-answer'>	&nbsp;&nbsp;";
        helpKeyWords += [
            "clear",
            "credit",
            "hello",
            "origin",
            "location",
            "major",
            "grad",
            "exp",
            "edu",
            "project",
            "hobby",
            "linkedin",
            "phone",
            "email",
            "resume",
            "date",
            "time"
        ].join(' &nbsp;&nbsp;');
        helpKeyWords += "</p>";
        addTextToResults(helpKeyWords);
    }

    // Getting the time and date and post it depending on what you request for
    var getTimeAndDate = function (postTimeDay) {

        //Initial for Date and Time
        var daytime = new Date();

        //Time
        var hr = daytime.getHours();
        var min = daytime.getMinutes();
        var ampm = hr >= 12 ? 'PM' : 'AM';

        hr = hr % 12;
        hr = hr ? hr : 12;
        min = min < 10 ? '0' + min : min;
        var currTime = "<p class='cmd-answer'> > " + hr + ":" + min + " " + ampm + "</p>";

        if (postTimeDay === "time") {
            addTextToResults(currTime);
        }

        // Date
        var dateDay = daytime.getDate();
        console.log(dateDay);

        var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var fullDate = day[daytime.getDay()];

        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dateMonth = month[daytime.getMonth()];

        var dateYear = daytime.getFullYear();
        
        var currDate = "<p class='cmd-answer'> > " + fullDate + " " + dateDay + " " + dateMonth + ", " + dateYear + "</p>";

        if (postTimeDay === "date"){
            addTextToResults(currDate);
        }

        // Age
        var bday = 1995;
        var calAge = 0;
        if (daytime.getMonth() > 0) {
            calAge = dateYear - 1995;
        }
        else {
            calAge = dateYear - 1995 - 1;
        }
        var currAge = "<p class='cmd-answer'> > " + calAge + "</p>";

        if (postTimeDay === "age") {
            addTextToResults(currAge);
        }
    }

    // Opening links in a new window
    var openLinkInNewWindow = function(linkToOpen) {
        window.open(linkToOpen, '_blank');
        clearInput();
    }

    var startText = "<p class='cmd-answer'> > ";
    var nextLine = "<p class='next-line'>";
    var endText = "</p>";
    var replyText = "";
    var resultText = ""; 

    // Having a specific text reply to specific strings
    var textReplies = function() {
        switch (txtLowCase) {

            case "hello":
            case "hi":
            case "chao":
            case "hola":
                clearInput();
                var uname = prompt("Your name:");

                if (uname === null || uname === "") {
                    replyText = "hello [anon]";
                    resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                    addTextToResults(resultText);
                    break;
                } else {
                    replyText = "hello [" + uname + "]";
                    resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                    addTextToResults(resultText);
                    break;
                }

            case "morning":
                clearInput();
                replyText = "good morning!";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "afternoon":
                clearInput();
                replyText = "good afternoon!";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break

            case "evening":
                clearInput();
                replyText = "good evening!";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "night":
            case "goodnight":
                clearInput();
                replyText = "good night!";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "catchy":
                clearInput;
                replyText = "Opening . . .";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                openLinkInNewWindow('https://www.youtube.com/watch?v=8N_tupPBtWQ');
                break;

            case "dog":
            case "funny":
            case "stress":
                clearInput;
                replyText = "Stress? I got you cover";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                openLinkInNewWindow('https://www.youtube.com/watch?v=FZBo2wBH0zE');
                break;

            // end of being weird and funny (i guess LOL)

            case "name":
                clearInput();
                replyText = "last name: Vo <br/> first name: Chris";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;
                
            case "age":
                clearInput();
                getTimeAndDate("age");
                break;

            case "time":
                clearInput();
                getTimeAndDate("time");
                break;

            case "date":
                clearInput();
                getTimeAndDate("date");
                break;

            case "origin":
                clearInput();
                replyText = "Vietnam";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "location":
                clearInput();
                replyText = "Philadelphia, PA";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            // Serious stuff
            case "credit":
                clearInput();
                replyText = "Hats off to <a target='_blank' href='https://codepen.io/mahdi/' class='clink'>Mahdi Farra</a> for this awesome terminal JS&quot;";
                replyText += "<br/> > &quot;Also, I modified a lot of things in here";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "linkedin":
                clearInput();
                replyText = "<a target='_blank' href='https://www.linkedin.com/in/chrisvo3/' class='clink'>@chrisvo3</a>";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                //openLinkInNewWindow('https://www.linkedin.com/in/chrisvo3/');
                break;

            case "email":
                clearInput();
                replyText = "<a target='_blank' href='mailto:vochris3%40gmail%2ecom' class='clink'>vochris3&#64;gmail&#46;com</a>";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "phone":
                clearInput();
                replyText = "(&#50;&#54;&#55;) &#50;&#50;&#54;-&#55;&#49;&#49;&#55;";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;
                
            case "edu":
            case "education":
                clearInput();
                replyText = "<a target='_blank' href='https://www.lasalle.edu/'  class='clink'>La Salle University</a>";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "resume":
                clearInput();
                replyText = "<a target='_blank' href='/vochris-resume.pdf' class='clink'>resume</a>";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "grad":
            case "expected_graduation":
                clearInput();
                replyText = "December 2018";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "major":
                clearInput();
                replyText = "Computer Science";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;
                
            case "hobby":
            case "interests":
                clearInput();
                replyText = "[&nbsp; 'program_code', &nbsp; 'build_things', &nbsp; 'music_produce', &nbsp; 'graphic_design', &nbsp; 'kayaking' &nbsp; ]";
                resultText = startText + replyText + endText;
                addTextToResults(resultText);
                break;

            case "exp":
            case "experience":
            case "job":
                clearInput();
                replyText = "exp checkout <a target='_blank' href='/vochris-resume.pdf' class='clink'>resume</a>";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);

                replyText = "or scroll down for in-dept information about my past experience";
                resultText = nextLine + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);

                replyText = "for latest job experience, type: 'exp / latest'";
                resultText = nextLine + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);
                break;

            case "volunteer":
                clearInput();
                addTextToResults("");
                break;

            case "proj":
            case "project":
            case "work":
                clearInput();
                replyText = "proj checkout <a target='_blank' href='/vochris-resume.pdf' class='clink'>resume</a>";
                resultText = startText + " &quot;" + replyText + "&quot; " + endText;
                addTextToResults(resultText);

                replyText = "or type: 'proj / ' and one of these below for latest projects:";
                resultText = nextLine + replyText + endText;
                addTextToResults(resultText);
                
                replyText = "<span class='tabline'>&quot;web&quot;</span>";
                replyText += "<br/><span class='tabline'>&quot;game&quot;</span>";
                replyText += "<br/><span class='tabline'>&quot;graphic&quot;</span>";
                replyText += "<br/><span class='tabline'>&quot;build&quot;</span>";
                resultText = nextLine + replyText + endText;
                addTextToResults(resultText);
                break;

            case "clear":
                clearInput();

                setTimeout(function () {
                        document.getElementById("cmd-output").innerHTML = "";
                }, 1000);
                break;
                
            case "help":
                clearInput();
                postHelpList();
                break;

            default:
                clearInput();
                addTextToResults("<p class='cmd-answer'> > " + "'" + txtInput + "' : " + " command not found. Type 'help' to see all commands.</p>");
                break;
        }
    }

    // Main function to check the entered text and assign it to the correct function
    var checkWord = function() {
        txtInput = document.getElementById('cmd-input').value.trim(); //get the text from the text input to a variable
        txtLowCase = txtInput.toLowerCase(); //get the lower case of the string
        txtnoSpace = txtLowCase.replace(/ /g, ''); //remove space
        
        // split string into half
        var iSplit = txtnoSpace.indexOf("/");  // Gets the first index where a space occours
        var txtChoice = txtnoSpace.substr(iSplit + 1);  // Gets the text part

        if (txtInput !== ""){ //checking if text was entered
            addTextToResults("<p class='user-cmd'>[user@cvo] $ " + txtInput + "</p>");

            if (txtLowCase.substr(0, 4) === "exp ") {
                switch (txtChoice) {
                    case 'latest': // correct
                        clearInput();
                        replyText = "Latest Work Experience<br/>";
                        replyText += "<span class='tabline'> company: &quot;La Salle University&quot; </span><br/>";
                        replyText += "<span class='tabline'> role: &quot;Web Deverloper Intern&quot; </span><br/>";
                        replyText += "<span class='tabline'> start: &quot;May 2018&quot; </span><br/>";
                        replyText += "<span class='tabline'> end: &quot;present&quot; </span>";
                        resultText = startText + replyText + endText;
                        addTextToResults(resultText);
                        break;

                    case '': // empty
                        clearInput();
                        replyText = "Cannot redicrect to 'nothing'...";
                        resultText = startText + replyText + endText;
                        addTextToResults(resultText);
                        break;

                    default:
                        clearInput();
                        addTextToResults("<p class='cmd-answer'> > " + "'" + txtChoice + "' : " + " command not found. Please check your options again.</p>");
                        break;
                }

            }

            else if (txtLowCase.substr(0, 5) === "proj ") {
                switch (txtChoice) {
                    case 'web': //web > student4student
                        clearInput();
                        replyText = "<a class='clink' target='_blank' href='http://student4student.herokuapp.com/main.html' class='clink'><b>Student4Student</b></a><br/>";
                        replyText += "<span class='tabline'> school: &quot;La Salle University&quot; </span><br/>";
                        replyText += "<span class='tabline'> role: &quot;Implement Register page and User-to-User Message&quot; </span><br/>";
                        replyText += "<span class='tabline'> start: &quot;May 2018&quot; </span><br/>";
                        replyText += "<span class='tabline'> end: &quot;present&quot; </span>";
                        resultText = startText + replyText + endText;
                        addTextToResults(resultText);
                        break;
                    case 'game': //game , > rolling ball
                        clearInput();
                        replyText = "<a target='_blank' href='/WebGL/index.html' class='clink'><b>Rolling Ball Game</b></a><br/>";
                        replyText += "<span class='tabline'> online course: &quot;<a class='clink' target='_blank' href='https://www.coursera.org/lecture/game-development/intro-to-unity3d-IQDE7' target='_blank'>Michigan State University</a>&quot; </span><br/>";
                        replyText += "<span class='tabline'> start: &quotApril 2017&quot; </span><br/>";
                        replyText += "<span class='tabline'> end: &quot;May 2017&quot; </span><br/>";
                        replyText += "<span class='tabline'> concept: &quot;roll around, avoid bouncy purple enimies, and collect coins for points&quot;</span><br/>";
                        replyText += "<span class='tabline'> task: &quot;build mini web game using Unity 3D&quot;</span><br/>";
                        replyText += "<span class='tabline'> tools: &quot;Unity, C#&quot;</span><br/>";
                        resultText = startText + replyText + endText;
                        addTextToResults(resultText);
                        break;
                    case 'graphic': //graphic , > magazine, posters
                        clearInput();
                        replyText = "<a class='clink' target='_blank'  href='https://indd.adobe.com/view/97e91832-4604-4e6f-bed2-0171b4e039de'>Vietnam Traveler</a><br/>";
                        replyText += "<span class='tabline'> date: &quot;December 2016&quot; </span><br/>";
                        replyText += "<span class='tabline'> concept: &quot;a mini travel magazine for tourists who are going to visit Vietnam&quot;</span><br/>";
                        replyText += "<span class='tabline'> task: &quot;create brand name, logo and magazine &quot;</span><br/>";
                        replyText += "<span class='tabline'> tools: &quot;inDesign&quot;</span><br/>";
                        resultText = startText + replyText + endText;
                        addTextToResults(resultText);
                        break;
                    case 'build': //build , > arduino, rasperry
                        clearInput();
                        replyText = "<a class='clink' target='_blank'  href='https://drive.google.com/open?id=0B2YF2wrGs3snNTcwM0JoRFdaT28'>GHS Robotic</a><br/>";
                        replyText += "<span class='tabline'> date: &quot;high school&quot; </span><br/>";
                        replyText += "<span class='tabline'> concept: &quot;a ground robot with function to move mini boxes, and water robot to move through circle loop&quot;</span><br/>";
                        replyText += "<span class='tabline'> task: &quot;design ground robot and water robot &quot;</span><br/>";
                        resultText = startText + replyText + endText;
                        addTextToResults(resultText);
                        break;
                    default:
                        clearInput();
                        addTextToResults("<p class='cmd-answer'>" + "'" + txtChoice + "' : " + " command not found. Please check your options again.</p>");
                        break;
                }
            }

            // short stuff
            else if (txtLowCase.substr(0, 8) == "youtube ") {
                clearInput();
                replyText = "Searching for '" + txtInput.substr(8) + "' on YouTube...";
                resultText = startText + replyText + endText;
                addTextToResults(resultText);
                openLinkInNewWindow('https://www.youtube.com/results?search_query=' + txtInput.substr(8));            }

            else if (txtLowCase.substr(0, 7) == "google ") {
                clearInput();
                replyText = "Searching for '" + txtInput.substr(7) + "' on Google...";
                resultText = startText + replyText + endText;
                addTextToResults(resultText);
                openLinkInNewWindow('https://www.google.com/search?q=' + txtInput.substr(7));
            }

            else if (txtLowCase.substr(0, 5) == "wiki ") {
                clearInput();
                replyText = "Searching for '" + txtInput.substr(5) + "' on Wiki...";
                resultText = startText + replyText + endText;
                addTextToResults(resultText);
                openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + txtInput.substr(5));
            }

            else {
              textReplies();
            }

        }

    };

});
