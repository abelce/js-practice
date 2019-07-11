function getNode(node, id) {
    while(node) {
        if (node.id === id) {
            return node;
        }
        node = nextElement(node);
    }
    return null;
}


function nextElement(node) {
    if (node.children.length) {
        return node.children[0];
    }
    
    if (node.nextElementSibling) {
        return node.nextElementSibling;
    }

    while(node) {
        if (node.parentNode.nextElementSibling) {
            return node.parentNode.nextElementSibling;
        }
        node = node.parentNode;
    }

    return null;
}