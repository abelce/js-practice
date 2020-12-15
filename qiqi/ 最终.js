//商品
class Product {
    id = '';
    name = '';
    merchantID = '';
    skus = [];
    
    constructor(data) {
        this.id = data.id;
        // 商品名称
        this.name = data.name;
        // 商家ID
        this.merchantID = data.merchantID;
        // sku
        this.skus = [{
            id: 'xxxxxxxxx',
            startDate: '2020-03-30',
            endDate: '2020-10-30',
            time: '08:00',
            price: {
                // 价格以整数的方式存储
                amount: 10000,
                currency: 'CNY',
            }
        }];

    }

    // 修改价格
    changePrice(id, price) {
        this.skus.map(sku => {
            if (sku === id) {
                sku.price = price;
            }
        })
    }

    // 降价
    // 查询该产品的收藏信息，并发送通知
    reduction() {

    }
}

// 用户
class User {
    id = '';
    constructor(data) {
        this.id = data.id;
    }

    // 收藏产品
    markProduct(data) {
        new Mark({
            source: 'product',
            sourceID: data.id,
            userID: this.id,
            autoSendMessage: true,
        })
    }

    // 收藏商家
    markMerchant(data) {
        new Mark({
            source: 'merchant',
            sourceID: data.id,
            userID: this.id,
            autoSendMessage: true,
        })
    }
}

// 商家
class Merhcant extends User {
    constructor() {
        super();
    }

    // 创建产品
    createProduct() {
        const params = {}
        new Product(params);
    }

    // 修改价格
    changePrice(product) {
        product.changePrice({
            amount: 20000,
            currency: 'CNY',
        });
    }
}

// 收藏
class Mark {
    // 收藏id
    id = '';
    // 资源的类型
    source = '';
    // 资源的ID
    sourceID = '';
    // 用户ID
    userID = '';
    // 是否自动接收降价通知
    autoSendMessage = true;
    constructor(data) {
        this.id = data.id;
        this.source = data.source;
        this.sourceID = data.sourceID;
        this.userID = data.userID;
        this.autoSendMessage = data.autoSendMessage;
    }
}