export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...

  queue.forEach((element) => {
    if (typeof element === "function") {
      finalState = element(finalState);
    } else {
      finalState = element;
    }
  });

  return finalState;
}
