var tests = [
  {
    url: 'SourceBuffer-abort-readyState.html',
    checks: '#widl-SourceBuffer-abort-void'
  },
  {
    url: 'SourceBuffer-abort-removed.html',
    checks: '#widl-SourceBuffer-abort-void'
  },
  {
    url: 'SourceBuffer-abort-updating.html',
    checks: '#widl-SourceBuffer-abort-void'
  },
  {
    url: 'SourceBuffer-abort.html',
    checks: '#widl-SourceBuffer-abort-void'
  },
  {
    url: 'URL-createObjectURL-null.html',
    checks: '#widl-URL-createObjectURL-DOMString-MediaSource-mediaSource'
  },
  {
    url: 'URL-createObjectURL-revoke.html',
    checks: '#widl-URL-createObjectURL-DOMString-MediaSource-mediaSource'
  },
  {
    url: 'URL-createObjectURL.html',
    checks: '#widl-URL-createObjectURL-DOMString-MediaSource-mediaSource'
  },
  {
    url: 'mediasource-append-legacystream.html',
    definedIn: 'chromium',
    useless: true
  },
  {
    url: 'mediasource-appendbuffer-quota-exceeded.html',
    checks: '#sourcebuffer-prepare-append',
    definedIn: 'chromium',
    comments: 'checks step 6 for appendBuffer'
  },
  {
    url: 'mediasource-appendstream-quota-exceeded.html',
    checks: '#sourcebuffer-prepare-append',
    definedIn: 'chromium',
    comments: 'checks step 6 for appendStream'
  },
  {
    url: 'mediasource-avtracks.html',
    checks: [
      '#widl-MediaSource-removeSourceBuffer-void-SourceBuffer-sourceBuffer',
      '#widl-SourceBuffer-audioTracks',
      '#widl-SourceBuffer-videoTracks',
      '#widl-AudioTrack-sourceBuffer',
      '#widl-VideoTrack-sourceBuffer',
      '#mediasource-detach',
      '#widl-MediaSource-sourceBuffers',
      '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data',
      '#sourcebuffer-buffer-append'
    ],
    definedIn: 'chromium',
    comments: 'Check that media tracks and their properties are populated properly. Checks visible outcomes of SourceBuffer algorithms (e.g. 3.5.1, 3.5.12), removeSourceBuffer (2.2), detach from a media element (2.4.2)'
  },
  {
    url: 'mediasource-detach.html',
    checks: [
      '#mediasource-detach',
      '#widl-MediaSource-readyState',
      '#widl-MediaSource-duration',
      '#widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type'
    ],
    definedIn: 'chromium'
  },
  {
    url: 'mediasource-errors.html',
    checks: [
      '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data',
      '#mediasource-attach',
      '#mediasource-detach',
      '#end-of-stream-algorithm',
      '#sourcebuffer-buffer-append',
      '#sourcebuffer-segment-parser-loop',
      '#sourcebuffer-append-error'
    ],
    definedIn: 'chromium'
  },
  {
    url: 'mediasource-garbage-collection-before-sourceopen.html',
    definedIn: 'chromium',
    useless: true
  },
  {
    url: 'mediasource-gc-after-decode-error-crash.html',
    definedIn: 'chromium',
    useless: true
  },
  {
    url: 'mediasource-htmlmediaelement-lifetime.html',
    definedIn: 'chromium',
    useless: true
  },
  {
    url: 'mediasource-seekable.html',
    checks: '#htmlmediaelement-extensions',
    definedIn: 'chromium'
  },
  {
    url: 'mediasource-sourcebuffer-trackdefaults.html',
    checks: '#widl-SourceBuffer-trackDefaults',
    definedIn: 'chromium'
  },
  {
    url: 'mediasource-sourcebufferlist-crash.html',
    definedIn: 'chromium',
    useless: true
  },
  {
    url: 'mediasource-trackdefault.html',
    checks: [
      '#widl-ctor-TrackDefault--TrackDefaultType-type-DOMString-language-DOMString-label-sequence-DOMString--kinds-DOMString-byteStreamTrackID'
    ],
    definedIn: 'chromium',
    comments: 'Test needs to be updated to check getKinds instead of kinds which no longer exists'
  },
  {
    url: 'mediasource-trackdefaultlist.html',
    checks: [
      '#widl-ctor-TrackDefaultList--sequence-TrackDefault--trackDefaults',
      '#widl-TrackDefaultList-length',
      '#widl-TrackDefaultList-TrackDefault-getter-unsigned-long-index'
    ],
    definedIn: 'chromium'
  },
  {
    url: 'mediasource-addsourcebuffer.html',
    checks: [
      '#widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type',
      '#widl-MediaSource-sourceBuffers',
      '#widl-MediaSource-activeSourceBuffers'
    ]
  },
  {
    url: 'mediasource-append-buffer.html',
    checks: [
      '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data',
      '#widl-SourceBuffer-updating',
      '#widl-MediaSource-duration',
      '#widl-MediaSource-readyState',
      '#widl-MediaSource-endOfStream-void-EndOfStreamError-error',
      '#end-of-stream-algorithm',
      '#widl-SourceBuffer-timestampOffset',
      '#widl-SourceBuffer-abort-void',
      '#sourcebuffer-buffer-append'
    ]
  },
  {
    url: 'mediasource-appendwindow.html',
    checks: [
      '#widl-SourceBuffer-appendWindowStart',
      '#widl-SourceBuffer-appendWindowEnd'
    ]
  },
  {
    url: 'mediasource-buffered.html',
    checks: [
      '#htmlmediaelement-extensions',
      '#widl-SourceBuffer-buffered',
      '#widl-MediaSource-sourceBuffers',
      '#widl-MediaSource-activeSourceBuffers'
    ]
  },
  {
    url: 'mediasource-closed.html',
    checks: [
      '#widl-MediaSource-activeSourceBuffers',
      '#widl-MediaSource-sourceBuffers',
      '#widl-MediaSource-readyState',
      '#widl-MediaSource-duration',
      '#widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type',
      '#widl-MediaSource-removeSourceBuffer-void-SourceBuffer-sourceBuffer',
      '#widl-MediaSource-endOfStream-void-EndOfStreamError-error',
      '#end-of-stream-algorithm',
      '#widl-SourceBuffer-abort-void'
    ],
    comments: 'checks closed clauses in various algorithms'
  },
  {
    url: 'mediasource-config-changes.js',
    checks: [
      '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data',
      '#widl-SourceBuffer-timestampOffset',
      '#widl-MediaSource-duration',
      '#duration-change-algorithm',
      '#sourcebuffer-buffer-append'
    ]
  },
  {
    url: 'mediasource-duration-boundaryconditions.html',
    checks: [
      '#widl-MediaSource-duration',
      '#duration-change-algorithm'
    ]
  },
  {
    url: 'mediasource-duration.html',
    checks: [
      '#widl-MediaSource-duration',
      '#duration-change-algorithm'
    ],
    comments: 'may go too far, as it also tests MediaElement events'
  },
  {
    url: 'mediasource-endofstream-invaliderror.html',
    checks: [
      '#widl-MediaSource-endOfStream-void-EndOfStreamError-error',
      '#end-of-stream-algorithm'
    ]
  },
  {
    url: 'mediasource-getvideoplaybackquality.html',
    checks: [
      '#widl-HTMLVideoElement-getVideoPlaybackQuality-VideoPlaybackQuality',
      '#widl-VideoPlaybackQuality-corruptedVideoFrames',
      '#widl-VideoPlaybackQuality-creationTime',
      '#widl-VideoPlaybackQuality-droppedVideoFrames',
      '#widl-VideoPlaybackQuality-totalFrameDelay',
      '#widl-VideoPlaybackQuality-totalVideoFrames'
    ]
  },
  {
    url: 'mediasource-is-type-supported.html',
    checks: '#widl-MediaSource-isTypeSupported-boolean-DOMString-type',
    comments: '(specific to Chrome, though)'
  },
  {
    url: 'mediasource-multiple-attach.html',
    checks: '#mediasource-attach',
    comments: 'checks first condition of attaching to a media element (readyState not closed)'
  },
  {
    url: 'mediasource-play-then-seek-back.html',
    checks: '#mediasource-seeking',
    comments: 'checks seeking back to start position'
  },
  {
    url: 'mediasource-play.html',
    checks: [],
    comments: 'checks regular playback, not sure how to relate that to spec algorithms though'
  },
  {
    url: 'mediasource-preload.html',
    checks: '#mediasource-attach'
  },
  {
    url: 'mediasource-redundant-seek.html',
    checks: '#mediasource-seeking',
    comments: 'but the test does not cover spec assertions AFAICT'
  },
  {
    url: 'mediasource-remove.html',
    checks: [
      '#widl-SourceBuffer-remove-void-double-start-unrestricted-double-end',
      '#sourcebuffer-range-removal'
    ]
  },
  {
    url: 'mediasource-removesourcebuffer.html',
    checks: '#widl-MediaSource-removeSourceBuffer-void-SourceBuffer-sourceBuffer',
    definedIn: 'https://github.com/w3c/web-platform-tests/pull/3187',
    comments: 'Completed to cover step 2 (abort and updateend events)'
  },
  {
    url: 'mediasource-seek-beyond-duration.html',
    checks: '#mediasource-seeking',
    comments: 'but the test does not cover spec assertions AFAICT'
  },
  {
    url: 'mediasource-seek-during-pending-seek.html',
    checks: '#mediasource-seeking',
    comments: 'but the test does not cover spec assertions AFAICT'
  },
  {
    url: 'mediasource-sequencemode-append-buffer.html',
    checks: [
      '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data',
      '#sourcebuffer-prepare-append',
      '#sourcebuffer-buffer-append'
    ]
  },
  {
    url: 'mediasource-sourcebuffer-mode.html',
    checks: [
      '#widl-SourceBuffer-mode',
      '#widl-SourceBuffer-timestampOffset',
      '#widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type'
    ]
  },
  {
    url: 'mediasource-sourcebufferlist.html',
    checks: [
      '#widl-MediaSource-sourceBuffers',
      '#widl-MediaSource-activeSourceBuffers',
      '#mediasource-detach',
      '#widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type'
    ],
    comments: 'checks various checks on sourceBuffers list'
  },
  {
    url: 'mediasource-timestamp-offset.html',
    checks: '#widl-SourceBuffer-timestampOffset'
  },
  {
    url: 'mediasource-activeSourceBuffers.html',
    checks: [
      '#widl-MediaSource-activeSourceBuffers',
      '#active-source-buffer-changes'
    ],
    definedIn: 'https://github.com/w3c/web-platform-tests/pull/3182',
    comments: [
      'Checks that the active source buffers are the right ones',
      'Checks the order of active SourceBuffers',
      'Checks changes to selected/enabled track state'
    ],
  },
  {
    url: 'mediasource-liveseekable.html',
    checks: [
      '#widl-MediaSource-setLiveSeekableRange-void-double-start-double-end',
      '#widl-MediaSource-clearLiveSeekableRange-void',
      '#htmlmediaelement-extensions'
    ],
    definedIn: 'https://github.com/w3c/web-platform-tests/pull/3184',
    comments: [
      'Checks the setLiveSeekableRange/clearLiveSeekableRange methods',
      'Checks the impact on HTMLMediaElement.seekable'
    ],
  }
];