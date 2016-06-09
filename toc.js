/**********************************************************************
Media Source Extensions spec sections that need to be tested.

The structure should be updated when needed. Follow the steps described
in the "How to update the table" section.
**********************************************************************/
var toc = {
  "name": "Table of Contents",
  "children": [
    {
      "number": "2.",
      "name": "MediaSource Object",
      "url": "mediasource",
      "children": [
        {
          "number": "2.1",
          "name": "Attributes",
          "url": "attributes",
          "children": [
            {
              "name": "activeSourceBuffers of type SourceBufferList, readonly",
              "url": "widl-MediaSource-activeSourceBuffers",
              "type": "attribute"
            },
            {
              "name": "duration of type unrestricted double",
              "url": "widl-MediaSource-duration",
              "type": "attribute"
            },
            {
              "name": "onsourceclose of type EventHandler",
              "url": "widl-MediaSource-onsourceclose",
              "type": "attribute"
            },
            {
              "name": "onsourceended of type EventHandler",
              "url": "widl-MediaSource-onsourceended",
              "type": "attribute"
            },
            {
              "name": "onsourceopen of type EventHandler",
              "url": "widl-MediaSource-onsourceopen",
              "type": "attribute"
            },
            {
              "name": "readyState of type ReadyState, readonly",
              "url": "widl-MediaSource-readyState",
              "type": "attribute"
            },
            {
              "name": "sourceBuffers of type SourceBufferList, readonly",
              "url": "widl-MediaSource-sourceBuffers",
              "type": "attribute"
            }
          ]
        },
        {
          "number": "2.2",
          "name": "Methods",
          "url": "methods",
          "children": [
            {
              "name": "addSourceBuffer",
              "url": "widl-MediaSource-addSourceBuffer-SourceBuffer-DOMString-type",
              "type": "method"
            },
            {
              "name": "endOfStream",
              "url": "widl-MediaSource-endOfStream-void-EndOfStreamError-error",
              "type": "method"
            },
            {
              "name": "isTypeSupported, static",
              "url": "widl-MediaSource-isTypeSupported-boolean-DOMString-type",
              "type": "method"
            },
            {
              "name": "removeSourceBuffer",
              "url": "widl-MediaSource-removeSourceBuffer-void-SourceBuffer-sourceBuffer",
              "type": "method"
            }
          ]
        },
        {
          "number": "2.4",
          "name": "Algorithms",
          "url": "mediasource-algorithms",
          "children": [
            {
              "number": "2.4.1",
              "name": "Attaching to a media element",
              "url": "mediasource-attach"
            },
            {
              "number": "2.4.2",
              "name": "Detaching from a media element",
              "url": "mediasource-detach"
            },
            {
              "number": "2.4.3",
              "name": "Seeking",
              "url": "mediasource-seeking"
            },
            {
              "number": "2.4.4",
              "name": "SourceBuffer Monitoring",
              "url": "buffer-monitoring"
            },
            {
              "number": "2.4.5",
              "name": "Changes to selected/enabled track state",
              "url": "active-source-buffer-changes"
            },
            {
              "number": "2.4.6",
              "name": "Duration change",
              "url": "duration-change-algorithm"
            },
            {
              "number": "2.4.7",
              "name": "End of stream algorithm",
              "url": "end-of-stream-algorithm"
            }
          ]
        }
      ]
    },
    {
      "number": "3.",
      "name": "SourceBuffer Object",
      "url": "sourcebuffer",
      "children": [
        {
          "number": "3.1",
          "name": "Attributes",
          "url": "attributes-1",
          "children": [
            {
              "name": "appendWindowEnd of type unrestricted double",
              "url": "widl-SourceBuffer-appendWindowEnd",
              "type": "attribute"
            },
            {
              "name": "appendWindowStart of type double",
              "url": "widl-SourceBuffer-appendWindowStart",
              "type": "attribute"
            },
            {
              "name": "audioTracks of type AudioTrackList, readonly",
              "url": "widl-SourceBuffer-audioTracks",
              "type": "attribute"
            },
            {
              "name": "buffered of type TimeRanges, readonly",
              "url": "widl-SourceBuffer-buffered",
              "type": "attribute"
            },
            {
              "name": "mode of type AppendMode",
              "url": "widl-SourceBuffer-mode",
              "type": "attribute"
            },
            {
              "name": "onabort of type EventHandler",
              "url": "widl-SourceBuffer-onabort",
              "type": "attribute"
            },
            {
              "name": "onerror of type EventHandler",
              "url": "widl-SourceBuffer-onerror",
              "type": "attribute"
            },
            {
              "name": "onupdate of type EventHandler",
              "url": "widl-SourceBuffer-onupdate",
              "type": "attribute"
            },
            {
              "name": "onupdateend of type EventHandler",
              "url": "widl-SourceBuffer-onupdateend",
              "type": "attribute"
            },
            {
              "name": "onupdatestart of type EventHandler",
              "url": "widl-SourceBuffer-onupdatestart",
              "type": "attribute"
            },
            {
              "name": "textTracks of type TextTrackList, readonly",
              "url": "widl-SourceBuffer-textTracks",
              "type": "attribute"
            },
            {
              "name": "timestampOffset of type double",
              "url": "widl-SourceBuffer-timestampOffset",
              "type": "attribute"
            },
            {
              "name": "trackDefaults of type TrackDefaultList",
              "url": "widl-SourceBuffer-trackDefaults",
              "type": "attribute"
            },
            {
              "name": "updating of type boolean, readonly",
              "url": "widl-SourceBuffer-updating",
              "type": "attribute"
            },
            {
              "name": "videoTracks of type VideoTrackList, readonly",
              "url": "widl-SourceBuffer-videoTracks",
              "type": "attribute"
            }
          ]
        },
        {
          "number": "3.2",
          "name": "Methods",
          "url": "methods-1",
          "children": [
            {
              "name": "abort",
              "url": "widl-SourceBuffer-abort-void",
              "type": "method"
            },
            {
              "name": "appendBuffer",
              "url": "widl-SourceBuffer-appendBuffer-void-ArrayBuffer-data",
              "type": "method"
            },
            {
              "name": "appendBuffer",
              "url": "widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data",
              "type": "method"
            },
            {
              "name": "appendStream",
              "url": "widl-SourceBuffer-appendStream-void-ReadableStream-stream-unsigned-long-long-maxSize",
              "type": "method"
            },
            {
              "name": "remove",
              "url": "widl-SourceBuffer-remove-void-double-start-unrestricted-double-end",
              "type": "method"
            }
          ]
        },
        {
          "number": "3.5",
          "name": "Algorithms",
          "url": "sourcebuffer-algorithms",
          "children": [
            {
              "number": "3.5.1",
              "name": "Segment Parser Loop",
              "url": "sourcebuffer-segment-parser-loop"
            },
            {
              "number": "3.5.2",
              "name": "Reset Parser State",
              "url": "sourcebuffer-reset-parser-state"
            },
            {
              "number": "3.5.3",
              "name": "Append Error Algorithm",
              "url": "sourcebuffer-append-error"
            },
            {
              "number": "3.5.4",
              "name": "Prepare Append Algorithm",
              "url": "sourcebuffer-prepare-append"
            },
            {
              "number": "3.5.5",
              "name": "Buffer Append Algorithm",
              "url": "sourcebuffer-buffer-append"
            },
            {
              "number": "3.5.6",
              "name": "Stream Append Loop",
              "url": "sourcebuffer-stream-append-loop"
            },
            {
              "number": "3.5.7",
              "name": "Range Removal",
              "url": "sourcebuffer-range-removal"
            },
            {
              "number": "3.5.8",
              "name": "Initialization Segment Received",
              "url": "sourcebuffer-init-segment-received"
            },
            {
              "number": "3.5.9",
              "name": "Default track language",
              "url": "sourcebuffer-default-track-language"
            },
            {
              "number": "3.5.10",
              "name": "Default track label",
              "url": "sourcebuffer-default-track-label"
            },
            {
              "number": "3.5.11",
              "name": "Default track kinds",
              "url": "sourcebuffer-default-track-kinds"
            },
            {
              "number": "3.5.12",
              "name": "Coded Frame Processing",
              "url": "sourcebuffer-coded-frame-processing"
            },
            {
              "number": "3.5.13",
              "name": "Coded Frame Removal Algorithm",
              "url": "sourcebuffer-coded-frame-removal"
            },
            {
              "number": "3.5.14",
              "name": "Coded Frame Eviction Algorithm",
              "url": "sourcebuffer-coded-frame-eviction"
            },
            {
              "number": "3.5.15",
              "name": "Audio Splice Frame Algorithm",
              "url": "sourcebuffer-audio-splice-frame-algorithm"
            },
            {
              "number": "3.5.16",
              "name": "Audio Splice Rendering Algorithm",
              "url": "sourcebuffer-audio-splice-rendering-algorithm"
            },
            {
              "number": "3.5.17",
              "name": "Text Splice Frame Algorithm",
              "url": "sourcebuffer-text-splice-frame-algorithm"
            }
          ]
        }
      ]
    },
    {
      "number": "4.",
      "name": "SourceBufferList Object",
      "url": "sourcebufferlist",
      "children": [
        {
          "number": "4.1",
          "name": "Attributes",
          "url": "attributes-2",
          "children": [
            {
              "name": "length of type unsigned long, readonly",
              "url": "widl-SourceBufferList-length",
              "type": "attribute"
            },
            {
              "name": "onaddsourcebuffer of type EventHandler",
              "url": "widl-SourceBufferList-onaddsourcebuffer",
              "type": "attribute"
            },
            {
              "name": "onremovesourcebuffer of type EventHandler",
              "url": "widl-SourceBufferList-onremovesourcebuffer",
              "type": "attribute"
            }
          ]
        },
        {
          "number": "4.2",
          "name": "Methods",
          "url": "methods-2",
          "children": [
            {
              "name": "SourceBuffer",
              "url": "widl-SourceBufferList-SourceBuffer-getter-unsigned-long-index",
              "type": "method"
            }
          ]
        }
      ]
    },
    {
      "number": "5.",
      "name": "VideoPlaybackQuality Object",
      "url": "videoplaybackquality",
      "children": [
        {
          "number": "5.1",
          "name": "Attributes",
          "url": "attributes-3",
          "children": [
            {
              "name": "corruptedVideoFrames of type unsigned long, readonly",
              "url": "widl-VideoPlaybackQuality-corruptedVideoFrames",
              "type": "attribute"
            },
            {
              "name": "creationTime of type DOMHighResTimeStamp, readonly",
              "url": "widl-VideoPlaybackQuality-creationTime",
              "type": "attribute"
            },
            {
              "name": "droppedVideoFrames of type unsigned long, readonly",
              "url": "widl-VideoPlaybackQuality-droppedVideoFrames",
              "type": "attribute"
            },
            {
              "name": "totalFrameDelay of type double, readonly",
              "url": "widl-VideoPlaybackQuality-totalFrameDelay",
              "type": "attribute"
            },
            {
              "name": "totalVideoFrames of type unsigned long, readonly",
              "url": "widl-VideoPlaybackQuality-totalVideoFrames",
              "type": "attribute"
            }
          ]
        }
      ]
    },
    {
      "number": "6.",
      "name": "TrackDefault Object",
      "url": "trackdefault",
      "children": [
        {
          "number": "6.1",
          "name": "Constructors",
          "url": "constructors",
          "children": [
            {
              "name": "TrackDefault",
              "url": "widl-ctor-TrackDefault--TrackDefaultType-type-DOMString-language-DOMString-label-sequence-DOMString--kinds-DOMString-byteStreamTrackID",
              "type": "constructor"
            }
          ]
        },
        {
          "number": "6.2",
          "name": "Attributes",
          "url": "attributes-4",
          "children": [
            {
              "name": "byteStreamTrackID of type DOMString, readonly",
              "url": "widl-TrackDefault-byteStreamTrackID",
              "type": "attribute"
            },
            {
              "name": "kinds of type sequence<DOMString>, readonly",
              "url": "widl-TrackDefault-kinds",
              "type": "attribute"
            },
            {
              "name": "label of type DOMString, readonly",
              "url": "widl-TrackDefault-label",
              "type": "attribute"
            },
            {
              "name": "language of type DOMString, readonly",
              "url": "widl-TrackDefault-language",
              "type": "attribute"
            },
            {
              "name": "type of type TrackDefaultType, readonly",
              "url": "widl-TrackDefault-type",
              "type": "attribute"
            }
          ]
        }
      ]
    },
    {
      "number": "7.",
      "name": "TrackDefaultList Object",
      "url": "trackdefaultlist",
      "children": [
        {
          "number": "7.1",
          "name": "Constructors",
          "url": "constructors-1",
          "children": [
            {
              "name": "TrackDefaultList",
              "url": "widl-ctor-TrackDefaultList--sequence-TrackDefault--trackDefaults",
              "type": "constructor"
            }
          ]
        },
        {
          "number": "7.2",
          "name": "Attributes",
          "url": "attributes-5",
          "children": [
            {
              "name": "length of type unsigned long, readonly",
              "url": "widl-TrackDefaultList-length",
              "type": "attribute"
            }
          ]
        },
        {
          "number": "7.3",
          "name": "Methods",
          "url": "methods-3",
          "children": [
            {
              "name": "TrackDefault",
              "url": "widl-TrackDefaultList-TrackDefault-getter-unsigned-long-index",
              "type": "method"
            }
          ]
        }
      ]
    },
    {
      "number": "8.",
      "name": "URL Object Extensions",
      "url": "url",
      "children": [
        {
          "number": "8.1",
          "name": "Methods",
          "url": "methods-4",
          "children": [
            {
              "name": "createObjectURL, static",
              "url": "widl-URL-createObjectURL-DOMString-MediaSource-mediaSource",
              "type": "method"
            }
          ]
        }
      ]
    },
    {
      "number": "9.",
      "name": "HTMLMediaElement Extensions",
      "url": "htmlmediaelement-extensions"
    },
    {
      "number": "10.",
      "name": "HTMLVideoElement Extensions",
      "url": "htmlvideoelement-extensions",
      "children": [
        {
          "number": "10.1",
          "name": "Methods",
          "url": "methods-5",
          "children": [
            {
              "name": "getVideoPlaybackQuality",
              "url": "widl-HTMLVideoElement-getVideoPlaybackQuality-VideoPlaybackQuality",
              "type": "method"
            }
          ]
        }
      ]
    },
    {
      "number": "11.",
      "name": "AudioTrack Extensions",
      "url": "audio-track-extensions",
      "children": [
        {
          "number": "11.1",
          "name": "Attributes",
          "url": "attributes-6",
          "children": [
            {
              "name": "sourceBuffer of type SourceBuffer, readonly , nullable",
              "url": "widl-AudioTrack-sourceBuffer",
              "type": "attribute"
            }
          ]
        }
      ]
    },
    {
      "number": "12.",
      "name": "VideoTrack Extensions",
      "url": "video-track-extensions",
      "children": [
        {
          "number": "12.1",
          "name": "Attributes",
          "url": "attributes-7",
          "children": [
            {
              "name": "sourceBuffer of type SourceBuffer, readonly , nullable",
              "url": "widl-VideoTrack-sourceBuffer",
              "type": "attribute"
            }
          ]
        }
      ]
    },
    {
      "number": "13.",
      "name": "TextTrack Extensions",
      "url": "text-track-extensions",
      "children": [
        {
          "number": "13.1",
          "name": "Attributes",
          "url": "attributes-8",
          "children": [
            {
              "name": "sourceBuffer of type SourceBuffer, readonly , nullable",
              "url": "widl-TextTrack-sourceBuffer",
              "type": "attribute"
            }
          ]
        }
      ]
    }
  ]
};