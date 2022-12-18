const filter = (drinkers, nightClub) => {
  if (drinkers.length === 0) {
    return undefined;
  }
  const vip = [];
  nightClub(drinkers, vip);
  console.log(vip);
  return vip;
};

module.exports = filter;
