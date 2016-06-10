var coverage = {
  'widl-MediaSource-activeSourceBuffers': {
    coverage: 50,
    comments: [
      'No real test that the active source buffers are the right ones',
      'No test on the SourceBuffers order'
    ]
  },
  'widl-MediaSource-sourceBuffers': 100,
  'widl-MediaSource-duration': 100,
  'widl-MediaSource-onsourceclose': 0,
  'widl-MediaSource-onsourceended': 0,
  'widl-MediaSource-onsourceopen': 0,
  'widl-MediaSource-readyState': 100,
  'widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type': {
    coverage: 90,
    comments: [
      'Test for step 1 in mediasource-addsourcebuffer incorrectly assumes InvalidAccessError instead of TypeError',
      'No test on generate timestamps flag, which implies audio/mpeg audio/aac support'
    ]
  },
  'widl-MediaSource-endOfStream-void-EndOfStreamError-error': 100,
  'widl-MediaSource-isTypeSupported-boolean-DOMString-type': {
    coverage: 90,
    comments: 'Test is implementation-specific as it assumes some codecs are supported'
  },
  'widl-MediaSource-removeSourceBuffer-void-SourceBuffer-sourceBuffer': {
    coverage: 80,
    comments: [
      'No test for step 2 (e.g. for abort and updateend events)',
      'No test on TextTrackList (steps 7, 8)',
      'Tests on audio/video tracks (e.g. removetrack events) in mediastream-avtracks.html',
      'Step 11 (Destroy all resources for sourceBuffer) is somewhat meaningless'
    ]
  },
  'active-source-buffer-changes': 0,
  'mediasource-attach': {
    coverage: 70,
    comments: [
      'Test on step 1 in PR3082: https://github.com/w3c/web-platform-tests/pull/3082',
      'No test on not e.g. firing suspend event (step 4.3)',
      'Basically all tests in the test suite use the sourceopen event fired at step 3'
    ]
  },
  'mediasource-detach': {
    coverage: 95,
    comments: 'There may be other initial conditions to test'
  },
  'duration-change-algorithm': {
    coverage: 80,
    comments: [
      'No test for step 2 (less than the highest starting presentation timestamp',
      'No test for step 5 (but hard to test)'
    ]
  },
  'end-of-stream-algorithm': {
    coverage: 80,
    comments: [
      'No test for step 3',
      'Most checks in mediasource-errors.html'
    ]
  },
  'widl-SourceBuffer-appendWindowEnd': 100,
  'widl-SourceBuffer-appendWindowStart': 100,
  'widl-SourceBuffer-audioTracks': 100,
  'widl-SourceBuffer-onabort': 0,
  'widl-SourceBuffer-onerror': 0,
  'widl-SourceBuffer-onupdate': 0,
  'widl-SourceBuffer-onupdateend': 0,
  'widl-SourceBuffer-onupdatestart': 0,
  'widl-SourceBuffer-textTracks': 0,
  'widl-SourceBuffer-timestampOffset': {
    coverage: 95,
    comments: 'Not sure step 6 is tested or easily testable'
  },
  'widl-SourceBuffer-updating': 100,
  'widl-SourceBuffer-videoTracks': 100,
  'widl-SourceBuffer-abort-void': {
    coverage: 90,
    comments: [
      'No test for step 3 (range removal algorithm)',
      'Not sure step 5 is tested or easily testable'
    ]
  },
  'widl-SourceBuffer-remove-void-double-start-unrestricted-double-end': {
    coverage: 90,
    comments: [
      'No test for step 3 (duration equals NaN)',
      'No test for step 6.2'
    ]
  },
  'sourcebuffer-range-removal': {
    coverage: 90,
    comments: 'Not sure step 6 is tested or easily testable'
  },
  'widl-SourceBufferList-onaddsourcebuffer': 0,
  'widl-SourceBufferList-onremovesourcebuffer': 0
};