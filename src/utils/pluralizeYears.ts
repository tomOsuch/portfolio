/**
 * Polska odmiana słowa "rok" przez liczbę: 1 rok, 2–4 lata, 5+ lat,
 * z wyjątkiem 12–14 ("lat") i końcówek 2–4 w dziesiątkach ("lata").
 */
export const pluralizeYears = (n: number): string => {
  const last = n % 10;
  const lastTwo = n % 100;

  if (n === 1) return 'rok';
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return 'lata';
  return 'lat';
};

export default pluralizeYears;
