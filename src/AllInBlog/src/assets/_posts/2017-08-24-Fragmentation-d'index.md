﻿### Qu'est ce que la fragmentation des index
[Article de blog](https://blog.developpez.com/mikedavem/p10152/sql-server-2005/architecture/fragmentation_des_indexes_et_fragments_q)

### Mesurer la fragmentation dans une base
[Documentation msdn](https://docs.microsoft.com/fr-fr/sql/relational-databases/system-dynamic-management-views/sys-dm-db-index-physical-stats-transact-sql)

```csharp
with sqldata as
(
SELECT 
    s.Name AS SchemaName,
    t.NAME AS TableName,
    i.[Name] AS IndexName,
	i.index_id AS IndexId,
	t.object_id AS TableId,
    stat.avg_fragmentation_in_percent AS Fragmentation,	
    CAST(CAST(stat.avg_fragmentation_in_percent as numeric(36,2)) AS nvarchar) + '%' AS FragmentationDescription,	
	stat.index_type_desc AS IndexDescription,
	stat.alloc_unit_type_desc AS IndexMemoryType,
	stat.partition_number
FROM sys.tables t
INNER JOIN sys.indexes i ON t.OBJECT_ID = i.object_id
INNER JOIN sys.schemas s ON t.schema_id = s.schema_id
INNER JOIN sys.dm_db_index_physical_stats (DB_ID(DB_NAME()),NULL,NULL,NULL,NULL) stat ON t.object_id = stat.object_id and stat.index_id = i.index_id
)
select 
SchemaName, TableName, IndexName,partition_number, IndexId, FragmentationDescription,IndexDescription,IndexMemoryType
 from sqldata
 where Fragmentation > 30
order by  Fragmentation desc
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





#### Monitorer la dégframentation des index

```` sql
SELECT r.session_id,r.command,CONVERT(NUMERIC(6,2),r.percent_complete)
AS [Percent Complete],CONVERT(VARCHAR(20),DATEADD(ms,r.estimated_completion_time,GetDate()),20) AS [ETA Completion Time],
CONVERT(NUMERIC(10,2),r.total_elapsed_time/1000.0/60.0) AS [Elapsed Min],
CONVERT(NUMERIC(10,2),r.estimated_completion_time/1000.0/60.0) AS [ETA Min],
CONVERT(NUMERIC(10,2),r.estimated_completion_time/1000.0/60.0/60.0) AS [ETA Hours],
CONVERT(VARCHAR(1000),(SELECT SUBSTRING(text,r.statement_start_offset/2,
CASE WHEN r.statement_end_offset = -1 THEN 1000 ELSE (r.statement_end_offset-r.statement_start_offset)/2 END)
FROM sys.dm_exec_sql_text(sql_handle)))
FROM sys.dm_exec_requests r 
WHERE command IN ('Alter Index')
````