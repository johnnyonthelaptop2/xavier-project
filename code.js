onEvent("button5", "click", function( ) {
  open("https://studio.code.org/projects/minecraft_designer/d31efc01-2def-480d-afcd-afdcb099f9f2");
});
onEvent("socr", "click", function( ) {
  open("https://studio.code.org/projects/bounce/8a15d38b-079f-4726-9da6-3a2e922d2bf8");
});
onEvent("credits", "click", function( ) {
  setScreen("aboutus");
});
onEvent("homeaboutus", "click", function( ) {
  setScreen("TitlePage");
});
onEvent("homebuttonassessments", "click", function( ) {
  setScreen("TitlePage");
});
onEvent("Assessmentsbutton", "click", function( ) {
  setScreen("assessments");
});  
onEvent("bagdutieshome", "click", function( ) {
  setScreen("TitlePage");
});
onEvent("bagdutiesbutton", "click", function( ) {
  setScreen("bagduties");
});  
onEvent("learningprepbutton", "click", function( ) {
  setScreen("learningprep");
});
onEvent("learningprephome", "click", function( ) {
  setScreen("TitlePage");
});  
onEvent("Gamesbutton", "click", function( ) {
  setScreen("games");
});
onEvent("homegame", "click", function( ) {
  setScreen("TitlePage");
});  
onEvent("timetablebutton", "click", function( ) {
  setScreen("timestables");
});
onEvent("button1", "click", function( ) {
  setScreen("TitlePage");
  
  
});
var label = "first";
var ans = "0"; 

onEvent("1", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 1);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 1);
  }
});

onEvent("2", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 2);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 2);
  }
});

onEvent("3", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 3);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 3);
  }
});

onEvent("4", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 4);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 4);
  }
});

onEvent("5", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 5);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 5);
  }
});

onEvent("6", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 6);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 6);
  }
});

onEvent("7", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 7);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 7);
  }
});

onEvent("8", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 8);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 8);
  }
});

onEvent("9", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 9);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 9);
  }
});

onEvent("0", "click", function( ) {
  if (label == Number(0)) {
    setProperty(label, "text", 0);
  } else {
    setProperty(label, "text", getProperty(label, "text") + 0);
  }
});



onEvent("coolnameforacalculatorbutton", "click", function( ) {
  var s5 = getProperty("first", "text");
  var s1 = Number(s5);
  var s4 = getProperty("second", "text");
  var s2 = Number(s4);
  var x = getProperty("dropdown1", "index");
  
  if (x == 0) {
    setProperty("theanswer", "text", s1 + s2);
    ans = s1 + s2;
  } else {
    if (x == 1) {
      setProperty("theanswer", "text", s1 - s2);
      ans = s1 - s2;
    } else {
      if (x == 2) {
        setProperty("theanswer", "text", s1 * s2);
        ans = s1 * s2;
      } else {
        if (x == 3) {
          setProperty("theanswer", "text", s1 / s2);
          ans = s1 / s2;
        }
      }
    }
  }
});

onEvent("button3", "click", function( ) {
  setProperty("label2", "text", "0");
  setProperty("label3", "text", "0");
});
onEvent("switch", "click", function( ) {
  if (label == "first") {
    label = "second";
    setProperty("switch", "text", "second label");
  } else {
    label = "first";
    setProperty("switch", "text", "first label");
  }
});
onEvent("operation", "click", function( ) {
	console.log("operation clicked!");
});
onEvent("calcbutton", "click", function( ) {
  setScreen("calc");
});
onEvent("homecalc", "click", function( ) {
  setScreen("TitlePage");
});
onEvent("savebutton", "click", function( ) {
    setKeyValue("Monday", getText("moninput"), function () {
    getKeyValue("Monday", function (m) {
      console.log(m);
    });
  });
  setKeyValue("Tuesday", getText("tueinput"), function () {
    getKeyValue("Tuesday", function (t) {
      console.log(t);
    });
  });
  setKeyValue("Wednesday", getText("wedinput"), function () {
    getKeyValue("Wednesday", function (w) {
      console.log(w);
    });
  });
  setKeyValue("Thursday", getText("thurinput"), function () {
    getKeyValue("Thursday", function (th) {
      console.log(th);
    });
  });
  setKeyValue("Friday", getText("friinput"), function () {
    getKeyValue("Friday", function (f) {
      console.log(f);
    });
  });
});
getKeyValue("Monday", function (m) {
      console.log(m);
      setProperty("moninput", "text", m);
    });
getKeyValue("Tuesday", function (t) {
      console.log(t);
      setProperty("tueinput", "text", t);
    });
getKeyValue("Wednesday", function (w) {
      console.log(w);
      setProperty("wedinput", "text", w);
    });
getKeyValue("Thursday", function (th) {
      console.log(th);
      setProperty("thurinput", "text", th);
    });
getKeyValue("Friday", function (f) {
      console.log(f);
      setProperty("friinput", "text", f);
    });
