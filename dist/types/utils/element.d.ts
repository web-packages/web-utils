import "../extensions/element";
import { IntrinsicSize } from "../types";
/** This class provides util features for an `Element`. */
export declare class ElementUtil {
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement): void;
    /**
     * Gets an intrinsic size (i.e., width, height) of a given element,
     * including margins and position.
     *
     * See Also, If an element with a display property of 'contents' has multiple children,
     * it cannot accurately determine its size, so it must be only one child.
     */
    static intrinsicSizeOf(element: Element, computedStyle?: CSSStyleDeclaration): IntrinsicSize;
}
