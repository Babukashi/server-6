// 今回はクライアントサイドもルーティングもないので何もimportしない
const kv = await Deno.openKv();

await kv.set(['pokemon', 'アマルス'], { type: 'こおり', level: 30 });

const pkmn = await kv.get(['pokemon', 'アマルス']);
console.log(pkmn);

const KvListIterator = await kv.list([{ prefix: pokemon }]);

for await (const pkmn of pkmns) {
  console.log(pkmn.key);
  console.log(pkmn.value);
}
