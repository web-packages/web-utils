<div align="center">
    <img width="200px" src="https://github.com/user-attachments/assets/9fe86de5-61d7-4a89-ab9d-702ff1c0c901">
    <h1>Web Utility</h1>
    <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v1.2.20</th>
          </tr>
        </tbody>
    </table>
</div>

# Introduction
This package provides additional Util features for the Web standard API.

> See Also, If you want the change-log by version for this package. refer to [Change Log](CHANGELOG.md) for details.

# Usage
```ts
import { ElementUtil, DOMRectUtil } from "@web-package/utility";

// Gets an intrinsic size(i.e. width, height) of a given element.
ElementUtil.intrinsicSizeOf(target);

// Gets an intrinsic size and DOMRect values of a given element.
DOMRectUtil.intrinsicOf(target);

// Gets an intrinsic size(i.e. width, height) of an element by getter calling.
const size = target.intrinsicSize;

// Gets an intrinsic size and DOMRect values of an element by getter calling.
const rect = target.intrinsicRect;

// Gets an intrinsic width of an element by getter calling.
const width = target.intrinsicWidth;

// Gets an intrinsic height of an element by getter calling.
const height = target.intrinsicHeight;
```
