
// Black Panther RPG Game
// Web-based Jquery Game

// Need to make an object array for all characters
// Need the characters to auto fill selection windo using array

// When user clicks on first character ir moves, to battle area
// Use modal to show remaining characters to select from 

// The remaining characters are then changed to enemiels avialable for attack.

// When user clicks on second cahracter if moves, to "challenger Place"

// When the attack but is clicked, an exchange of hit points takes place

// With each attack the hit points increases

// when user if defeated it is game over, when challenger is defeated user must choose another character to battel.

// ==============================================
$(function () {
    console.log("hello chris");
    // ==============================================
    // Characters
    // ==============================================
    var characters = [
        {
            "name": "Black Panther",
            "realName": "T'Challa",
            "label": "blackPanther",
            "photo": "./assets/images/tchalla.jpg",
            "photoWin": "./assets/images/tchallaWin.jpg",
            "status": "combatant",
            "healthPoints": 400,
            "attackPower": 30,
            "counterAttack": 25,
        },
        {
            "name": "Shuri",
            "realName": "Shuri",
            "label": "shuri",
            "photo": "./assets/images/shuri.jpg",
            "photoWin": "./assets/images/shuriWin.jpg",
            "status": "combatant",
            "healthPoints": 250,
            "attackPower": 30,
            "counterAttack": 5,
        },
        {
            "name": "Killmonger",
            "realName": "Erik Killmonger",
            "label": "killmonger",
            "photo": "./assets/images/killmonger.jpg",
            "photoWin": "./assets/images/killmongerWin.jpg",
            "status": "combatant",
            "healthPoints": 400,
            "attackPower": 30,
            "counterAttack": 30
        },
        {
            "name": "Nakia",
            "realName": "Nakia",
            "label": "nakia",
            "photo": "./assets/images/nakia.jpg",
            "photoWin": "./assets/images/nakiaWin.jpg",
            "status": "combatant",
            "healthPoints": 200,
            "attackPower": 20,
            "counterAttack": 20,
        },
        {
            "name": "Man Ape",
            "realName": "M'baku",
            "label": "mbaku",
            "photo": "./assets/images/mbaku.jpg",
            "photoWin": "./assets/images/mbakuWin.jpg",
            "status": "combatant",
            "healthPoints": 300,
            "attackPower": 25,
            "counterAttack": 20,
        },
        {
            "name": "Okoye",
            "realName": "okoye",
            "label": "okoye",
            "photo": "./assets/images/okoye.jpg",
            "photoWin": "./assets/images/okoyeWin.jpg",
            "status": "combatant",
            "healthPoints": 200,
            "attackPower": 10,
            "counterAttack": 5,
        },
        {
            "name": "Ramonda",
            "realName": "Ramonda",
            "label": "ramonda",
            "photo": "./assets/images/ramonda.jpg",
            "photoWin": "./assets/images/ramondaWin.jpg",
            "status": "combatant",
            "healthPoints": 300,
            "attackPower": 20,
            "counterAttack": 20,
        },
        {
            "name": "W'kabi",
            "realName": "W'kabi",
            "label": "wkabi",
            "photo": "./assets/images/wkabi.jpg",
            "photoWin": "./assets/images/wkabiWin.jpg",
            "status": "combatant",
            "healthPoints": 250,
            "attackPower": 20,
            "counterAttack": 15,
        },
        {
            "name": "Zuri",
            "realName": "Zuri",
            "label": "zuri",
            "photo": "./assets/images/zuri.jpg",
            "photoWin": "./assets/images/zuriWin.jpg",
            "status": "combatant",
            "healthPoints": 100,
            "attackPower": 10,
            "counterAttack": 5,
        },
        {
            "name": "Ulysses Klaw",
            "realName": "Ulysses Klaue",
            "label": "klaw",
            "photo": "./assets/images/klaw.jpg",
            "photoWin": "./assets/images/klawWin.jpg",
            "status": "combatant",
            "healthPoints": 300,
            "attackPower": 25,
            "counterAttack": 20,
        },
        {
            "name": "Agent Ross",
            "realName": "Everett K Ross",
            "label": "ross",
            "photo": "./assets/images/ross.jpg",
            "photoWin": "./assets/images/rossWin.jpg",
            "status": "combatant",
            "healthPoints": 150,
            "attackPower": 20,
            "counterAttack": 20,
        },

    ];

    // ==============================================
    // Variables
    // ==============================================
    var initialCharacterHealth = "";

    var characterHealth = "";
    var characterAttack = "";
    var characterCounterAttack = "";

    var challengerHealth = "";
    var challengerAttack = "";
    var challengerCounterAttack = "";
    var heartherb = 0;
    var level = 1;

    // ==============================================
    // Functions
    // ==============================================
    // Adds characters to cardSpace
    var addfirstSelectionCards = () => {
        $('#firstSelectionCards').empty(); // this will remove any existing cards from selection options
        for (var i = 0; i < characters.length; i++) {
            $('#firstSelectionCards').append( // this will add the cards to selection options
                '<div class="col-md-2 col-sm-6">' +
                '<div class="card championCard" id="' + characters[i].label + '">' +
                '<img class="card-img-top" src="' + characters[i].photo + '" alt="' + characters[i].name + '">' +
                '<div class="card-body ">' +
                '<h5 class="cardName">' + characters[i].name + '</h5>' +
                '<hr class="cardNameBreak">' +
                '<p class="cardLevel"> Health: ' + characters[i].healthPoints + '</p>' +
                '<p class="cardLevel"> Attack: ' + characters[i].attackPower + '</p>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        }
    };

    addfirstSelectionCards();


    // This will toggle between the fight section and character selection
    var showFightSection = () => {
        $('#firstSelectionCards').css('display', 'none');
        $('#challengeTitle').css('display', 'none');
        $('#firstSelectionText').css('display', 'none');
        $('#battleSection').css('display', 'flex');
    };
    var hideFighters = () => {
        $('#firstSelectionCards').css('display', 'flex');
        $('#challengeTitle').css('display', 'flex');
        $('#firstSelectionText').css('display', 'flex');
        $('#battleSection').css('display', 'none');
    }



    // event listner on click when selecting your champion character
    $('.championCard').on("click", function () {
        var char = $(this).attr("id");
        for (var i = 0; i < characters.length; i++) {
            if (char === characters[i].label) {
                characters[i].status = "champion";
                characterHealth = characters[i].healthPoints;
                characterAttack = characters[i].attackPower;
                characterCounterAttack = characters[i].counterAttack;
                initialCharacterHealth = characters[i].healthPoints;

                $("#champion").append(
                    '<div class="card ' + characters[i].status + 'Card" id="' + characters[i].label + '">' +
                    '<img class="card-img-top" src="' + characters[i].photo + '" alt="' + characters[i].name + '">' +
                    '<div class="card-body ">' +
                    '<h5 class="cardName">' + characters[i].name + '</h5>' +
                    '<hr class="cardNameBreak">' +
                    '<p class="cardLevel" id="' + characters[i].status + 'HealthLevel"> Health: ' + characters[i].healthPoints + '</p>' +
                    '<p class="cardLevel" id="' + characters[i].status + 'AttackLevel"> Attack: ' + characters[i].attackPower + '</p>' +
                    '<p class="cardLevel cardStatus ' + characters[i].status + 'Text"></p>' +
                    '</div>' +
                    '</div>'
                );
                $("")
            }
        }
        challengerSelection();
        $("#Modal").modal("show");
    });
    // ===
    // add heart shaped herbs
    var heartHerb =
        '<img class = "herb" id="Herb1" src="./assets/images/heart.jpg">' +
        '<img class = "herb" id="Herb2" src="./assets/images/heart.jpg">' +
        '<img class = "herb" id="Herb3" src="./assets/images/heart.jpg">';

    // ===
    var loadHerb = () => {
        $("#heartHerbs").append(heartHerb);
    };
    loadHerb();

    // This will add characters to the fight section screen
    var addCharactersToFightSection = () => {
        $("#challenger").empty();
        $("#combatants").empty();
        for (var i = 0; i < characters.length; i++) {
            var card =
                '<div class="card ' + characters[i].status + 'Card" id="' + characters[i].label + '">' +
                '<img class="card-img-top" src="' + characters[i].photo + '" alt="' + characters[i].name + '">' +
                '<div class="card-body ">' +
                '<h5 class="' + characters[i].status + 'Name">' + characters[i].name + '</h5>' +
                '<hr class="cardNameBreak">' +
                '<div class="clearfix"><p class="cardLevel" id="' + characters[i].status + 'HealthLevel"> Health: ' + characters[i].healthPoints + '</p>' +
                '<p class="cardLevel" id="' + characters[i].status + 'AttackLevel"> Attack: ' + characters[i].attackPower + '</p></div>' +
                '<p class="cardLevel cardStatus ' + characters[i].status + 'Text "></p>' +
                '</div>' +
                '</div>';

            if (characters[i].status === "champion") {
                $(".championText").text("champion");
                $(".championName").html(characters[i].fullName)
                $("#championHealthLevel").text("Health: " + characterHealth);
                $("#championAttackLevel").text("Attack: " + characterAttack);
            }

            else if (characters[i].status === "challenger") {
                if (heartherb < 1) {
                    $("#challenger").append(card);
                    $(".challengerName").html(characters[i].fullName);
                    $(".challengerText").text("Curent challenger");
                    challengerHealth = characters[i].healthPoints;
                    challengerAttack = characters[i].attackPower;
                    challenger = characters[i].label;
                    $("#challengerHealthLevel").text("Health: " + challengerHealth);
                    $("#challengerAttackLevel").text("Attack: " + challengerAttack);
                }
                else {
                    $("#challenger").append(card);
                    $(".challengerName").html(characters[i].fullName);
                    $(".challengerText").text("Curent challenger");
                    challengerHealth = challengerHealth;
                    challengerAttack = characters[i].attackPower;
                    challenger = characters[i].label;
                    $("#challengerHealthLevel").text("Health: " + challengerHealth);
                    $("#challengerAttackLevel").text("Attack: " + challengerAttack);
                    heartherb = 0;
                }
            }

            else if (characters[i].status === "combatant") {
                $("#combatants").prepend(card);
                $(".combatantText").text("Waiting Combatant");
            }
            else {
                $("#combatants").prepend(card);
                $(".Dead_CombatantText").text("Dead_Combatant");
            }
        }

    };


    // Use modal to select challenger
    var challengerSelection = () => {
        $("#modalSpace").empty();
        for (var i = 0; i < characters.length; i++) {
            if (characters[i].status === "combatant") {
                $("#modalSpace").append(
                    '<div class="col-md-3">' +
                    '<img class="modalSpace" id="' + characters[i].label + '" src="' + characters[i].photo + '" alt="' + characters[i].name + '" data-dismiss="modal">' +
                    '</div>'
                );
            }
        }
    };

    //===
    var winModal = () => {
        for (var i = 0; i < characters.length; i++) {
            if (characters[i].status === "champion") {
                $("#modalSpace").empty();
                $("#modalSpace").append('<div class="col-md-3">' + '<img id="winImg" src="' + characters[i].photoWin + '">' + '</div>');
                $(".modal-footer").append('<button type="button" class="btn btn-dark btn-lg" data-dismiss="modal" onclick="location.reload();">Replay</button>');

                $(".modal-title").html("You are the Ruler of Wakanda!");
            }
        }
    };
    var loseModal = () => {
        $("#modalSpace").empty();
        $("#modalSpace").append('<div class="col-md-3">' + '<img id="loseImg" src="./assets/images/black_panther_title.jpg">' + '</div>');
        $(".modal-footer").append('<button type="button" class="btn btn-dark btn-lg btn-block" data-dismiss="modal" onclick="location.reload();">Replay</button>');
        $(".modal-title").html("You Lose!");
    };

    //===
    var fight = () => {
        characterHealth = Math.max(0, (characterHealth - challengerAttack));
        challengerHealth = Math.max(0, (challengerHealth - characterAttack));
        characterAttack = characterAttack + characterCounterAttack;

        $("#challengerHealthLevel").text("Health: " + challengerHealth);
        $("#championHealthLevel").text("Health: " + characterHealth);
        $("#championAttackLevel").text("Attack: " + characterAttack);
        // $("#healthBarChampion").data("aria-valuenow",characterHealth);


        if (challengerHealth <= 0) {
            for (var i = 0; i < characters.length; i++) {
                if (challenger === characters[i].label) {
                    characters[i].status = "Dead_Combatant";
                    challengerSelection();
                    $("#Modal").modal("show");
                    winGame();
                }
            }
        }
        if (characterHealth <= 0) {
            loseModal();
            $("#Modal").modal("show");
        }
    };
    //===
    var winGame = () => {
        var waiting_Combatants = 0;
        for (var i = 0; i < characters.length; i++) {
            if (characters[i].status === "combatant") {
                waiting_Combatants++;
            }
        }
        if (waiting_Combatants === 0) {
            winModal();
            $("#Modal").modal("show");

        }
    };


    // event listner on click when selecting your fighter cahracter
    $("body").on("click", 'img.modalSpace', function () {
        var nchar = $(this).attr("id");
        for (var i = 0; i < characters.length; i++) {
            if (nchar === characters[i].label) {
                characters[i].status = "challenger";
                addCharactersToFightSection();
                showFightSection();
            }
        }
    });
    //===
    $("body").on("click", 'img.herb', function () {
        var herbimage = $(this).attr("id");
        characterHealth = initialCharacterHealth;
        challengerHealth = challengerHealth;
        heartherb++;
        addCharactersToFightSection();
        $("#" + herbimage).hide();
    });

    //===
    $(".attackGrid").on("click", 'button.btn', function () {
        fight();
    });


});