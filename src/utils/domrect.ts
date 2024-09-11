import "../extensions/domrect";

import { ElementUtil } from "./element";
import { IntrinsicRect } from "../types";

/** This class provides util features for an `DOMRect`. */
export class DOMRectUtil {
    static intrinsicOf(element: HTMLElement, computedStyle?: CSSStyleDeclaration): IntrinsicRect {
        const style = computedStyle ?? getComputedStyle(element);
        const size = ElementUtil.intrinsicSizeOf(element, style);
        const rect = element.getBoundingClientRect();

        // Merges results with each other, and return it.
        return new DOMRect(rect.x, rect.y, size.width, size.height);
    }
}