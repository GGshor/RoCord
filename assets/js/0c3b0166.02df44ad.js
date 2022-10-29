"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[864],{59329:e=>{e.exports=JSON.parse('{"functions":[{"name":"CheckArgumentTypes","desc":"Checks if the given types are the same as arguments","params":[{"name":"types","desc":"The array with the types","lua_type":"{string}"},{"name":"...","desc":"Arguments","lua_type":"any"}],"returns":[],"function_type":"static","errors":[{"lua_type":"\\"Unexpected\\"","desc":"If one of the arguments is not the same as given type it will error"}],"source":{"line":44,"path":"src/Utils.lua"}},{"name":"CheckArgumentCharacters","desc":"Checks if the arguments doesn\'t go over the character limit.","params":[{"name":"limits","desc":"Array of limits","lua_type":"{number}"},{"name":"...","desc":"Arguments","lua_type":"string"}],"returns":[],"function_type":"static","errors":[{"lua_type":"\\"Unexpected\\"","desc":"When character amount is above the limits"}],"source":{"line":65,"path":"src/Utils.lua"}},{"name":"CheckUrl","desc":"Checks if the url is valid and also does get a get to be sure.","params":[{"name":"url","desc":"The url to check","lua_type":"string"}],"returns":[],"function_type":"static","errors":[{"lua_type":"\\"InvalidURL\\"","desc":"Given url is invalid"},{"lua_type":"\\"BadResponse\\"","desc":"Got bad response from url"}],"source":{"line":83,"path":"src/Utils.lua"}},{"name":"RGBtoHex","desc":"Transforms Color3 to Hex value","params":[{"name":"color","desc":"The color3 to transform","lua_type":"Color3"}],"returns":[{"desc":"The new hex value","lua_type":"string"}],"function_type":"static","source":{"line":102,"path":"src/Utils.lua"}},{"name":"HextoRGB","desc":"Transforms Hex value back to Color3.","params":[{"name":"hex","desc":"The hex value to transform","lua_type":"string"}],"returns":[{"desc":"The new color3 value","lua_type":"Color3"}],"function_type":"static","source":{"line":113,"path":"src/Utils.lua"}}],"properties":[],"types":[],"name":"Utils","desc":"Holds the limits in the class so you don\'t forget them","source":{"line":14,"path":"src/Utils.lua"}}')}}]);