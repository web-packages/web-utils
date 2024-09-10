import { MeasuredSize } from "../types";

/** This class provides a util features for an element. */
export class ElementUtil {
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement) {
        target.getBoundingClientRect();
    }

    /**
     * Gets a intrinsic size(i.e. width, height) of a given element.
     * 
     * See Also, If an element with a display property of 'contents' has multiple children,
     * it cannot accurately determine its size, so it must be only one child.
     */
    static intrinsicSizeOf(element: Element): MeasuredSize {
        while(element) {
            const style = getComputedStyle(element);
            const width = parseFloat(style.width);
            const height = parseFloat(style.height);
            const paddingL = parseFloat(style.paddingLeft);
            const paddingR = parseFloat(style.paddingRight);
            const paddingT = parseFloat(style.paddingTop);
            const paddingB = parseFloat(style.paddingBottom);
            const borderL = parseFloat(style.borderLeft);
            const borderR = parseFloat(style.borderRight);
            const borderT = parseFloat(style.borderTop);
            const borderB = parseFloat(style.borderBottom);
            const boxSizing = style.boxSizing;

            if (style.display == "contents") {
                let children = Array.from(element.children).filter(e => e.tagName != "STYLE" && e.tagName != "SCRIPT");
                if (children.length != 1) {
                    throw new Error("An element with a display property of contents must have only one child to define its intrinsic size.");
                }

                element = children[0];
                continue;
            }

            let totalWidth = width;
            let totalHeight = height;

            // When box-sizing is set to `content-box`, add padding and border to the width and height,
            // because the reported width/height doesn't include these in content-box mode.
            if (boxSizing == "content-box") {
                totalWidth += paddingL + paddingR + borderL + borderR;
                totalHeight += paddingT + paddingB + borderT + borderB;
            }

            return {
                width: totalWidth,
                height: totalHeight
            };
        }
    }
}