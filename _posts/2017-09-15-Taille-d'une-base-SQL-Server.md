---
tags: Sql-Server
---

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