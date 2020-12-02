window.BENCHMARK_DATA = {
  "lastUpdate": 1606879854253,
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
      }
    ]
  }
}