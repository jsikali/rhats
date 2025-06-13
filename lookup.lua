--main file, should take a student name/student id
--and return schedule if available
--maybe add qol later but whatever im just making this exist atm

SNoSID = arg[1] --student name or student id? (--name or --id i think)
--require next arg in quotes for consistency,,,??? i guess
Input = arg[2] --gets better name once parsed

Termcode = "202610" --TODO: adj this (and this file tbh) to get this w/a flag OR default to most recent

function GetUserInfo(id)
   --likely slow af because this is data isnt ordered
   local filepath = "./rhatsources/parsed/" .. Termcode .. ".usr" --..... why are string concats like this tf

   for line in io.lines(filepath)
   do
      if string.match(line, id) ~= nil
      then
         --assume this is the only match bc if its not thatd be quite curious
         --parse the line (ref rhatsources for formaters)
         io.write(line) --ggez except for a header
      end
   end
end

function Main (SNoSID, Input)
   if SNoSID == "--name"
   then
      --try to identify student, get id
		--leave to later bc this reqs parsing whats in data rn
		--and eventually writing a hopefully better lookup
      --just do this later bc this may req some fzf esque nonsense for generic names
   elseif SNoSID == "--id"
	then
      --directly lookup schedule
		local sid = Input
      print("getting user info for ", Input)
      local sdata = GetUserInfo(sid)
   end
end

Main(SNoSID, Input) --lua has no req for main blah blah this makes sense to me