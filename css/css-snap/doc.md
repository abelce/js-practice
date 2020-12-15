# 使用scroll-snap实现吸附效果

### 1、 效果:


### 2、代码

css:
```css
.list {
    display: flex;
    flex-direction: row;
    overflow: auto;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
}

.content {
    flex-wrap: 0;
    flex-shrink: 0;
    height: 100px;
    width: 300px;
    scroll-snap-align: start;
    display: inline-block;
    text-align: center;
    font-size: 48px;
}
```

```html
<div class="list">
    <div class="content">1</div>
    <div class="content">2</div>
    <div class="content">3</div>
    <div class="content">4</div>
    <div class="content">5</div>
</div>
```

