
let factories = {}
function define(moduleName, dependencies = [], factory) {
    factory.dependencies = dependencies;
    factories[moduleName] = factory;
}
function require(mods, callback) {
    let res = mods.map(mod => {
        let factory = factories[mod];
        let dependencies = factory.dependencies;
        let exp
        require(dependencies, function(...arg) {
            exp = factory.apply(null, arg);
        });
        return exp;
    });
    callback.apply(null, res);
}
define('name', [], function() {
    return 'abelce';
})

define('age', ['name'], function(name) {
    return name + 9;
})

require(['age'], function(name) {

    console.log(name)
})
