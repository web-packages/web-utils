
/**
 * Signature for the type that defines a measured intrinsic layout size values
 * (i.e. width, height) of an element.
 */
export type IntrinsicSize = {width: number, height: number};

/** Signature for the type that defines a intrinsic layout size values and DOMRect values. */
export type IntrinsicRect = DOMRect;

declare global {
    interface Element {
        intrinsicSize: IntrinsicSize;
        intrinsicRect: IntrinsicRect;
        intrinsicWidth: number;
        intrinsicHeight: number;
        reflow: VoidFunction;
    }
}