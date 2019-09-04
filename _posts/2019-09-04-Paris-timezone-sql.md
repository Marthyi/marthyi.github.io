---
tags: sql
---

## Afficher un datetime UTC en Paris Time

````sql
SELECT CAST(EV.CreationDateTime AT TIME ZONE 'Romance Standard Time' as datetime) CreationDateTime
FROM MyTable 
````


Références de l'article:
- [docs.microsoft - AT TIME ZONE (Transact-SQL)](https://docs.microsoft.com/fr-fr/sql/t-sql/queries/at-time-zone-transact-sql?view=sql-server-2017)  
- [docs.microsoft - Default Time Zones](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones)