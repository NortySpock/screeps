module.exports.loop = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
    }
    
    var harvesterCreepProt = [WORK,CARRY,MOVE];
    // console.log(Game.creeps.length === undefined);
    var numCreeps = Object.keys(Game.creeps).length;
    if(numCreeps < 4 && Game.spawns['Spawn1'].canCreateCreep(harvesterCreepProt)===0){
        Game.spawns['Spawn1'].createCreep(harvesterCreepProt);
    }
}