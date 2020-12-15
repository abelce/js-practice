function dfs(node) {
    let nodes = [];
    let stack = [];
    if (node) {
        stack.push(node);

        while (node.length) {
            let item = stack.pop();
            let children = item.children;
            nodes.push(item)
            for (let i = children.length - 1; i >= 0; i--) {
                stack.push(children[i]);
            }
        }
    }
    return nodes;
}

function dfs2(node) {
    let nodes = [];
    let stack = [];

    if (node) {
        stack.push(node);
        while (stack.length) {
            let item = stack.pop();
            let children = item.children;
            for (let i = children.length; i >= 0; i--) {
                stack.push(children[i])
            }
            nodes.push(item)
        }
    }
}