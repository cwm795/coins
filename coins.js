var input = document.getElementById("input");

input.addEventListener("keyup", function(e) {
    event.preventDefault();
    if (event.keyCode === 13) {
        input = input.value

        function coinCounter(input) {
            // Initialize a JavaScript object to hold the coins
            var coinPurse = {};

            coinPurse.quarters = 0;
            coinPurse.dimes = 0;
            coinPurse.nickels = 0;
            coinPurse.pennies = 0;


            coinPurse.quarters = Math.floor(input / .25);
            remainder = (input % .25);
            coinPurse.dimes = Math.floor(remainder / .10);
            remainder = (remainder % .10);
            coinPurse.nickels = Math.floor(remainder / .05);
            remainder = (remainder % .05);
            coinPurse.pennies = Math.floor(remainder / .01);
            remainder = (remainder % .01);


            return coinPurse;

        }

        var coins = coinCounter(input)
        console.log(coins, "test");
    }


});