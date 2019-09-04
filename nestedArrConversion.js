function convertArray(input){
    let hasil = []
    for(let i=0; i<input.length; i++){
        let obj ={}
        obj.number=input[i][0]
        obj.name=input[i][1]
        obj.position=input[i][2]
        obj.pointsPerGame=input[i][3]
        hasil.push(obj)
    }
    return hasil
}

var roster = [
    [12,"Joe Schmo","Center",[14,32,7,0,23]],
    [9,"Ms. Buckets","Point Guard",[19,0,11,22,0]],
    [31,"Harvey Kay","Shooting Guard",[0,30,16,0,25]],
    [7,"Sally Talls","Power Forward",[18,29,26,31,19]],
    [22,"MK DiBoux","Small Forward",[11,0,23,17,0]],
]

var roster = convertArray(roster)
console.log(roster)