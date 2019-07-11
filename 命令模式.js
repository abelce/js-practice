var btn1 = document.getElementById("id1");
var btn2 = document.getElementById("id2");
var btn3 = document.getElementById("id3");

function clickEnv(btn, func) {
    btn.onclick = func;
}

const command = {
    add: function add() {
        console.log('add');
    },
    remove: function remove() {
        console.log('remove');
    },
    update: function update() {
        console.log('update');
    }
}

clickEnv(btn1, command.add);
clickEnv(btn2, command.remove);
clickEnv(btn3, command.update);