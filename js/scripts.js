
var pigLatin = function(inputWord)
{
    var vowels = ["a", "e", "i", "o", "u"];
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
                for(var i = 0; i < input_array.length; i++)
                {
                    var input_array = input_array;

                    var hold_letter = input_array.shift();

                    for (var j = 0; j < vowels.length; j++)
                    {
                    
                        if (input_array[i] === vowels[j])
                        {
                            input_array.push("ay");
                            return input_array.join("");
                        }
                         else
                         {

                         }

                    }
                }
                input_array.push("ay");
                return input_array.join("");


        }
};

 // fire up jQuery
