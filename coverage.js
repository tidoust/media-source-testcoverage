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
      'No test on generate timestamps flag (but this requires audio/mpeg audio/aac support)'
    ]
  },
  'widl-MediaSource-clearLiveSeekableRange-void': 0,
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
  'widl-MediaSource-setLiveSeekableRange-void-double-start-double-end': 0,
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
  'mediasource-seeking': {
    coverage: 90,
    comments: [
      'Seems OK but...',
      'Can we do any better to check step 2, 3, and 4 than to check currentTime after seek?',
      'Relevant tests in mediasource-redundant-seek.html and mediasource-seek-during-pending-seek.html',
      'Note most other tests are against the HTML5 seek algorithm itself, do we really need them?'
    ]
  },
  'buffer-monitoring': {
    coverage: 0,
    comments: 'Hmm, shouldn\'t the event steps in that algorithm be dropped? HTML5.1 already triggers these events whenever readyState gets changed'
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
  'widl-SourceBuffer-buffered': {
    coverage: 90,
    comments: 'Tests seem to cover all steps but we may want to check more complex cases that create multiple ranges'
  },
  'widl-SourceBuffer-mode': {
    coverage: 80,
    comments: [
      'No test for step 4 on generate timestamps flag (but this requires audio/mpeg audio/aac support)',
      'No test for step 7 on groups start/end timestamps (but hard to test)'
    ]
  },
  'widl-SourceBuffer-trackDefaults': 100,
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
    ]
  },
  'sourcebuffer-append-error': {
    coverage: 40,
    comments: [
      'No test for step 1 (requires decode error flag to be false to lead to visible behavior)',
      'Test for step 5 could perhaps check readyState and other events to ensure end of stream algorithm actually ran',
      'The different conditions that trigger the algorithm are not really tested',
    ]
  },
  'sourcebuffer-prepare-append': {
    coverage: 80,
    comments: [
      'No test for step 3 (HTMLMediaElement.error)',
      'No test for step 6 (but can it be tested? Size of buffer is implementation specific)'
    ]
  },
  'sourcebuffer-buffer-append': {
    coverage: 80,
    comments: 'TODO: need to check whether Segment Parser Loop is run'
  },
  'sourcebuffer-stream-append-loop': 0,
  'sourcebuffer-range-removal': {
    coverage: 90,
    comments: 'Not sure step 6 is tested or easily testable'
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
    ]
  },
  'widl-SourceBufferList-onaddsourcebuffer': 0,
  'widl-SourceBufferList-onremovesourcebuffer': 0,
  'widl-VideoPlaybackQuality-corruptedVideoFrames': {
    coverage: 50,
    comments: 'No test that the counter actually does something'
  },
  'widl-VideoPlaybackQuality-creationTime': {
    coverage: 50,
    comments: 'No test that the counter actually returns something close to Performance.now()'
  },
  'widl-VideoPlaybackQuality-droppedVideoFrames': {
    coverage: 50,
    comments: 'No test that the counter actually does something'
  },
  'widl-VideoPlaybackQuality-totalFrameDelay': {
    coverage: 50,
    comments: 'No test that the counter actually does something'
  },
  'widl-VideoPlaybackQuality-totalVideoFrames': {
    coverage: 50,
    comments: 'No test that the counter actually does something'
  },
  'widl-ctor-TrackDefault--TrackDefaultType-type-DOMString-language-DOMString-label-sequence-DOMString--kinds-DOMString-byteStreamTrackID': {
    coverage: 50,
    comments: [
      'No test for step 1 (bad language)'
    ]
  },
  'widl-TrackDefault-byteStreamTrackID': 100,
  'widl-TrackDefault-label': 100,
  'widl-TrackDefault-language': 100,
  'widl-TrackDefault-type': 100,
  'widl-TrackDefault-getKinds-sequence-DOMString': 0,
  'widl-ctor-TrackDefaultList--sequence-TrackDefault--trackDefaults': 100,
  'widl-TrackDefaultList-length': 100,
  'widl-TrackDefaultList-TrackDefault-getter-unsigned-long-index': 100,
  'widl-URL-createObjectURL-DOMString-MediaSource-mediaSource': 100,
  'htmlmediaelement-extensions': {
    coverage: 40,
    comments: [
      'No test for the seekable attribute',
      'For buffered, tests seem to cover all steps but we may want to check more complex cases that create multiple ranges'
    ]
  },
  'widl-HTMLVideoElement-getVideoPlaybackQuality-VideoPlaybackQuality': {
    coverage: 50,
    comments: 'No test that the properties return meaningful values'
  },
  'widl-AudioTrack-sourceBuffer': 100,
  'widl-VideoTrack-sourceBuffer': 100,
  'widl-TextTrack-sourceBuffer': 0
};