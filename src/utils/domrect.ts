import { ElementUtil } from "./element";
import { IntrinsicRect } from "../types";

/** This class provides util features for an `DOMRect`. */
export class DOMRectUtil {
    /**
     * Gets an intrinsic size (i.e., width, height) and DOMRect values
     * of a given element, including margins and position.
     */
    static intrinsicOf(element: Element, computedStyle?: CSSStyleDeclaration): IntrinsicRect {
        const style = computedStyle ?? getComputedStyle(element);
        const size = ElementUtil.intrinsicSizeOf(element, style);
        const rect = element.getBoundingClientRect();

        // Merges results with each other, and return it.
        return new DOMRect(rect.x, rect.y, size.width, size.height);
    }
}