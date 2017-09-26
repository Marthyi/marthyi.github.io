## Taille des tables en bases de donn&eacute;es

```` sql
SELECT 
    s.Name AS SchemaName,
    t.NAME AS TableName,
    p.rows AS RowCounts,
    CAST(ROUND(((SUM(a.total_pages) * 8) / 1024.00 / 1024), 2) AS NUMERIC(36, 2)) AS TotalSpaceGB,
    CAST(ROUND(((SUM(a.total_pages) * 8) / 1024.00), 2) AS NUMERIC(36, 2)) AS TotalSpaceMB
FROM 
    sys.tables t
INNER JOIN sys.indexes i ON t.OBJECT_ID = i.object_id
INNER JOIN sys.partitions p ON i.object_id = p.OBJECT_ID AND i.index_id = p.index_id
INNER JOIN sys.allocation_units a ON p.partition_id = a.container_id
LEFT OUTER JOIN sys.schemas s ON t.schema_id = s.schema_id
GROUP BY t.Name, s.Name, p.Rows
````


### Qu'est ce que la fragmentation des index
[Article de blog](https://blog.developpez.com/mikedavem/p10152/sql-server-2005/architecture/fragmentation_des_indexes_et_fragments_q)

### Mesurer la fragmentation dans une base
[Documentation msdn](https://docs.microsoft.com/fr-fr/sql/relational-databases/system-dynamic-management-views/sys-dm-db-index-physical-stats-transact-sql)

```` sql
SELECT 
    s.Name AS SchemaName,
    t.NAME AS TableName,
    i.[Name],
    stat.avg_fragmentation_in_percent
FROM sys.tables t
INNER JOIN sys.indexes i ON t.OBJECT_ID = i.object_id
INNER JOIN sys.schemas s ON t.schema_id = s.schema_id
INNER JOIN sys.dm_db_index_physical_stats (DB_ID(DB_NAME()),NULL,NULL,NULL,NULL) stat
        ON t.object_id = stat.object_id
WHERE stat.avg_fragmentation_in_percent > 30
ORDER BY stat.avg_fragmentation_in_percent DESC
````
### Défragmenter une table
https://docs.microsoft.com/fr-fr/sql/relational-databases/indexes/reorganize-and-rebuild-indexes

#### Dégframenter tous les index d'une table

Pour un index fragmenté **entre  5% et 30%**, il est conseillé de le réorganiser
```` sql
ALTER INDEX ALL ON {tablename} REORGANIZE;
````

Pour un index fragmenté à **plus de 30%**, il est conseillé de le reconstruire
```` sql
ALTER INDEX ALL ON {tablename} REBUILD WITH (ONLINE = ON);
````