1. The program ignores non-alphabetical characters, since they cannot be vowels.
Input Example: "1"
Output Example: 0

2. The program adds ay to the end of any word that begins with a specific lower case vowel.
Input Example: "a"
Output Example: aay

3. The program adds ay to the end of any word that begins with any lower case vowel.
Input Example: "array"
Output Example: arrayay

4. The program beginning with a consonant, move consonant to the end and add a y to the end
Input Example: "start"
Output Example: tartsay

5. For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
Input Example: "start"
Output Example: artstay

6. If the first consonants include "qu", move the "u" along with the "q".
Input Example: "quite"
Output Example: itequay

7. For words beginning with "y", treat "y" as a consonant.
Input Example: "yellow"
Output Example: ellowyay

8. Program recognizes characters regardless of capitalization.
Input Example: "START"
Output Example: artstay
