var coverage = {
  'dom-mediasource-activesourcebuffers': 100,
  'dom-mediasource-sourcebuffers': 100,
  'dom-mediasource-duration': 100,
  'dom-mediasource-onsourceclose': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-mediasource-onsourceended': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-mediasource-onsourceopen': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-readystate': 100,
  'dom-mediasource-addsourcebuffer': 100,
  'dom-mediasource-clearliveseekablerange': 100,
  'dom-mediasource-endofstream': 100,
  'dom-mediasource-istypesupported': 100,
  'dom-mediasource-removesourcebuffer': {
    coverage: 90,
    comments: [
      'No test on TextTrackList (steps 7, 8)',
      'Tests on audio/video tracks (e.g. removetrack events) in mediastream-avtracks.html',
      'Step 11 (Destroy all resources for sourceBuffer) is somewhat meaningless'
    ],
    assignee: '@tidoust'
  },
  'dom-mediasource-setliveseekablerange': 100,
  'active-source-buffer-changes': 100,
  'mediasource-attach': 100,
  'mediasource-detach': 100,
  'mediasource-seeking': {
    coverage: 90,
    comments: [
      'Seems OK but...',
      'Can we do any better to check step 2, 3, and 4 than to check currentTime after seek?',
      'Relevant tests in mediasource-redundant-seek.html and mediasource-seek-during-pending-seek.html',
      'Note most other tests are against the HTML5 seek algorithm itself, do we really need them?'
    ],
    assignee: '@tidoust'
  },
  'buffer-monitoring': {
    coverage: 0,
    assignee: '@tidoust'
  },
  'duration-change-algorithm': 100,
  'end-of-stream-algorithm': 100,
  'dom-sourcebuffer-appendwindowend': 100,
  'dom-sourcebuffer-appendwindowstart': 100,
  'dom-sourcebuffer-audiotracks': 100,
  'dom-sourcebuffer-buffered': {
    coverage: 90,
    comments: 'Tests seem to cover all steps but we may want to check more complex cases that create multiple ranges',
    assignee: '@plehegar'
  },
  'dom-sourcebuffer-mode': {
    coverage: 90,
    comments: [
      'No test for step 7 on groups start/end timestamps (but hard to test)'
    ],
    assignee: '@plehegar'
  },
  'dom-sourcebuffer-onabort': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-sourcebuffer-onerror': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-sourcebuffer-onupdate': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-sourcebuffer-onupdateend': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-sourcebuffer-onupdatestart': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-sourcebuffer-texttracks': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-sourcebuffer-timestampoffset': {
    coverage: 95,
    comments: 'Not sure step 6 is tested or easily testable',
    assignee: '@plehegar'
  },
  'dom-sourcebuffer-updating': 100,
  'dom-sourcebuffer-videotracks': 100,
  'dom-sourcebuffer-abort': {
    coverage: 90,
    comments: [
      'No test for step 3 (range removal algorithm)',
      'Not sure step 5 is tested or easily testable'
    ],
    assignee: '@plehegar'
  },
  'dom-sourcebuffer-appendbuffer': {
    coverage: 100,
    comments: 'Tests in mediasource-append-buffer.html are enough to cover all steps'
  },
  'dom-sourcebuffer-remove': 100,
  'sourcebuffer-segment-parser-loop': {
    assignee: '@plehegar'
  },
  'sourcebuffer-reset-parser-state': {
    assignee: '@plehegar'
  },
  'sourcebuffer-append-error': {
    coverage: 40,
    comments: [
      'No test for step 1 (requires decode error flag to be false to lead to visible behavior)',
      'Test for step 5 could perhaps check readyState and other events to ensure end of stream algorithm actually ran',
      'The different conditions that trigger the algorithm are not really tested',
    ],
    assignee: '@plehegar'
  },
  'sourcebuffer-prepare-append': {
    coverage: 80,
    comments: [
      'No test for step 3 (HTMLMediaElement.error)',
      'No test for step 6 (but can it be tested? Size of buffer is implementation specific)'
    ],
    assignee: '@plehegar'
  },
  'sourcebuffer-buffer-append': {
    coverage: 80,
    comments: 'TODO: need to check whether Segment Parser Loop is run',
    assignee: '@plehegar'
  },
  'sourcebuffer-stream-append-loop': 0,
  'sourcebuffer-range-removal': {
    coverage: 90,
    comments: 'Not sure step 6 is tested or easily testable',
    assignee: '@plehegar'
  },
  'sourcebuffer-init-segment-received': {
    assignee: '@plehegar'
  },
  'sourcebuffer-coded-frame-processing': {
    assignee: '@plehegar'
  },
  'sourcebuffer-coded-frame-removal': {
    assignee: '@plehegar'
  },
  'sourcebuffer-coded-frame-eviction': {
    assignee: '@plehegar'
  },
  'sourcebuffer-audio-splice-frame-algorithm': {
    assignee: '@plehegar'
  },
  'sourcebuffer-audio-splice-rendering-algorithm': {
    assignee: '@plehegar'
  },
  'sourcebuffer-text-splice-frame-algorithm': {
    assignee: '@plehegar'
  },
  'dom-sourcebufferlist-length': {
    coverage: 100,
    comments: 'Typically covered by tests on activeSourceBuffers and sourceBuffers'
  },
  'dfn-sourcebufferlist-getter': {
    coverage: 100,
    comments: [
      'Typically covered by tests on activeSourceBuffers and sourceBuffers'
    ],
  },
  'dom-sourcebufferlist-onaddsourcebuffer': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-sourcebufferlist-onremovesourcebuffer': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'dom-url-createobjecturl': 100,
  'htmlmediaelement-extensions': {
    coverage: 95,
    comments: [
      'For buffered, tests cover all steps but we may want to check more complex cases that create multiple ranges'
    ],
    assignee: '@tidoust'
  },
  'dom-audiotrack-sourcebuffer': 100,
  'dom-videotrack-sourcebuffer': 100,
  'dom-texttrack-sourcebuffer': {
    coverage: 0,
    assignee: '@plehegar'
  }
};