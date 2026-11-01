const gameState = {
  pointer: 0,
  label: 'start',
  trust: 0,
  clues: 0,
  wrote_history: [],
  flags: {},
  typing: false,
  pendingBgm: null,
  audioUnlocked: false, // <--- 就是这一行，必须加上
  log: [] 
};