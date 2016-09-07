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
              "name": "sourceBuffers",
              "url": "dom-mediasource-sourcebuffers",
              "type": "attribute"
            },
            {
              "name": "activeSourceBuffers",
              "url": "dom-mediasource-activesourcebuffers",
              "type": "attribute"
            },
            {
              "name": "readyState",
              "url": "dom-readystate",
              "type": "attribute"
            },
            {
              "name": "duration",
              "url": "dom-mediasource-duration",
              "type": "attribute"
            },
            {
              "name": "onsourceopen",
              "url": "dom-mediasource-onsourceopen",
              "type": "attribute"
            },
            {
              "name": "onsourceended",
              "url": "dom-mediasource-onsourceended",
              "type": "attribute"
            },
            {
              "name": "onsourceclose",
              "url": "dom-mediasource-onsourceclose",
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
              "url": "dom-mediasource-addsourcebuffer",
              "type": "method"
            },
            {
              "name": "removeSourceBuffer",
              "url": "dom-mediasource-removesourcebuffer",
              "type": "method"
            },
            {
              "name": "endOfStream",
              "url": "dom-mediasource-endofstream",
              "type": "method"
            },
            {
              "name": "setLiveSeekableRange",
              "url": "dom-mediasource-setliveseekablerange",
              "type": "method"
            },
            {
              "name": "clearLiveSeekableRange",
              "url": "dom-mediasource-clearliveseekablerange",
              "type": "method"
            },
            {
              "name": "isTypeSupported",
              "url": "dom-mediasource-istypesupported",
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
              "name": "mode",
              "url": "dom-sourcebuffer-mode",
              "type": "attribute"
            },
            {
              "name": "updating",
              "url": "dom-sourcebuffer-updating",
              "type": "attribute"
            },
            {
              "name": "buffered",
              "url": "dom-sourcebuffer-buffered",
              "type": "attribute"
            },
            {
              "name": "timestampOffset",
              "url": "dom-sourcebuffer-timestampoffset",
              "type": "attribute"
            },
            {
              "name": "audioTracks",
              "url": "dom-sourcebuffer-audiotracks",
              "type": "attribute"
            },
            {
              "name": "videoTracks",
              "url": "dom-sourcebuffer-videotracks",
              "type": "attribute"
            },
            {
              "name": "textTracks",
              "url": "dom-sourcebuffer-texttracks",
              "type": "attribute"
            },
            {
              "name": "appendWindowStart",
              "url": "dom-sourcebuffer-appendwindowstart",
              "type": "attribute"
            },
            {
              "name": "appendWindowEnd",
              "url": "dom-sourcebuffer-appendwindowend",
              "type": "attribute"
            },
            {
              "name": "onupdatestart",
              "url": "dom-sourcebuffer-onupdatestart",
              "type": "attribute"
            },
            {
              "name": "onupdate",
              "url": "dom-sourcebuffer-onupdate",
              "type": "attribute"
            },
            {
              "name": "onupdateend",
              "url": "dom-sourcebuffer-onupdateend",
              "type": "attribute"
            },
            {
              "name": "onerror",
              "url": "dom-sourcebuffer-onerror",
              "type": "attribute"
            },
            {
              "name": "onabort",
              "url": "dom-sourcebuffer-onabort",
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
              "name": "appendBuffer",
              "url": "dom-sourcebuffer-appendbuffer",
              "type": "method"
            },
            {
              "name": "abort",
              "url": "dom-sourcebuffer-abort",
              "type": "method"
            },
            {
              "name": "remove",
              "url": "dom-sourcebuffer-remove",
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
              "name": "Range Removal",
              "url": "sourcebuffer-range-removal"
            },
            {
              "number": "3.5.7",
              "name": "Initialization Segment Received",
              "url": "sourcebuffer-init-segment-received"
            },
            {
              "number": "3.5.8",
              "name": "Coded Frame Processing",
              "url": "sourcebuffer-coded-frame-processing"
            },
            {
              "number": "3.5.9",
              "name": "Coded Frame Removal Algorithm",
              "url": "sourcebuffer-coded-frame-removal"
            },
            {
              "number": "3.5.10",
              "name": "Coded Frame Eviction Algorithm",
              "url": "sourcebuffer-coded-frame-eviction"
            },
            {
              "number": "3.5.11",
              "name": "Audio Splice Frame Algorithm",
              "url": "sourcebuffer-audio-splice-frame-algorithm"
            },
            {
              "number": "3.5.12",
              "name": "Audio Splice Rendering Algorithm",
              "url": "sourcebuffer-audio-splice-rendering-algorithm"
            },
            {
              "number": "3.5.13",
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
              "name": "length",
              "url": "dom-sourcebufferlist-length",
              "type": "attribute"
            },
            {
              "name": "onaddsourcebuffer",
              "url": "dom-sourcebufferlist-onaddsourcebuffer",
              "type": "attribute"
            },
            {
              "name": "onremovesourcebuffer",
              "url": "dom-sourcebufferlist-onremovesourcebuffer",
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
              "name": "getter",
              "url": "dfn-sourcebufferlist-getter",
              "type": "method"
            }
          ]
        }
      ]
    },
    {
      "number": "5.",
      "name": "URL Object Extensions",
      "url": "url",
      "children": [
        {
          "number": "5.1",
          "name": "Methods",
          "url": "methods-3",
          "children": [
            {
              "name": "createObjectURL",
              "url": "dom-url-createobjecturl",
              "type": "method"
            }
          ]
        }
      ]
    },
    {
      "number": "6.",
      "name": "HTMLMediaElement Extensions",
      "url": "htmlmediaelement-extensions"
    },
    {
      "number": "7.",
      "name": "AudioTrack Extensions",
      "url": "audio-track-extensions",
      "children": [
        {
          "name": "sourceBuffer",
          "url": "dom-audiotrack-sourcebuffer",
          "type": "attribute"
        }
      ]
    },
    {
      "number": "8.",
      "name": "VideoTrack Extensions",
      "url": "video-track-extensions",
      "children": [
        {
          "name": "sourceBuffer",
          "url": "dom-videotrack-sourcebuffer",
          "type": "attribute"
        }
      ]
    },
    {
      "number": "9.",
      "name": "TextTrack Extensions",
      "url": "text-track-extensions",
      "children": [
        {
          "name": "sourceBuffer",
          "url": "dom-texttrack-sourcebuffer",
          "type": "attribute"
        }
      ]
    },
    {
      "number": "10.",
      "name": "Byte Stream Formats",
      "url": "byte-stream-formats"
    }
  ]
}