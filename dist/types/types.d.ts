/** Signature for the type that defines a measured sizes(i.e. width, height) of an element. */
export type MeasuredSize = {
    width: number;
    height: number;
};
declare global {
    interface Element {
        intrinsicSize: MeasuredSize;
        intrinsicWidth: number;
        intrinsicHeight: number;
        reflow: VoidFunction;
    }
}
