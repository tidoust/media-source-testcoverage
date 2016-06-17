var coverage = {
  'widl-MediaSource-activeSourceBuffers': {
    coverage: 100,
    assignee: '@tidoust'
  },
  'widl-MediaSource-sourceBuffers': 100,
  'widl-MediaSource-duration': 100,
  'widl-MediaSource-onsourceclose': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-MediaSource-onsourceended': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-MediaSource-onsourceopen': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-MediaSource-readyState': 100,
  'widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type': {
    coverage: 90,
    comments: [
      'Test for step 1 in mediasource-addsourcebuffer incorrectly assumes InvalidAccessError instead of TypeError',
      'No test on generate timestamps flag (but this requires audio/mpeg audio/aac support)'
    ],
    assignee: '@tidoust'
  },
  'widl-MediaSource-clearLiveSeekableRange-void': {
    coverage: 100,
    assignee: '@tidoust'
  },
  'widl-MediaSource-endOfStream-void-EndOfStreamError-error': 100,
  'widl-MediaSource-isTypeSupported-boolean-DOMString-type': {
    coverage: 90,
    comments: 'Test is implementation-specific as it assumes some codecs are supported',
    assignee: '@tidoust'
  },
  'widl-MediaSource-removeSourceBuffer-void-SourceBuffer-sourceBuffer': {
    coverage: 90,
    comments: [
      'No test on TextTrackList (steps 7, 8)',
      'Tests on audio/video tracks (e.g. removetrack events) in mediastream-avtracks.html',
      'Step 11 (Destroy all resources for sourceBuffer) is somewhat meaningless'
    ],
    assignee: '@tidoust'
  },
  'widl-MediaSource-setLiveSeekableRange-void-double-start-double-end': {
    coverage: 100,
    assignee: '@tidoust'
  },
  'active-source-buffer-changes': {
    coverage: 100,
    assignee: '@tidoust'
  },
  'mediasource-attach': {
    coverage: 70,
    comments: [
      'Test on step 1 in PR3082: https://github.com/w3c/web-platform-tests/pull/3082',
      'No test on not e.g. firing suspend event (step 4.3)',
      'Basically all tests in the test suite use the sourceopen event fired at step 3'
    ],
    assignee: '@tidoust'
  },
  'mediasource-detach': {
    coverage: 95,
    comments: 'There may be other initial conditions to test',
    assignee: '@tidoust'
  },
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
    comments: 'Hmm, shouldn\'t the event steps in that algorithm be dropped? HTML5.1 already triggers these events whenever readyState gets changed',
    assignee: '@tidoust'
  },
  'duration-change-algorithm': {
    coverage: 80,
    comments: [
      'No test for step 2 (less than the highest starting presentation timestamp',
      'No test for step 5 (but hard to test)'
    ],
    assignee: '@tidoust'
  },
  'end-of-stream-algorithm': {
    coverage: 80,
    comments: [
      'No test for step 3',
      'Most checks in mediasource-errors.html'
    ],
    assignee: '@tidoust'
  },
  'widl-SourceBuffer-appendWindowEnd': 100,
  'widl-SourceBuffer-appendWindowStart': 100,
  'widl-SourceBuffer-audioTracks': 100,
  'widl-SourceBuffer-buffered': {
    coverage: 90,
    comments: 'Tests seem to cover all steps but we may want to check more complex cases that create multiple ranges',
    assignee: '@plehegar'
  },
  'widl-SourceBuffer-mode': {
    coverage: 80,
    comments: [
      'No test for step 4 on generate timestamps flag (but this requires audio/mpeg audio/aac support)',
      'No test for step 7 on groups start/end timestamps (but hard to test)'
    ],
    assignee: '@plehegar'
  },
  'widl-SourceBuffer-trackDefaults': 100,
  'widl-SourceBuffer-onabort': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-SourceBuffer-onerror': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-SourceBuffer-onupdate': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-SourceBuffer-onupdateend': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-SourceBuffer-onupdatestart': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-SourceBuffer-textTracks': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-SourceBuffer-timestampOffset': {
    coverage: 95,
    comments: 'Not sure step 6 is tested or easily testable',
    assignee: '@plehegar'
  },
  'widl-SourceBuffer-updating': 100,
  'widl-SourceBuffer-videoTracks': 100,
  'widl-SourceBuffer-abort-void': {
    coverage: 90,
    comments: [
      'No test for step 3 (range removal algorithm)',
      'Not sure step 5 is tested or easily testable'
    ],
    assignee: '@plehegar'
  },
  'widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data': {
    coverage: 100,
    comments: 'Tests in mediasource-append-buffer.html are enough to cover all steps'
  },
  'widl-SourceBuffer-appendStream-void-ReadableStream-stream-unsigned-long-long-maxSize': 0,
  'widl-SourceBuffer-remove-void-double-start-unrestricted-double-end': {
    coverage: 90,
    comments: [
      'No test for step 3 (duration equals NaN)',
      'No test for step 6.2'
    ],
    assignee: '@plehegar'
  },
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
  'sourcebuffer-default-track-language': {
    assignee: '@plehegar'
  },
  'sourcebuffer-default-track-label': {
    assignee: '@plehegar'
  },
  'sourcebuffer-default-track-kinds': {
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
  'widl-SourceBufferList-length': {
    coverage: 100,
    comments: 'Typically covered by tests on activeSourceBuffers and sourceBuffers'
  },
  'widl-SourceBufferList-SourceBuffer-getter-unsigned-long-index': {
    coverage: 50,
    comments: [
      'No test for step 1 (undefined)',
      'Typically covered by tests on activeSourceBuffers and sourceBuffers'
    ],
    assignee: '@tidoust'
  },
  'widl-SourceBufferList-onaddsourcebuffer': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-SourceBufferList-onremovesourcebuffer': {
    coverage: 0,
    assignee: '@chcunningham'
  },
  'widl-VideoPlaybackQuality-corruptedVideoFrames': {
    coverage: 50,
    comments: 'No test that the counter actually does something',
    assignee: '@tidoust'
  },
  'widl-VideoPlaybackQuality-creationTime': {
    coverage: 50,
    comments: 'No test that the counter actually returns something close to Performance.now()',
    assignee: '@tidoust'
  },
  'widl-VideoPlaybackQuality-droppedVideoFrames': {
    coverage: 50,
    comments: 'No test that the counter actually does something',
    assignee: '@tidoust'
  },
  'widl-VideoPlaybackQuality-totalFrameDelay': {
    coverage: 50,
    comments: 'No test that the counter actually does something',
    assignee: '@tidoust'
  },
  'widl-VideoPlaybackQuality-totalVideoFrames': {
    coverage: 50,
    comments: 'No test that the counter actually does something',
    assignee: '@tidoust'
  },
  'widl-ctor-TrackDefault--TrackDefaultType-type-DOMString-language-DOMString-label-sequence-DOMString--kinds-DOMString-byteStreamTrackID': {
    coverage: 50,
    comments: [
      'No test for step 1 (bad language)'
    ],
    assignee: '@tidoust'
  },
  'widl-TrackDefault-byteStreamTrackID': 100,
  'widl-TrackDefault-label': 100,
  'widl-TrackDefault-language': 100,
  'widl-TrackDefault-type': 100,
  'widl-TrackDefault-getKinds-sequence-DOMString': {
    coverage: 0,
    assignee: '@tidoust'
  },
  'widl-ctor-TrackDefaultList--sequence-TrackDefault--trackDefaults': 100,
  'widl-TrackDefaultList-length': 100,
  'widl-TrackDefaultList-TrackDefault-getter-unsigned-long-index': 100,
  'widl-URL-createObjectURL-DOMString-MediaSource-mediaSource': 100,
  'htmlmediaelement-extensions': {
    coverage: 95,
    comments: [
      'For buffered, tests cover all steps but we may want to check more complex cases that create multiple ranges'
    ],
    assignee: '@tidoust'
  },
  'widl-HTMLVideoElement-getVideoPlaybackQuality-VideoPlaybackQuality': {
    coverage: 50,
    comments: 'No test that the properties return meaningful values',
    assignee: '@tidoust'
  },
  'widl-AudioTrack-sourceBuffer': 100,
  'widl-VideoTrack-sourceBuffer': 100,
  'widl-TextTrack-sourceBuffer': {
    coverage: 0,
    assignee: '@plehegar'
  }
};