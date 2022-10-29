# Regex Tutorial

In this tutorial, I will be discussing the wonderful world of regular expressions, aka Regex. Regular expressions or commonly called as Regex or Regexp is technically a string (a combination of alphabets, numbers and special characters) of text which helps in extracting information from text by matching, searching and sorting.

## Summary

A regular expression is an object that describes a pattern of characters. The JavaScript RegExp class represents regular expressions, and both String and RegExp define methods that use regular expressions to perform powerful pattern-matching and search-and-replace functions on text.

Let's use regex pattern match for password validation.

/^(?=._[a-z])(?=._[A-Z])(?=._[0-9])(?=._[!@#\$%\^&\*])(?=.{8,})/

## Table of Contents

- [Password Validation](#passwordvalidation)
- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

### Password Validation

Strong password validation falls under some of the most important parts of frontends and backends. As virtually every application made today has user authentication in place. So, the requirement to validate strong password has been an absolute necessity. The validation ensures that a valid and strong password is entered by the user. For this validation, regex is used in javascript. We use regular expressions and match the entered password pattern to an industry-recognized requirement to be a strong password. A password needs the following things to be a valid password:

It should be at least 8 characters long: **\*\*\*\***
It must have a number: [0 to 9]
It must have a capital alphabet: [A to Z]
It must have a small alphabet: [a to z]
It must have a special character: [!, @, #, $, %, ^, &, *]

Regular expression for password validation

/^(?=._[a-z])(?=._[A-Z])(?=._[0-9])(?=._[!@#\$%\^&\*])(?=.{8,})/

Below is the explanation of the above regex.

/ /: Contains all the patterns to match into, it acts as a container for patterns, it is at the start and end of regex patterns

^: Matches from the beginning of the string from the beginning of the line

(?=: Checks for matches in the given set of data, else returns an error. It is called positive lookahead

.: It matches one continuous word without a break in the line

\*: It matches the preceding tokens

[: Matches all the characters in the set

a-z: Matches any character in the range of a to z alphabets (only small alphabets)

]: End of set

): End of positive lookahead

(?=.\*[A-Z]): Same as the above positive lookahead but the difference is it looks in the range of A to Z (capital)

(?=.\*[!@#\$%\^&\*]): Same positive lookahead but the character set contains special characters

!: Matches the exclamation mark (!)

@: Matches the at sign (@)

#: Matches the Hash symbol (#)

\$: Escapes the special character and matches the dollar sign ($)

%: Matches the percentage symbol (%)

\^: Escapes the special character and caret symbol (^)

&: Matches the ampersand symbol (&)

\*: Escapes the special character and matches the asterisk symbol (\*)

(?=.\*{8,}): Same as positive lookahead but here {8,}, it matches 8 or more token

#### Password Validation Snapshot

<img width="650" alt="image" src="https://user-images.githubusercontent.com/54869821/198815813-cf5cc038-4f78-47e8-b1ef-0f36a87f92ce.png">

### Anchors

/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/

Anchors expression's are ^ to start and $ to end.

### Quantifiers

/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/

This expression has is a + to communicate there is another sequence to be matched as a greedy quantifier. Additionally {2,6} as another greedy quantifier to specify the input should be a minimun of 2 charactors and a max of 6.

### OR Operator

"OR" syntax is denoted with a vertical line character "|"

If you are looking for programming languages: HTML, CSS, javascript the corresponding RegEx would look like: html|css|javascript(script)

### Character Classes

A character class allows you to match any symbol from a certain character set. it is also known as a character set.

Most commonly character classes:

\d - match a digit or character from 0 to 9. \s - match a whitespace symbol such a space, tab (\t), a newline (\n), ect. \w - W stand for word character. it matches the ASC|| character [A-Za-z0-9] including Latin alphabets, digits, and the underscore(\_).

### Flags

Flags are optional parameters that we can add to a plain expression to make it search in a different way. Each flag is denoted by a sinlge alphabetic character, and servesdifferent purposes in modifying the expression's searching behaviour.

i (Ignore Casing) Makes the expression search case-insensitively. g (Global) Makes the expression search for all occurences. s (Dot All) Makes the wild character . match newlines as well. m (Multiline) Makes the boundary characters ^ and $ match the beginning and ending of every single line instead of the beginning and ending of the whole string. y (Sticky) Makes the expression start its searching from the index indicated in its lastIndex property. u (Unicode) Makes the expression assume individual characters as code points, not code units, and thus match 32-bit characters as well.

### Grouping and Capturing

Grouping is done with the round brackets or parentheses and allows to to group a certain part of the regular expression together.

/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/

This expression would be split like so:

1st - ([a-z0-9_.-]+)

2nd - ([\da-z.-]+)

3rd - ([a-z.]{2,6})

### Bracket Expressions

Brackets indicate a set of characters to match. you will often see ranges of the alphabet or numerals. [A-Za-z] [0-9].

([a-z0-9_.-]+)

This grouping it will look for anything a-z or 0-9

### Greedy and Lazy Match

/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/

This example we have only used greedy quantifiers + and {}, meaning that it will allow the match to expand as long as it neess to go. If these quantifiers were lazy quantifiers, they would appear as +? or {}?, this will direct the system to make the shortest match.

### Boundaries

The (\b) is an anchor like the caret (^) and the dollar sign ($) it matches a position that is called a "word boundary". the word boundary match is zero-length.

console.log('hello, js!'.match(/\bjs\b/)):

The output would be ["js"]

### Back-references

A back-reference in a regular expression indetifies a previously matched group and looks for exaclty the same text again. They are specified with a backslash and a single digit. \1

### Look-ahead and Look-behind

In some cases we need to find only those matches for a pattern that are followed or preceeded by another pattern the syntax for that is called look-ahead and look-behind.

Look-ahead uses syntax that looks like this: X(?=Y). This means "look for X, but match only if followed by Y.

Look-behind is similar bit looks behind to match a pattern only if there is something before it. the syntax looks like: (?<=Y)X. Matches x but only if Y is before it.

## Author

- <a href="https://github.com/VaishaliQA"> Vaishali Patel </a>
