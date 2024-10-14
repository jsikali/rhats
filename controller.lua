--[[
   okay so basically quick plan (bc i deleted everything from before lol)
   function to generate strings of a certain length and print to stdout
   function (which i think should be used w/coroutines.... smth smth multithreading) that read from stdin and check if valid pass
   function that is called w/said valid passwords and runs the js w/pass as input (and user that should be an arg as well)
   also somewhere in all of this think of having a killswitch (make a file titled w/user and fill w/pass, check if that exists, if yes then terminate? idk)
   pray that i figure out how to get the string generation to work on multiple machines and or be somewhat efficient ...??? dunno abt that
   somewhere in all of this work on my actual homework
   lalala. whatever! author me (!), start date oct 13 2024, o7
--]]

-- this should go to stdout
function stringGenerator(length)
   -- hhh i dont want to think about this LOL
   -- for the sake of my academic survival i will not be writing this today. maybe tomorrow but not rn
end

-- takes stdout and passes to checks below (could inline probably... that'd be ugly? idk)
-- if non 0 result, try to use
-- i am getting lost in the sauce rn. um
-- this should check if valid, i think use the 0 check in the indiv funcs? just call this head empty too LOL
function validPass(str)
   if upperLowerNum(str) *
      upperLowerNonalnum(str) *
      lowerNumNonalnum(str) *
      upperLowerNumNonalnum(str) ~= 0 then
         if checkIfCorrect(str) then do return end end; -- s.o. page says thats a way to exit. sure hope they're right!
   end
end

-- PRAYING i got this right i will give up all my bad programming takes to get this right
function upperLowerNum(str)
   return select(2, string.gsub(str, "%u", "")) * select(2, string.gsub(str, "%l", "")) * select(2, string.gsub(str, "%d", ""));
end

function upperLowerNonalnum(str)
   return select(2, string.gsub(str, "%u", "")) * select(2, string.gsub(str, "%l", "")) * select(2, string.gsub(str, "[%~%`%!%@%#%$%%%^%&%*%(%)%_%-%+%=%{%[%}%]%|%%:%;\"\'%<%,%>%.%?%/%%s}]", ""));
end

function lowerNumNonalnum(str)
   return select(2, string.gsub(str, "%l", "")) * select(2, string.gsub(str, "%d", "")) * select(2, string.gsub(str, "[%~%`%!%@%#%$%%%^%&%*%(%)%_%-%+%=%{%[%}%]%|%%:%;\"\'%<%,%>%.%?%/%%s}]", ""));
end

function upperLowerNumNonalnum(str)
   return select(2, string.gsub(str, "%u", "")) * select(2, string.gsub(str, "%l", "")) * select(2, string.gsub(str, "%d", "")) * select(2, string.gsub(str, "[%~%`%!%@%#%$%%%^%&%*%(%)%_%-%+%=%{%[%}%]%|%%:%;\"\'%<%,%>%.%?%/%%s}]", ""));
end

function checkIfCorrect(potentialPass)
   -- return true if the stdout from this equals the input (and make sure the js just prints the input w/nothing adtl)
   io.stdout("node heubf_la.js " .. arg[2] .. " " .. potentialPass);
   if io.stdin() == potentialPass then return true end; -- doesnt need to be a one-liner. but it can be! (mindless indulgence)
end