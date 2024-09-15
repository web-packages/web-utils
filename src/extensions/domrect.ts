import { DOMRectUtil } from "../utils/domrect";

// i.e. const size = element.intrinsicRect;
if (Object.getOwnPropertyDescriptor(Element.prototype, "intrinsicRect") == undefined) {
    Object.defineProperty(Element.prototype, "intrinsicRect", {
        get: function() {
            return DOMRectUtil.intrinsicOf(this);
        }
    });
}