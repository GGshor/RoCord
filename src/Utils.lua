local Utils = {}


function Utils.CheckArgumentTypes(types: {string}, ...: any)
    for index, argument in ipairs({...}) do
        if typeof(argument) ~= types[index] then
            if types[index]:find("?") and typeof(argument) == "nil" then
                continue
            end
            error("Expected " .. types[index] .. ", got " .. typeof(argument))
        end
    end
end

function Utils.CheckArgumentCharacters(limits: {number}, ...:string)
    for index, argument in ipairs({...}) do
       if argument:len() > limits[index] then
        error("Expected " .. tostring(limits[index]) .. "characters or less, got " .. tostring(argument:len()))
       end
    end
end


return Utils