import { Injectable } from '@angular/core';
import { Job } from './job';
import { LinkageResult } from './linkage-result';
import { Comparator, ComparatorSet } from './comparator';
import { CsvImport } from './csv-import';
import { Dataset, DatasetKind } from './dataset';
import { DataColumnType, DataColumn } from './data-table';
import { LinkageMatch } from './linkage-match';
import { Linkage } from './linkage';
import { Migration } from './migration';

@Injectable({
  providedIn: 'root'
})
export class SerializationService {
  private jobAttributeMap = {
    id: "id",
    kind: "kind",
    status: "status",
    error: "error",
    linkage_id: "linkageId",
    linkage_result_id: "linkageResultId",
    migration_id: "migrationId",
    started_at: "startedAt",
    ended_at: "endedAt",
    linkage_result: "linkageResult"
  };

  private linkageResultAttributeMap = {
    id: "id",
    linkage_id: "linkageId",
    job_id: "jobId",
    match_count: "matchCount",
    job: "job",
    linkage: "linkage"
  };

  private comparatorAttributeMap = {
    id: "id",
    kind: "kind",
    options: "options",
    order: "order",
    linkage_id: "linkageId"
  };

  private csvImportAttributeMap = {
    id: "id",
    original_name: "originalName",
    file_size: "fileSize",
    sha1_sum: "sha1Sum",
    fields: "fields",
    created_at: "createdAt",
    dataset_id: "datasetId",
    data: "data",
    rows: "rows"
  };

  private datasetAttributeMap = {
    id: "id",
    name: "name",
    type: "kind",
    host: "host",
    username: "username",
    password: "password",
    database_name: "databaseName",
    database_path: "databasePath",
    table_name: "tableName",
    fields: "fields",
    csv_import_id: "csvImportId",
    migration_id: "migrationId",
    pending: "pending"
  };

  private linkageMatchAttributeMap = {
    record_1: "record1",
    record_2: "record2",
    score: "score"
  };

  private linkageAttributeMap = {
    id: "id",
    name: "name",
    description: "description",
    threshold: "threshold",
    dataset_1_id: "dataset1Id",
    dataset_2_id: "dataset2Id",
    dataset_1: "dataset1",
    dataset_2: "dataset2",
    comparators: "comparators",
    linkage_results: "linkageResults"
  };

  private migrationAttributeMap = {
    id: "id",
    description: "description",
    operations: "operations",
    input_dataset_id: "inputDatasetId",
    output_dataset_id: "outputDatasetId",
    input_dataset: "inputDataset",
    output_dataset: "outputDataset"
  };

  constructor() { }

  buildJob(attribs: any): Job {
    let result = new Job();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.jobAttributeMap) {
        let mappedKey = this.jobAttributeMap[key];
        switch (mappedKey) {
          case 'startedAt':
          case 'endedAt':
            if (value) {
              value = new Date(Date.parse(value));
            }
            break;
          case 'linkageResult':
            value = this.buildLinkageResult(value);
            break;
        }
        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuildJob(job: Job): any {
    let result = {};
    for (let key in this.jobAttributeMap) {
      let mappedKey = this.jobAttributeMap[key];
      let value = job[mappedKey];
      if (!value) {
        continue;
      }

      switch (mappedKey) {
        case 'startedAt':
        case 'endedAt':
        case 'status':
          continue;

        case 'linkageId':
          value = +value;
          break;
      }

      result[key] = value;
    }
    return result;
  }

  buildLinkageResult(attribs: any): LinkageResult {
    let result = new LinkageResult();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.linkageResultAttributeMap) {
        let mappedKey = this.linkageResultAttributeMap[key];
        switch (mappedKey) {
          case 'job':
            value = this.buildJob(value);
            break;
          case 'linkage':
            value = this.buildLinkage(value);
        }
        result[mappedKey] = value;
      }
    }
    return result;
  }

  buildComparator(attribs: any): Comparator {
    let result = new Comparator();
    for (let key in attribs) {
      if (key in this.comparatorAttributeMap) {
        let mappedKey = this.comparatorAttributeMap[key];
        result[mappedKey] = attribs[key];
      }
    }
    if ('set_1' in attribs && 'set_2' in attribs) {
      result.sets = attribs.set_1.map((field1, i) => {
        let value = { field1: field1, field2: attribs.set_2[i] };
        return value as ComparatorSet;
      });
    }
    return result;
  }

  unbuildComparator(comparator: Comparator): any {
    let result: any = {};
    for (let key in this.comparatorAttributeMap) {
      let mappedKey = this.comparatorAttributeMap[key];
      result[key] = comparator[mappedKey];
    }
    result.set_1 = [];
    result.set_2 = [];
    comparator.sets.forEach(s => {
      result.set_1.push(s.field1);
      result.set_2.push(s.field2);
    });
    return result;
  }

  buildCsvImport(attribs: any): CsvImport {
    let result = new CsvImport();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.csvImportAttributeMap) {
        let mappedKey = this.csvImportAttributeMap[key];
        switch (mappedKey) {
          case 'createdAt':
            if (value) {
              value = new Date(Date.parse(value));
            }
            break;
        }
        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuildCsvImport(csvImport: CsvImport): any {
    let result = {};
    for (let key in this.csvImportAttributeMap) {
      let mappedKey = this.csvImportAttributeMap[key];
      let value = csvImport[mappedKey];
      if (!value) {
        continue;
      }
      result[key] = value;
    }
    return result;
  }

  buildDataset(attribs: any): Dataset {
    let result = new Dataset();
    for (let key in attribs) {
      if (key in this.datasetAttributeMap) {
        let value = attribs[key];
        if (key == "fields") {
          value = value.map(v => this.buildField(v));
        } else if (key == "type") {
          value = value as DatasetKind;
        }
        let mappedKey = this.datasetAttributeMap[key];
        result[mappedKey] = value;
      }
    }
    return result;
  }

  buildField(attribs: any): DataColumn {
    let colType: DataColumnType;
    switch (attribs.kind) {
      case "integer":
        colType = DataColumnType.Integer;
        break;
      case "number":
        colType = DataColumnType.Number;
        break;
      case "string":
      case "text":
        colType = DataColumnType.Text;
        break;
      default:
        console.log('invalid data column type:', attribs.kind);
        throw new Error("invalid data column type: " + attribs.kind);
    }
    return {
      name: attribs.name,
      type: colType,
      primaryKey: attribs.primary_key
    } as DataColumn;
  }

  unbuildDataset(dataset: Dataset): any {
    let result = {};
    for (let key in this.datasetAttributeMap) {
      if (key == "fields") {
        continue;
      }
      let mappedKey = this.datasetAttributeMap[key];
      result[key] = dataset[mappedKey];
    }
    return result;
  }

  buildLinkageMatch(attribs: any): LinkageMatch {
    let result = new LinkageMatch();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.linkageMatchAttributeMap) {
        let mappedKey = this.linkageMatchAttributeMap[key];
        result[mappedKey] = value;
      }
    }
    return result;
  }

  buildLinkage(attribs: any): Linkage {
    let result = new Linkage();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.linkageAttributeMap) {
        let mappedKey = this.linkageAttributeMap[key];

        switch (mappedKey) {
          case 'dataset1':
          case 'dataset2':
            value = this.buildDataset(value);
            break;
          case 'comparators':
            value = value.map(cattribs => {
              return this.buildComparator(cattribs);
            });
            break;
          case 'jobs':
            value = value.map(jattribs => {
              return this.buildJob(jattribs);
            });
            break;
          case 'linkageResults':
            value = value.map(lattribs => {
              return this.buildLinkageResult(lattribs);
            });
        }

        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuildLinkage(linkage: Linkage): any {
    let result = {};
    for (let key in this.linkageAttributeMap) {
      let mappedKey = this.linkageAttributeMap[key];
      let value = linkage[mappedKey];
      if (!value) {
        continue;
      }

      switch (mappedKey) {
        case 'dataset1':
        case 'dataset2':
        case 'comparators':
        case 'jobs':
          continue;

        case 'dataset1Id':
        case 'dataset2Id':
        case 'threshold':
          value = +value;
          break;
      }

      result[key] = value;
    }
    return result;
  }

  buildMigration(attribs: any): Migration {
    let result = new Migration();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.migrationAttributeMap) {
        let mappedKey = this.migrationAttributeMap[key];

        switch (mappedKey) {
          case 'inputDataset':
          case 'outputDataset':
            value = this.buildDataset(value);
            break;
        }

        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuildMigration(migration: Migration): any {
    let result = {};
    for (let key in this.migrationAttributeMap) {
      let mappedKey = this.migrationAttributeMap[key];
      let value = migration[mappedKey];
      if (!value) {
        continue;
      }

      switch (mappedKey) {
        case 'inputDataset':
          continue;

        case 'inputDatasetId':
          value = +value;
          break;

        case 'outputDataset':
          value = this.unbuildDataset(value);
          break;
      }

      result[key] = value;
    }
    return result;
  }
}
