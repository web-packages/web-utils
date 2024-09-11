import { ElementUtil } from "../utils/element";

// i.e. const size = element.intrinsicSize;
Object.defineProperty(Element.prototype, "intrinsicSize", {
    get: function() {
        return ElementUtil.intrinsicSizeOf(this);
    }
});

// i.e. const width = element.intrinsicWidth;
Object.defineProperty(Element.prototype, "intrinsicWidth", {
    get: function() {
        return ElementUtil.intrinsicSizeOf(this).width;
    }
});

// i.e. const height = element.intrinsicHeight;
Object.defineProperty(Element.prototype, "intrinsicHeight", {
    get: function() {
        return ElementUtil.intrinsicSizeOf(this).height;
    }
});

// i.e. element.reflow();
Object.defineProperty(Element.prototype, "reflow", {
    get: function() {
        return ElementUtil.reflow(this);
    }
});