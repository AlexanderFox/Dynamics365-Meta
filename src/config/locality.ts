export const regionFields = ['bahai_regionid', 'bahai_clusterid'] as const;

export const localityFields = [...regionFields, 'bahai_localityid', 'bahai_localitycalculationstatuscode'] as const;
