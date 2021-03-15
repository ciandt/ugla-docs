/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import icon from '@site/static/img/figma.png';

export default function FigmaLink({
  figmaUrl,
}) {
  return (
    <div className='figma-link'>
      {figmaUrl && (
        <a className="link" href={figmaUrl} target="_blank">
          <img src={icon} className="icon"/>
          <span className="text">Veja o protótipo no Figma</span>
        </a>
      )}
    </div>
  );
}
