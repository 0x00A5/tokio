window.BENCHMARK_DATA = {
  "lastUpdate": 1605746099540,
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
      }
    ]
  }
}