window.BENCHMARK_DATA = {
  "lastUpdate": 1620875375258,
  "repoUrl": "https://github.com/lyuyuan/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/lyuyuan/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605746098220,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 185539,
            "range": "± 51763",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 680326,
            "range": "± 118276",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4717429,
            "range": "± 1247477",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19138586,
            "range": "± 2560490",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8e0f0a919663b210627c132d6af3e19a95d8037",
          "message": "example: add back udp-codec example (#3205)",
          "timestamp": "2020-12-01T12:20:20+09:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/lyuyuan/tokio/commit/a8e0f0a919663b210627c132d6af3e19a95d8037"
        },
        "date": 1606879853395,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 197218,
            "range": "± 50653",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 720796,
            "range": "± 84360",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5567378,
            "range": "± 1399872",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20350172,
            "range": "± 2414004",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ff7d8c3525bfbe1493aebe89b5e8d455f02f1eb",
          "message": "net: hide net::unix::datagram module from docs (#3775)",
          "timestamp": "2021-05-10T04:35:09+09:00",
          "tree_id": "667e2529d24d3461f07a09a31850163f00105dc4",
          "url": "https://github.com/lyuyuan/tokio/commit/9ff7d8c3525bfbe1493aebe89b5e8d455f02f1eb"
        },
        "date": 1620875326857,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 160054,
            "range": "± 5035",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 609485,
            "range": "± 44676",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4855982,
            "range": "± 1022920",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18454205,
            "range": "± 3267364",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/lyuyuan/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605746225671,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6093617,
            "range": "± 1511676",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5992878,
            "range": "± 1316981",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5475659,
            "range": "± 2007036",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 510,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 525,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 519,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 44029,
            "range": "± 10760",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 655,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 908529,
            "range": "± 140262",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 665661,
            "range": "± 97223",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8e0f0a919663b210627c132d6af3e19a95d8037",
          "message": "example: add back udp-codec example (#3205)",
          "timestamp": "2020-12-01T12:20:20+09:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/lyuyuan/tokio/commit/a8e0f0a919663b210627c132d6af3e19a95d8037"
        },
        "date": 1606879907715,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7205771,
            "range": "± 3117602",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6690398,
            "range": "± 2088864",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6456266,
            "range": "± 3325476",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 759,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 747,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 757,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 60648,
            "range": "± 12467",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1101,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1052926,
            "range": "± 185806",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 807482,
            "range": "± 334252",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ff7d8c3525bfbe1493aebe89b5e8d455f02f1eb",
          "message": "net: hide net::unix::datagram module from docs (#3775)",
          "timestamp": "2021-05-10T04:35:09+09:00",
          "tree_id": "667e2529d24d3461f07a09a31850163f00105dc4",
          "url": "https://github.com/lyuyuan/tokio/commit/9ff7d8c3525bfbe1493aebe89b5e8d455f02f1eb"
        },
        "date": 1620875374139,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6400384,
            "range": "± 2858027",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6049418,
            "range": "± 2680625",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6134749,
            "range": "± 3174006",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 274,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 279,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 282,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 56633,
            "range": "± 5327",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 865,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 991946,
            "range": "± 98169",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 730043,
            "range": "± 84762",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/lyuyuan/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605746343147,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 852,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13212,
            "range": "± 2950",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 873,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12788,
            "range": "± 7345",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 490,
            "range": "± 64",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8e0f0a919663b210627c132d6af3e19a95d8037",
          "message": "example: add back udp-codec example (#3205)",
          "timestamp": "2020-12-01T12:20:20+09:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/lyuyuan/tokio/commit/a8e0f0a919663b210627c132d6af3e19a95d8037"
        },
        "date": 1606879879181,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1010,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15748,
            "range": "± 5514",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1001,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15072,
            "range": "± 4509",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 570,
            "range": "± 85",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ff7d8c3525bfbe1493aebe89b5e8d455f02f1eb",
          "message": "net: hide net::unix::datagram module from docs (#3775)",
          "timestamp": "2021-05-10T04:35:09+09:00",
          "tree_id": "667e2529d24d3461f07a09a31850163f00105dc4",
          "url": "https://github.com/lyuyuan/tokio/commit/9ff7d8c3525bfbe1493aebe89b5e8d455f02f1eb"
        },
        "date": 1620875346609,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 897,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17666,
            "range": "± 8402",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 885,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16955,
            "range": "± 8159",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 568,
            "range": "± 66",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/lyuyuan/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605746457654,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16359,
            "range": "± 6097",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1100,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 641,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15941,
            "range": "± 6361",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1102,
            "range": "± 124",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8e0f0a919663b210627c132d6af3e19a95d8037",
          "message": "example: add back udp-codec example (#3205)",
          "timestamp": "2020-12-01T12:20:20+09:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/lyuyuan/tokio/commit/a8e0f0a919663b210627c132d6af3e19a95d8037"
        },
        "date": 1606879860648,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14632,
            "range": "± 5185",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1078,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 645,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15016,
            "range": "± 3936",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1078,
            "range": "± 184",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ff7d8c3525bfbe1493aebe89b5e8d455f02f1eb",
          "message": "net: hide net::unix::datagram module from docs (#3775)",
          "timestamp": "2021-05-10T04:35:09+09:00",
          "tree_id": "667e2529d24d3461f07a09a31850163f00105dc4",
          "url": "https://github.com/lyuyuan/tokio/commit/9ff7d8c3525bfbe1493aebe89b5e8d455f02f1eb"
        },
        "date": 1620875336280,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13648,
            "range": "± 2909",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 828,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 565,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13701,
            "range": "± 3255",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 830,
            "range": "± 195",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}