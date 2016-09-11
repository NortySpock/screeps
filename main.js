module.exports.loop = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
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
    // console.log(Game.spawns['Spawn1'].canCreateCreep(harvesterCreepProt));
    if(Game.creeps.length < 3 && Game.spawns['Spawn1'].canCreateCreep(harvesterCreepProt)){
        Game.spawns['Spawn1'].createCreep(harvesterCreepProt);
    }
}