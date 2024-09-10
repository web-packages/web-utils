import { MeasuredSize } from "../types";
/** This class provides a util features for an element. */
export declare class ElementUtil {
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement): void;
    /**
     * Gets a intrinsic size(i.e. width, height) of a given element.
     *
     * See Also, If an element with a display property of 'contents' has multiple children,
     * it cannot accurately determine its size, so it must be only one child.
     */
    static intrinsicSizeOf(element: Element): MeasuredSize;
}
