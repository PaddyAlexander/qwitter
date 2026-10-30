// NOTE: intentional bug for the CI automatic-repair smoke test. Do not fix in the initial PR.
function add(a, b) {
  return a - b;
}

module.exports = { add };
