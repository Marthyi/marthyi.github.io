---
tags: Sql-Server
---

## Taille des tables en bases de donn&eacute;es

```` sql
select 
CASE stats.index_id 
    WHEN 0 THEN tables.name+' ( table )'
    WHEN 1 THEN tables.name+' ( table )'
    ELSE tables.name+' ( index )'
END,
indexes.type_desc,
indexes.name, stats.used_page_count *8 / 1024 [Taille MB],stats.used_page_count *8 / 1024 /1024 [Taille GB]
FROM sys.tables tables
INNER JOIN sys.dm_db_partition_stats stats ON stats.object_id = tables.object_id
LEFT JOIN sys.indexes indexes ON indexes.index_id = stats.index_id AND indexes.object_id = tables.object_id
order by tables.name, indexes.index_id
````