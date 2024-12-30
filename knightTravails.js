import { filterInvalidMoves } from "./helper.js";

export function validMoves(source) {
  let x = source[0],
    y = source[1];

  let moves = [
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x - 1, y - 2],
    [x - 1, y + 2],
    [x + 2, y - 1],
    [x + 2, y + 1],
    [x + 1, y - 2],
    [x + 1, y + 2],
  ];

  moves = filterInvalidMoves(moves);

  return moves;
}
