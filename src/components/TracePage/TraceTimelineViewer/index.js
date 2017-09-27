// @flow

// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';

import VirtualizedTraceView from './VirtualizedTraceView';
import type { Trace } from '../../../types';

import './grid.css';
import './index.css';

type TraceTimelineViewerProps = {
  trace: ?Trace,
  currentViewRange: [number, number],
  textFilter: ?string,
};

export default function TraceTimelineViewer(props: TraceTimelineViewerProps) {
  const { currentViewRange, textFilter, trace } = props;
  return (
    <div className="trace-timeline-viewer">
      <VirtualizedTraceView
        textFilter={textFilter}
        trace={trace}
        zoomStart={currentViewRange[0]}
        zoomEnd={currentViewRange[1]}
      />
    </div>
  );
}
