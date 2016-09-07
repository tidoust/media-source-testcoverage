var tests = [
  {
    url: 'SourceBuffer-abort-readyState.html',
    checks: '#dom-sourcebuffer-abort'
  },
  {
    url: 'SourceBuffer-abort-removed.html',
    checks: '#dom-sourcebuffer-abort'
  },
  {
    url: 'SourceBuffer-abort-updating.html',
    checks: '#dom-sourcebuffer-abort'
  },
  {
    url: 'SourceBuffer-abort.html',
    checks: '#dom-sourcebuffer-abort'
  },
  {
    url: 'URL-createObjectURL-null.html',
    checks: '#dom-url-createobjecturl'
  },
  {
    url: 'URL-createObjectURL-revoke.html',
    checks: '#dom-url-createobjecturl'
  },
  {
    url: 'URL-createObjectURL.html',
    checks: '#dom-url-createobjecturl'
  },
  {
    url: 'mediasource-append-legacystream.html',
    definedIn: 'chromium',
    useless: true
  },
  {
    url: 'mediasource-appendbuffer-quota-exceeded.html',
    checks: '#sourcebuffer-prepare-append',
    comments: 'checks step 6 for appendBuffer'
  },
  {
    url: 'mediasource-avtracks.html',
    checks: [
      '#dom-mediasource-removesourcebuffer',
      '#dom-sourcebuffer-audiotracks',
      '#dom-sourcebuffer-videotracks',
      '#dom-audiotrack-sourcebuffer',
      '#dom-videotrack-sourcebuffer',
      '#mediasource-detach',
      '#dom-mediasource-sourcebuffers',
      '#dom-sourcebuffer-appendbuffer',
      '#sourcebuffer-buffer-append'
    ],
    comments: 'Check that media tracks and their properties are populated properly. Checks visible outcomes of SourceBuffer algorithms (e.g. 3.5.1, 3.5.12), removeSourceBuffer (2.2), detach from a media element (2.4.2)'
  },
  {
    url: 'mediasource-detach.html',
    checks: [
      '#mediasource-detach',
      '#dom-readystate',
      '#dom-mediasource-duration',
      '#dom-mediasource-addsourcebuffer'
    ]
  },
  {
    url: 'mediasource-errors.html',
    checks: [
      '#dom-sourcebuffer-appendbuffer',
      '#mediasource-attach',
      '#mediasource-detach',
      '#end-of-stream-algorithm',
      '#sourcebuffer-buffer-append',
      '#sourcebuffer-segment-parser-loop',
      '#sourcebuffer-append-error'
    ]
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
    checks: '#htmlmediaelement-extensions'
  },
  {
    url: 'mediasource-sourcebuffer-trackdefaults.html',
    comments: 'TrackDefault no longer in MSE spec',
    useless: true
  },
  {
    url: 'mediasource-sourcebufferlist-crash.html',
    definedIn: 'chromium',
    useless: true
  },
  {
    url: 'mediasource-trackdefault.html',
    comments: 'TrackDefault no longer in MSE spec',
    useless: true
  },
  {
    url: 'mediasource-trackdefaultlist.html',
    definedIn: 'chromium',
    useless: true,
    comments: 'TrackDefaultList no longer in MSE spec'
  },
  {
    url: 'mediasource-addsourcebuffer.html',
    checks: [
      '#dom-mediasource-addsourcebuffer',
      '#dom-mediasource-sourcebuffers',
      '#dom-mediasource-activesourcebuffers'
    ]
  },
  {
    url: 'mediasource-append-buffer.html',
    checks: [
      '#dom-sourcebuffer-appendbuffer',
      '#dom-sourcebuffer-updating',
      '#dom-mediasource-duration',
      '#dom-readystate',
      '#dom-mediasource-endofstream',
      '#end-of-stream-algorithm',
      '#dom-sourcebuffer-timestampoffset',
      '#dom-sourcebuffer-abort',
      '#sourcebuffer-buffer-append'
    ]
  },
  {
    url: 'mediasource-appendwindow.html',
    checks: [
      '#dom-sourcebuffer-appendwindowstart',
      '#dom-sourcebuffer-appendwindowend'
    ]
  },
  {
    url: 'mediasource-buffered.html',
    checks: [
      '#htmlmediaelement-extensions',
      '#dom-sourcebuffer-buffered',
      '#dom-mediasource-sourcebuffers',
      '#dom-mediasource-activesourcebuffers'
    ]
  },
  {
    url: 'mediasource-closed.html',
    checks: [
      '#dom-mediasource-activesourcebuffers',
      '#dom-mediasource-sourcebuffers',
      '#dom-readystate',
      '#dom-mediasource-duration',
      '#dom-mediasource-addsourcebuffer',
      '#dom-mediasource-removesourcebuffer',
      '#dom-mediasource-endofstream',
      '#end-of-stream-algorithm',
      '#dom-sourcebuffer-abort'
    ],
    comments: 'checks closed clauses in various algorithms'
  },
  {
    url: 'mediasource-config-changes.js',
    checks: [
      '#dom-sourcebuffer-appendbuffer',
      '#dom-sourcebuffer-timestampoffset',
      '#dom-mediasource-duration',
      '#duration-change-algorithm',
      '#sourcebuffer-buffer-append'
    ]
  },
  {
    url: 'mediasource-duration-boundaryconditions.html',
    checks: [
      '#dom-mediasource-duration',
      '#duration-change-algorithm'
    ]
  },
  {
    url: 'mediasource-duration.html',
    checks: [
      '#dom-mediasource-duration',
      '#duration-change-algorithm'
    ],
    comments: 'may go too far, as it also tests MediaElement events'
  },
  {
    url: 'mediasource-endofstream.html',
    checks: [
      '#dom-mediasource-endofstream',
      '#end-of-stream-algorithm'
    ]
  },
  {
    url: 'mediasource-endofstream-invaliderror.html',
    checks: [
      '#dom-mediasource-endofstream',
      '#end-of-stream-algorithm'
    ]
  },
  {
    url: 'mediasource-getvideoplaybackquality.html',
    comments: 'VideoPlaybackQuality no longer in MSE spec',
    useless: true
  },
  {
    url: 'mediasource-is-type-supported.html',
    checks: '#dom-mediasource-istypesupported',
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
      '#dom-sourcebuffer-remove',
      '#sourcebuffer-range-removal'
    ]
  },
  {
    url: 'mediasource-removesourcebuffer.html',
    checks: '#dom-mediasource-removesourcebuffer',
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
      '#dom-sourcebuffer-appendbuffer',
      '#sourcebuffer-prepare-append',
      '#sourcebuffer-buffer-append'
    ]
  },
  {
    url: 'mediasource-sourcebuffer-mode.html',
    checks: [
      '#dom-sourcebuffer-mode',
      '#dom-sourcebuffer-timestampoffset',
      '#dom-mediasource-addsourcebuffer'
    ]
  },
  {
    url: 'mediasource-sourcebufferlist.html',
    checks: [
      '#dom-mediasource-sourcebuffers',
      '#dom-mediasource-activesourcebuffers',
      '#mediasource-detach',
      '#dom-mediasource-addsourcebuffer',
      '#dfn-sourcebufferlist-getter',
      '#dom-sourcebufferlist-length'
    ],
    comments: 'checks properties of sourceBuffers list'
  },
  {
    url: 'mediasource-timestamp-offset.html',
    checks: '#dom-sourcebuffer-timestampoffset'
  },
  {
    url: 'mediasource-activesourcebuffers.html',
    checks: [
      '#dom-mediasource-activesourcebuffers',
      '#active-source-buffer-changes'
    ],
    comments: [
      'Checks that the active source buffers are the right ones',
      'Checks the order of active SourceBuffers',
      'Checks changes to selected/enabled track state'
    ],
  },
  {
    url: 'mediasource-liveseekable.html',
    checks: [
      '#dom-mediasource-setliveseekablerange',
      '#dom-mediasource-clearliveseekablerange',
      '#htmlmediaelement-extensions'
    ],
    comments: [
      'Checks the setLiveSeekableRange/clearLiveSeekableRange methods',
      'Checks the impact on HTMLMediaElement.seekable'
    ],
  },
  {
    url: 'mediasource-attach-stops-delaying-load-event.html',
    checks: '#mediasource-attach'
  },
  {
    url: 'mediasource-sourcebuffer-mode-timestamps.html',
    checks: '#dom-sourcebuffer-mode'
  },
  {
    url: 'mediasource-addsourcebuffer-mode.html',
    checks: '#dom-mediasource-addsourcebuffer'
  }
];