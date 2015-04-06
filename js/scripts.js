

var pigLatin = function(inputWord)
{

    var input_array = inputWord.split("");

    // var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','a'];
    // var vowels = ['a','e','i','o','u'];

    // var first_char = inputWord.slice(0,2);
     // first char of inputWord

     var first_char = input_array[0];

    if (first_char === ("a" ||"e"||"i"||"o"||"u"))
    {
                input_array.push("ay");
                return input_array.join("");
                //return (inputWord = inputWord + 'ay');
    }

    else
        {
                var hold_letter = input_array.shift();

                // input_array = input_array.pop();
                input_array.push(hold_letter);
                input_array.push("ay");

                return input_array.join("");

        }
};

 // fire up jQuery
