--main file, should take a student name/student id
--and return schedule if available
--maybe add qol later but whatever im just making this exist atm

SNoSID = arg[1] --student name or student id? (--name or --id i think)
--require next arg in quotes for consistency,,,??? i guess
Input = arg[2] --gets better name once parsed

function ParseInput (SNoSID, Input)
   if SNoSID == "--name"
   then
      --try to identify student, get id
		--leave to later bc this reqs parsing whats in data rn
		--and eventually writing a hopefully better lookup
   elseif SNoSID == "--id"
	then
      --directly lookup schedule
		--need to figure out submodules first
   end
end

ParseInput(SNoSID, Input)