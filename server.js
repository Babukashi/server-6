// 今回はクライアントサイドもルーティングもないので何もimportしない
const kv = await Deno.openKv();

await kv.set(['pokemon', 'アマルス'], { type: 'こおり', level: 30 });
