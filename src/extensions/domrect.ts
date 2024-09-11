import { DOMRectUtil } from "../utils/domrect";

// i.e. const size = element.intrinsicRect;
Object.defineProperty(Element.prototype, "intrinsicRect", {
    get: function() {
        return DOMRectUtil.intrinsicOf(this);
    }
});