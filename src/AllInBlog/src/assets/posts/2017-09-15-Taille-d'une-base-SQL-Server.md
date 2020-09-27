## Taille des tables en bases de donn&eacute;es

```` sql
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
	stat.partition_number,
	cast(Round(stats.used_page_count * 8 / 1024.0,2) as numeric(36,2)) AS IndexSizeMo,
	case 
	WHEN stats.used_page_count * 8 < 1024 THEN CAST(stats.used_page_count * 8 AS nvarchar)  + ' Ko'
	WHEN stats.used_page_count * 8 / 1024 < 1024 THEN CAST(stats.used_page_count * 8 / 1024 AS nvarchar)  + ' Mo'
	ELSE CAST(stats.used_page_count * 8 / 1024 / 1024 AS nvarchar)  + ' Go'
	END IndexSizeDescription
FROM sys.tables t
INNER JOIN sys.indexes i ON t.OBJECT_ID = i.object_id
INNER JOIN sys.schemas s ON t.schema_id = s.schema_id
INNER JOIN sys.dm_db_index_physical_stats (DB_ID(DB_NAME()),NULL,NULL,NULL,NULL) stat ON t.object_id = stat.object_id and stat.index_id = i.index_id
INNER JOIN sys.dm_db_partition_stats stats ON stats.object_id = t.object_id and stats.index_id = i.index_id
where stat.alloc_unit_type_desc = 'IN_ROW_DATA'
)
select 
SchemaName, TableName, Sum(IndexSizeMo)
 from sqldata
 group by SchemaName,TableName
order by  Sum(IndexSizeMo) desc
````