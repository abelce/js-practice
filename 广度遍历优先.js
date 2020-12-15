function bfs(node) {
    let nodes = [];
    let stack = [];

    if (node) {
        stack.push(node)
        while(stack.length) {
            let item = stack.shift();
            let children = stack.children;
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i]);
            }
            nodes.push(item);
        }
    }
}