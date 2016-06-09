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
    comment: 'checks step 6 for appendBuffer'
  },
  {
    url: 'mediasource-appendstream-quota-exceeded.html',
    checks: '#sourcebuffer-prepare-append',
    definedIn: 'chromium',
    comment: 'checks step 6 for appendStream'
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
      '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data'
    ],
    definedIn: 'chromium',
    comment: 'Check that media tracks and their properties are populated properly. Checks visible outcomes of SourceBuffer algorithms (e.g. 3.5.1, 3.5.12), removeSourceBuffer (2.2), detach from a media element (2.4.2)'
  },
  {
    url: 'mediasource-detach.html',
    checks: [
      '#mediasource-detach',
      '#widl-MediaSource-sourceBuffers',
      '#widl-MediaSource-activeSourceBuffers',
      '#widl-MediaSource-readyState',
      '#widl-MediaSource-duration',
      '#widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type',
      '#widl-MediaSource-removeSourceBuffer-void-SourceBuffer-sourceBuffer'
    ],
    definedIn: 'chromium'
  },
  {
    url: 'mediasource-errors.html',
    checks: [
      '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data',
      '#mediasource-attach',
      '#mediasource-detach',
      '#end-of-stream-algorithm'
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
    checks: '#widl-ctor-TrackDefaulTrackDefaultType-type-DOMString-language-DOMString-label-sequence-DOMStrinkinds-DOMString-byteStreamTrackID',
    definedIn: 'chromium'
  },
  {
    url: 'mediasource-trackdefaultlist.html',
    checks: '#widl-ctor-TrackDefaultLissequence-TrackDefaultrackDefaults',
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
      '#widl-SourceBuffer-abort-void'
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
      '#widl-SourceBuffer-buffered'
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
    comment: 'checks closed clauses in various algorithms'
  },
  {
    url: 'mediasource-config-change-mp4|webm-*.html',
    checks: [
      '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data',
      '#widl-SourceBuffer-timestampOffset',
      '#widl-MediaSource-duration',
      '#duration-change-algorithm'
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
    comment: 'may go too far, as it also tests MediaElement events'
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
    checks: '#widl-HTMLVideoElement-getVideoPlaybackQuality-VideoPlaybackQuality'
  },
  {
    url: 'mediasource-is-type-supported.html',
    checks: '#widl-MediaSource-isTypeSupported-boolean-DOMString-type',
    comment: '(specific to Chrome, though)'
  },
  {
    url: 'mediasource-multiple-attach.html',
    checks: '#mediasource-attach',
    comment: 'should check 2.4.1 Attaching to a media element, but I do not see anything in the spec that mandates that behavior'
  },
  {
    url: 'mediasource-play-then-seek-back.html',
    checks: '#mediasource-seeking',
    comment: 'checks seeking back to start position'
  },
  {
    url: 'mediasource-play.html',
    checks: [],
    comment: 'checks regular playback, not sure how to relate that to spec algorithms though'
  },
  {
    url: 'mediasource-preload.html',
    checks: '#mediasource-attach'
  },
  {
    url: 'mediasource-redundant-seek.html',
    checks: '#mediasource-seeking',
    comment: 'but the test does not cover spec assertions AFAICT'
  },
  {
    url: 'mediasource-remove.html',
    checks: '#widl-SourceBuffer-remove-void-double-start-unrestricted-double-end'
  },
  {
    url: 'mediasource-removesourcebuffer.html',
    checks: '#widl-MediaSource-removeSourceBuffer-void-SourceBuffer-sourceBuffer'
  },
  {
    url: 'mediasource-seek-beyond-duration.html',
    checks: '#mediasource-seeking',
    comment: 'but the test does not cover spec assertions AFAICT'
  },
  {
    url: 'mediasource-seek-during-pending-seek.html',
    checks: '#mediasource-seeking',
    comment: 'but the test does not cover spec assertions AFAICT'
  },
  {
    url: 'mediasource-sequencemode-append-buffer.html',
    checks: '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data'
  },
  {
    url: 'mediasource-sourcebuffer-mode.html',
    checks: [
      '#widl-SourceBuffer-mode',
      '#widl-SourceBuffer-timestampOffset'
    ]
  },
  {
    url: 'mediasource-sourcebufferlist.html',
    checks: [
      '#buffer-monitoring',
      '#widl-MediaSource-sourceBuffers',
      '#widl-MediaSource-activeSourceBuffers'
    ],
    comment: 'checks various checks on sourceBuffers list'
  },
  {
    url: 'mediasource-timestamp-offset.html',
    checks: '#widl-SourceBuffer-timestampOffset'
  }
];