export function shipFactory(length) {
  if (!(typeof length === "number")) {
    return null;
  }

  const ship = Array(length);
  for (let i = 0; i < length; i++) {
    ship[i] = 0;
  }

  return { ship };
}
