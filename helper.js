export const filterInvalidMoves = (moves) => {
  moves = moves.filter((move) => {
    return move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7;
  });

  return moves;
};
