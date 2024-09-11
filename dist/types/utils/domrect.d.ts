import "../extensions/domrect";
import { IntrinsicRect } from "../types";
/** This class provides util features for an `DOMRect`. */
export declare class DOMRectUtil {
    /**
     * Gets an intrinsic size (i.e., width, height) and DOMRect values
     * of a given element, including margins and position.
     */
    static intrinsicOf(element: Element, computedStyle?: CSSStyleDeclaration): IntrinsicRect;
}
