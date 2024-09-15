import { ElementUtil } from "../utils/element";

// i.e. const size = element.intrinsicSize;
if (Object.getOwnPropertyDescriptor(Element.prototype, "intrinsicSize") == undefined) {
    Object.defineProperty(Element.prototype, "intrinsicSize", {
        get: function() {
            return ElementUtil.intrinsicSizeOf(this);
        }
    });
}

// i.e. const width = element.intrinsicWidth;
if (Object.getOwnPropertyDescriptor(Element.prototype, "intrinsicWidth") == undefined) {
    Object.defineProperty(Element.prototype, "intrinsicWidth", {
        get: function() {
            return ElementUtil.intrinsicSizeOf(this).width;
        }
    });
}

// i.e. const height = element.intrinsicHeight;
if (Object.getOwnPropertyDescriptor(Element.prototype, "intrinsicHeight") == undefined) {
    Object.defineProperty(Element.prototype, "intrinsicHeight", {
        get: function() {
            return ElementUtil.intrinsicSizeOf(this).width;
        }
    });
}

// i.e. element.reflow();
if (Object.getOwnPropertyDescriptor(Element.prototype, "reflow") == undefined) {
    Object.defineProperty(Element.prototype, "reflow", {
        get: function() {
            return ElementUtil.reflow(this);
        }
    });
}