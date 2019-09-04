'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
  // your convert code here

  var arr_key = nestedArray[0]

  var arr_data = []
  for (let i = 1; i < nestedArray.length; i++) {
    arr_data.push(nestedArray[i])
  }
  
  let arr_result = []
  var obj = {}   
  for (let i = 0; i < arr_data.length; i++) {

    for (let j = 0; j < arr_key.length; j++) {
        obj[arr_key[j]] = arr_data[i][j]
    }

    arr_result.push(obj)
    obj = {}
    
  }
  return arr_result
}
convert_roster_format(roster)
console.log(convert_roster_format(roster));


// let object_roster = convert_roster_format(roster)
// console.log(object_roster[2]) X

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

// console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true X

module.exports = {
  convert_roster_format
}
