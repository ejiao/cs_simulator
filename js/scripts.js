
var cit = 
        {
          "origin": [
            "#complaint#",
            "#complaint#",
            "#question#",
            "#misc#"
          ],
                "question":[ 
                        "Are you taking #taking#", 
                        "can you hmu with that #company# rec?", 
                        "Why isn't anyone answering my Piazza question?"
                ],
                "taking": [ 
                        "#class# s/nc? Ugh I'm so jealous.", 
                        "32 right now? LOL rip."
                ], 
                "complaint": [
                        "#utterance#, I'm #still# #location-phrase# #work#."   
                ],
                "still": [ 
                  "still", 
                  "",
                  "somehow still",
                  "eternally"
                ],
                "utterance": [ 
                        "Ugh I can't go tonight, sorry",
                        "Hey can we reschedule dinner",
                        "Help", 
                        "RIP"
                ], 
          "work": [
            "working on #class#",
            "and #class# is destroying me",
            "LaTEXing 22 forever",
            //"thinking about my #company# interview",
            "LaTEXing 1010 forever", 
            "crying about my future",
            "waiting for hours to start",
            "filing a grade complaint",
                        "trying to understand the #incomprehensible#", 
                        "applying to jobs", 
                        "in line for hours", 
                        "crying into my Kebab and Curry", 
                        "searching for this fucking SegFault"
          ],
          "location-phrase": [
            "in the CIT",
            "in the CIT",
            "in Hotel CIT", 
            "at the Scili",
            "in Kungfu Tea",
            "in the moonlab", 
            "in the sunlab",
            "in the Fishbowl", 
            "outside the Fishbowl"
          ], 
               "location": [ 
                        "the CIT",
            "the Scili",
            "Kungfu Tea",
            "the moonlab", 
                        "the sunlab"
               ],
               "incomprehensible": [ 
                        "CompLing source code", 
                        "AI source code"
               ], 
               "class": [ 
                       "22", 
                       "32", 
                       "17", 
                       "16", 
                       "15",
                       "18",
                       "distributed systems", 
                       "OS",
                       "1010"
               ], 
              "company": [ 
                      "Microsoft",
                      "Amazon", 
                      "Google", 
                      "Facebook", 
                      "Pinterest"
               ], 
              "marriage": [ 
                     "#csthing# is my #s/o#",
                     "I'm married to #csthing#."
               ], 
               "csthing": [ 
                     "CS", 
                     "#class#", 
                     "#location#"
               ], 
               "s/o": [ 
                     "boyfriend", 
                     "boyfriend",
                     "girlfriend", 
                     "significant other", 
                     "significant other"
               ],
               "misc": [ 
                     "I don't need tinder, #marriage#", 
                     "fucking CIT elevators",
                     "I hate these fucking elevators", 
                     "SOMEONE here has to know a good elevator optimization algorithm", 
                     "I think my card is broken - it won't let me swipe to the 3rd floor?",
                     "Kebab and Curry on the 3rd floor!", 
                     "I have become one with the CIT."
               ], 
        }
  $('document').ready(function(){ 
    var grammar = tracery.createGrammar(cit); 
    // console.log(grammar)
    $('.button').click(function(){ 
      var message = grammar.flatten("#origin#"); 
      // console.log(message);
      document.getElementById("message").innerHTML = message; 
    });  
  });      
