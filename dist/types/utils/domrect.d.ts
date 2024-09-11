import "../extensions/domrect";
import { IntrinsicRect } from "../types";
/** This class provides util features for an `DOMRect`. */
export declare class DOMRectUtil {
    static intrinsicOf(element: HTMLElement, computedStyle?: CSSStyleDeclaration): IntrinsicRect;
}
