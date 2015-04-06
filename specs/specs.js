describe('pigLatin', function() {
    it("For words that start with a vowel, add 'ay' to the end", function() {
        expect(pigLatin('apple')).to.equal('appleay');
    });


    it("For words that start with one or more consonants, move all of the first consecutive consonants to the end and add ay", function(){
        expect(pigLatin('celery')).to.equal('elerycay');
    });
});


/*
    it("is false if the coordinates are not horizontally, vertically, or diagnally in line with each other",      function(){
      expect(queenAttack([1,1],[2,3])).to.equal(false);
 });

*/
