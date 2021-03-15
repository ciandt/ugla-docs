/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export default function EmbedRender({
  embedUrl,
}) {
  return (
    <div className="embed-render">
      {embedUrl && (
        <iframe
          width="800"
          height="450"
            src={"https://www.figma.com/embed?embed_host=share&url=" + embedUrl + "&viewport%3D-5441%252C168%252C0.6129032373428345%26scaling%3Dscale-down-width"} allowfullscreen></iframe>
      )}
    </div>
  );
}